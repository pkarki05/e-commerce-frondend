import { createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth, db } from "../../firrebase/firebaseConfig";
import { toast } from "react-toastify";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { setUser } from "./UserSlice";

export const createNewUser = async (userInfo) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, userInfo.email, userInfo.password);
    await toast.promise(Promise.resolve(), { pending: 'Please Wait...' });
    const user = userCredential.user;
    const userDocRef = doc(db, 'Customers', user.uid);
    const { password, confirmPassword, ...rest } = userInfo;
    await setDoc(userDocRef, rest);        
    console.log('New user created:', user);
  } catch (error) {
    console.log("Error", error);
    toast.error("Error", error.message);
  }
}

export const loginUser = ({ email, password }) => async (dispatch) => {
  try {
    const authSnapPromise = signInWithEmailAndPassword(auth, email, password);
    toast.promise(authSnapPromise, { pending: "In progress..." });
    const { user } = await authSnapPromise;
    dispatch(getUserInfo(user.uid));
    toast.success('Login Successful');
  } catch (e) {
    toast.error("Login error");
  }
};

export const handleForgotPassword = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    toast.success('Email sent successfully!');
  } catch (error) {
    console.error("Error sending password reset email:", error);
    toast.error("Failed to send password reset email.");
  }
}

export const getUserInfo = (uid) => async (dispatch) => {
  try {
    const userSnap = await getDoc(doc(db, "Customers", uid));
    if (userSnap.exists()) {
      const userData = userSnap.data();
      dispatch(setUser({ ...userData, uid }));
    } else {
      console.log("No such document!");
    }
  } catch (e) {
    toast.error(e.message);
  }
};
export const userLogOut=()=>async(dispatch)=>{
  try {
    await signOut(auth);
    dispatch(setUser({}))
    toast.success("Logout Sucessful")
    
  } catch (error) {
    toast.error("Logout Error", +error.message)
    
  }
}


export const updateUserProfile = (updatedData) => async (dispatch, getState) => {
  try {
    const user = getState().user.user; // Ensure you access the correct path to get the user object
    const userId = user.uid; // Assuming user ID is stored in user state

    const userRef = doc(db, 'Customers', userId);

    // Ensure updatedData includes the necessary fields
    const updatedProfile = {
      ...updatedData,
      avatar: updatedData.avatar || user.avatar, // Use user.avatar from state if not updated
    };

    await updateDoc(userRef, updatedProfile);

    dispatch(setUser(updatedProfile)); // Update user state with updated profile
    toast.success("Profile updated successfully");
  } catch (error) {
    console.error("Error updating profile:", error);
    toast.error(`Error updating profile: ${error.message}`);
  }
};

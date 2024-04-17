import { createUserWithEmailAndPassword,sendPasswordResetEmail,signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firrebase/firebaseConfig";
import { toast } from "react-toastify";
import { doc, setDoc } from "firebase/firestore";


export const createNewUser = async (userInfo) => {

    try {
        // Create user account
        const userCredential = await createUserWithEmailAndPassword(auth, userInfo.email, userInfo.password);
        
        // Display pending toast
       await  toast.promise(Promise.resolve(), { pending: 'Please Wait...' });
        const user = userCredential.user;
        const userDocRef = doc(db, 'Customers', user.uid);

        // Save additional user data to Firestore
        const { password, confirmPassword, ...rest } = userInfo;
        await setDoc(userDocRef, rest);        
        console.log('New user created:', user);
    } catch (error) {
        console.log("Error", error);
        toast.error("Error", error.message);
    }
}
export const loginUser =
 async ({ email, password }) =>
  {
    try {
      const authSnapPromise = signInWithEmailAndPassword(auth, email, password);
      toast.promise(authSnapPromise, {
        pending: "In progress...",
      });
      const { user } = await authSnapPromise;
      toast.success('Login Successful')
    } catch (e) {
      toast.error("Login error");
    }
  };
  export const handleForgotPassword = async (e) => {
    
  
  
    
      try {
        
  
        // Email exists, send password reset email
        await sendPasswordResetEmail(auth, e.email);
        toast.success('Email sent successfully!');
      } catch (error) {
        console.error("Error sending password reset email:", error);
        toast.error("Failed to send password reset email.");
      }
  
    } 


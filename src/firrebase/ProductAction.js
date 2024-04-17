import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "./firebaseConfig";

export const ProductInfo = async (uid) => {
  try {
    const collectionRef = collection(db, 'Products');
    const querySnapshot = await getDocs(collectionRef);
    const newData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }));
    return newData;
  } catch (error) {
    console.error('Error fetching data:', error);
    return []; // Return an empty array or handle the error as needed
  }
};
export const CategoryInfo = async (uid) => {
  try {
    const collectionRef = collection(db, 'Categories');
    const querySnapshot = await getDocs(collectionRef);
    const newData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }));
    return newData;
  } catch (error) {
    console.error('Error fetching data:', error);
    return []; // Return an empty array or handle the error as needed
  }
};




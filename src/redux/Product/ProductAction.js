import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firrebase/firebaseConfig";
import { setProductList } from "./productSlice";
import { toast } from "react-toastify";

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
export const fetchProductAction=()=>async(dispatch)=>{
  try {
    const querySnapShot=await getDocs(collection(db,'Products'))
    const productList=[]
    querySnapShot.forEach((doc)=>{
      const slug=doc.id;
      const data=doc.data();
      productList.push({...data,slug})
    })
    dispatch(setProductList(productList))
    
  } catch (error) {
    toast.error(error.message)
    
  }
}
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




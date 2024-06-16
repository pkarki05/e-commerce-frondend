import { collection, getDocs, query, where, doc, updateDoc } from "firebase/firestore";
import { db } from "../../firrebase/firebaseConfig";
import { setProductList } from "./productSlice";
import { toast } from "react-toastify";

// Fetch Product Info
export const ProductInfo = async () => {
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

// Fetch Product Action
export const fetchProductAction = () => async (dispatch) => {
  try {
    const querySnapShot = await getDocs(collection(db, 'Products'));
    const productList = [];
    querySnapShot.forEach((doc) => {
      const slug = doc.id;
      const data = doc.data();
      productList.push({ ...data, slug });
    });
    dispatch(setProductList(productList));
  } catch (error) {
    toast.error(error.message);
  }
};

// Category Info
export const CategoryInfo = async () => {
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

// Update Product Action
export const updateProduct = (slug, updatedData) => async (dispatch, getState) => {
  try {
    // Update the product in Firestore
    const productRef = doc(db, 'Products', slug);
    await updateDoc(productRef, updatedData);

    // Fetch the updated product list
    const updatedProductList = await ProductInfo();

    // Dispatch the action to update the product list in the Redux store
    dispatch(setProductList(updatedProductList));

    toast.success("Product updated successfully");
  } catch (error) {
    toast.error(`Error updating product: ${error.message}`);
  }
};

import { collection, getDocs } from "firebase/firestore"
import { db } from "../../firrebase/firebaseConfig"
import { toast } from "react-toastify"
import { setCategoryList } from "./CategorySlice"

export const fetchCategoryAction=()=>async(dispatch)=>{
    try {
        const querySnapShot=await getDocs(collection(db, 'Categories'))
        console.log('categorylist', querySnapShot)
         const catList=[]
    querySnapShot.forEach((doc)=>{
        const slug=doc.id;
        const data=doc.data();
        catList.push({...data, slug})
        
    }) 
    dispatch(setCategoryList(catList))
}
    catch (error) {
        toast.error(error.message)
        
    }
    
    
}
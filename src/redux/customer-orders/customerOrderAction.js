import { doc, setDoc } from "firebase/firestore"
import { db } from "../../firrebase/firebaseConfig"
import { addOrder } from "./customerOrderSlice";

export const saveOrderToFirebase=(order)=>async(dispatch)=>{
    try {
        const orederRef=doc(db, "Orders", order.id)
        await setDoc(orederRef,order);
        dispatch(addOrder(order))
        
    } catch (error) 
    {
        console.log("Error saving in firebase",error)
        
    }

}
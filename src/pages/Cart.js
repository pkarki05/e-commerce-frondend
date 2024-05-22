import React, { useEffect, useLayoutEffect, useState } from 'react'
import MetaHelmentComp from '../components/MetaHelmentComp'
import BreadCrum from '../components/BreadCrum'
import { MdDeleteForever, MdOutlineDeleteForever } from "react-icons/md";
import { Link, useLocation, useParams } from 'react-router-dom';
import Awatch from '../images/a_watch.jpg'
import { ProductInfo } from '../redux/Product/ProductAction';
import { type } from '@testing-library/user-event/dist/type';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, decreseCartQuantity, removeFromCart, updateCartQuantity } from '../redux/Cart/CartSlice';
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";



const Cart = () => {
    const dispatch=useDispatch()
    const cartItems=useSelector(state=>state.cart.cartItems)

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    const handleIncrement=(incQty)=>{
        dispatch(addToCart(incQty))
        

    }
    const handleDecrement=(cartqty)=>{
        dispatch(decreseCartQuantity(cartqty))

    }

   
   const handleQuantityChange=(id,qty)=>{
   
    

   }

   const handleRemoveFromTheCart=(id)=>{
    dispatch(removeFromCart(id))
   }


const calculateTotal=()=>{
    return cartItems.reduce((total, item)=>total+(item.price*(item.cartQuantity || item.cartQuantity)),0)
}
   
        

    

   
    
  

    
  return (
    <>
     <MetaHelmentComp title={'Cart '}/>
    <BreadCrum title='Cart'/>
    <div className="cart-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
            <div className="row">
                <div className="col-12">
                    {cartItems.length>0?(
                        <>
                          <div className="cart-header d-flex justify-content-between align-items-center">
                        <h4 className='cart-col-1'>Product</h4>
                        <h4 className='cart-col-2'>Price</h4>
                        <h4 className='cart-col-3'>Quantity</h4>
                        <h4 className='cart-col-4'>Total</h4>
                    </div>
                    { cartItems?.map((item, index)=>(
                        <div className="cart-data  d-flex justify-content-between align-items-center" key={index}>
                        
                        <div className='cart-col-1 d-flex align-items-center gap-15'>
                            <div className='w-25'>
                                <img src={item.thumbnail}  className='img-fluid'  alt="image" />
                            </div>
                            <div className='w-75'>
                                <p>{item.title} </p>
                                <p >Color:red</p>
                                <p > Size:S</p>
                            </div>

                    </div>
                    <div className='cart-col-2'>
                        <h5 className="price">${item.price} </h5>

                    </div>
                    <div className='cart-col-3 d-flex align-items-center gap-15'>
                        <div className='d-flex gap-10 border border-light'>
                            <button className='border-0 fs-3 m-1 ' onClick={()=>handleDecrement(item)}>-</button>
   
                            <input type="number"  className='form-control border-0'  min={1} max={10} value={ item.cartQuantity} onChange={(e)=>handleQuantityChange(item.slug, e.target.value)}/>

                            <button className='border-0 fs-3  m-1' onClick={()=>handleIncrement(item)} >+</button>


                        </div>
                        <div>
                        <MdOutlineDeleteForever className='text-danger fs-2 borde delete'  onClick={()=>handleRemoveFromTheCart(item.slug)}/>

                        </div>

                    </div>
                    <div className='cart-col-4'>
                    <h5 className="price">${(item.price)*(item.cartQuantity)}</h5>


                    </div>

                    </div>


                    ))}
                    
                        

                    
                    
                    <div className="col-12 py-2 mt-4">
                        <div className="d-flex justify-content-between align-items-baseline">
                        <Link className='button' to='/store'>Continue to Shopping</Link>

                        </div>
                        <div className='d-flex align-items-end flex-column'> 
                            <h4>Subtotal:${calculateTotal()}</h4>
                            <p>Taxes and shipping calculated at checkout</p>
                            <Link className='button' to='/checkout'> Procceed To Checkout</Link>
                        </div>
                    </div>

                        </>
                    ):(
                        <div className='p-2 m-2 '>
                            
                         <h4 className=''>Cart is Empty</h4>
                         <Link className='button' to='/store'>Continue to Shopping</Link>



                        </div>
                    )}
                    
                      
                   

                </div>
            </div>
        </div>
    </div>
      
    </>
 )
}

export default Cart

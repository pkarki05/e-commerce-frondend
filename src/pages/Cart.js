import React from 'react'
import MetaHelmentComp from '../components/MetaHelmentComp'
import BreadCrum from '../components/BreadCrum'
import { MdDeleteForever, MdOutlineDeleteForever } from "react-icons/md";
import { Link } from 'react-router-dom';


const Cart = () => {
  return (
    <>
     <MetaHelmentComp title={'Cart '}/>
    <BreadCrum title='Cart'/>
    <div className="cart-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
            <div className="row">
                <div className="col-12">
                    <div className="cart-header d-flex justify-content-between align-items-center">
                        <h4 className='cart-col-1'>Product</h4>
                        <h4 className='cart-col-2'>Price</h4>
                        <h4 className='cart-col-3'>Quantity</h4>
                        <h4 className='cart-col-4'>Total</h4>
                    </div>
                    <div className="cart-data  d-flex justify-content-between align-items-center">
                        
                        <div className='cart-col-1 d-flex align-items-center gap-15'>
                            <div className='w-25'>
                                <img src='/images/a_watch.jpg' className='img-fluid'  alt="image" />
                            </div>
                            <div className='w-75'>
                                <p>xdfghjnn</p>
                                <p >Color:red</p>
                                <p > Size:S</p>
                            </div>

                    </div>
                    <div className='cart-col-2'>
                        <h5 className="price">$22</h5>

                    </div>
                    <div className='cart-col-3 d-flex align-items-center gap-15'>
                        <div>
                            <input type="number"  className='form-control' min={1} max={10}/>
                        </div>
                        <div>
                        <MdOutlineDeleteForever className='text-danger '/>

                        </div>

                    </div>
                    <div className='cart-col-4'>
                    <h5 className="price">$22</h5>


                    </div>

                    </div>
                    <div className="col-12 py-2 mt-4">
                        <div className="d-flex justify-content-between align-items-baseline">
                        <Link className='button' to='/product'>Continue to Shopping</Link>

                        </div>
                        <div className='d-flex align-items-end flex-column'> 
                            <h4>Subtotal:$333</h4>
                            <p>Taxes and shipping calculated at checkout</p>
                            <Link className='button' to='/checkout'> Procceed To Checkout</Link>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    </div>
      
    </>
 )
}

export default Cart

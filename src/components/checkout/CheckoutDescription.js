import React from 'react'
import Awatch from '../../images/a_watch.jpg';
import { useSelector } from 'react-redux';


const CheckoutDescription = () => {
    const cartItems = useSelector(state => state.cart.cartItems);
    
    const calculateSubTotal = () => {
        return cartItems.reduce((total, item) => total + ((item.salesPrice || item.price) * item.cartQuantity), 0);
      };

      const calculateShipping=()=>{
        const total=cartItems.reduce((total, item) => total + ((item.salesPrice || item.price) * item.cartQuantity), 0)
        if(total<=1000)
        {
            return 6;
        }else{
            return Math.round(0.01*total)

        }
    
      }

      const calcualteTotal=()=>{
        const total= calculateSubTotal()+ calculateShipping()
        return total

      }
    

  return (
    <>
    
          <div className='border-bottom py-4'>
          {cartItems.map((item)=>(
        
          <div className="d-flex gap-10 align-items-center justify-content-between mb-2 ">
              <div className="w-100 d-flex gap-10">
                  <div className='w-25 position-relative'>
                      <span style={{ top: '-10px', right: '20px' }} className='p-2 badge bg-secondary text-white rounded-circle position-absolute'>{item.cartQuantity}</span>
                      <img src={item.thumbnail} className='img-fluid' alt="" width='70px' />
                  </div>
                  <div className=' w-75 title'>
                      <h5 className='total-price'>{item.title}</h5>
                      <p className='total-price'>#s/red</p>
                  </div>
              </div>
              <div className='flex-grow-1 m-3'>
                  <h5 className='total-price'>${(item.price)*(item.cartQuantity)}</h5>
              </div>
          </div>
             ))}
      </div>
      
      <div className='border-bottom py-4'>
          <div className="d-flex justify-content-between align-items-center">
              <p className='total-price'>Subtotal</p>
              <p className='total-price'>${calculateSubTotal()}</p>
          </div>
      </div>
      <div>
          <div className="d-flex justify-content-between align-items-center">
              <p className='mb-0 total-price'>Shipping</p>
              <p className='mb-0 total-price'>${calculateShipping()}</p>
          </div>
      </div>
      <div>
          <div className="d-flex justify-content-between align-items-center border-bottom py-4">
              <h4 className='total'>Total</h4>
              <h5 className='total-price'>${calcualteTotal()}</h5>
          </div>
      </div>
    </>
  )
}

export default CheckoutDescription

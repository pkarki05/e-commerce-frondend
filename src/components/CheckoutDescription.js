import React from 'react'
import Awatch from '../images/a_watch.jpg';


const CheckoutDescription = () => {
  return (
    <>
     <div className='border-bottom py-4'>
                                <div className="d-flex gap-10 align-items-center mb-2">
                                    <div className="w-75 d-flex gap-10">
                                        <div className='w-25 position-relative'>
                                            <span style={{ top: '-20px', right: '-10px' }} className='p-2 badge bg-secondary text-white rounded-circle position-absolute'>1</span>
                                            <img src={Awatch} className='img-fluid' alt="" width='70px' />
                                        </div>
                                        <div className='title'>
                                            <h5 className='total-price'>description</h5>
                                            <p className='total-price'>#s/red</p>
                                        </div>
                                    </div>
                                    <div className='flex-grow-1'>
                                        <h5 className='total'>$990</h5>
                                    </div>
                                </div>
                            </div>
                            <div className='border-bottom py-4'>
                                <div className="d-flex justify-content-between align-items-center">
                                    <p className='total-price'>Subtotal</p>
                                    <p className='total-price'>$990</p>
                                </div>
                            </div>
                            <div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <p className='mb-0 total-price'>Shipping</p>
                                    <p className='mb-0 total-price'>Calculated at next step</p>
                                </div>
                            </div>
                            <div>
                                <div className="d-flex justify-content-between align-items-center border-bottom py-4">
                                    <h4 className='total'>Total</h4>
                                    <h5 className='total-price'>$990</h5>
                                </div>
                            </div>
                   
      
    </>
  )
}

export default CheckoutDescription

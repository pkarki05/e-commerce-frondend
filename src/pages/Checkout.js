import React from 'react'
import { Link } from 'react-router-dom'

const Checkout = () => {
  return (
    <>
    <div className="checkout-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
            <div className="row">
                <div className="col-7">
                    <div className="chekout-left-data">
                        <h3 className="website-name">Dev Corner</h3>
                        <nav style={{"--bs-breadcrumb-divider": '>'}} aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link className='text-dark total-price ' to='/cart'>Cart </Link></li>
                            <li>&nbsp;/</li>
                            <li className="breadcrumb-item active" aria-current="page">Information</li>
                            <li>&nbsp;/</li>

                            <li className="breadcrumb-item active" aria-current="page">Shipping</li>
                            <li>&nbsp;/</li>

                            <li className="breadcrumb-item active" aria-current="page">Payment</li>
                        </ol>
                        </nav>
                        <h4 className="title">
                            Contact Information

                        </h4>
                        <p className="user-details">Prakash (karki@gmail.com)</p>
                        <h4 className='mb-3'>Shipping Address</h4>
                    <form action="" className='d-flex gap-15 flex-wrap justify-content-between'>
                        <div className='w-100'>
                            <select name="address" id="" className='form-control form-select'>
                                <option value="" selected disabled>Select Country</option>

                            </select>
                        </div>
                        <div className='flex-grow-1'>
                            <input type="text" name="" id="" className='form-control' placeholder='First Name' />
                        </div>
                        <div className='flex-grow-1'>
                            <input type="text" name="" id="" className='form-control' placeholder='Last Name' />
                        </div>
                        <div className='w-100'>
                            <input type="text" name="" id="" className='form-control' placeholder='Address'  />
                        </div>
                        <div className='w-100'>
                            <input type="text" name="" id="" className='form-control' placeholder='apartment, suite, etc'  />
                        </div>
                        <div className='flex-grow-1'>
                            <input type="text" name="" id="" className='form-control' placeholder='City' />
                        </div>
                        <div className='flex-grow-1'>
                            <select name="" className='form-control form-select' id="">
                                <option value="" selected disabled>Select State</option>
                            </select>
                        </div>
                        <div className='flex-grow-1'>
                            <input type="text" name="" id="" className='form-control' placeholder='Zip-code'  />
                        </div>
                        <div className="w-100 ">
                            <div className="d-flex justify-content-between">
                                <Link to='/cart' className='text-dark' >&#62; Return to Cart</Link>
                                <Link className='button'>Continue to Shipping</Link>

                            </div>
                        </div>

                        
                    </form>
                    </div>
                </div>
                <div className="col-5">
                    <div className='border-bottom py-4'>
                        <div className="d-flex gap-10 align-items-center mb-2">
                            <div className="w-75 d-flex  gap-10">
                            <div className='w-25 position-relative'>
                                <span style={{top:'-20px', right:'-10px'}} className='p-2 badge bg-secondary text-white rounded-circle  position-absolute '>1</span>
                            <img src="/images/a_watch.jpg" className='img-fluid' alt="" />
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
                        <p className='total-price'> Subtotal</p>
                        <p className='total-price'>$990</p>
                    </div>
                    </div>

                    <div>
                    <div className="d-flex justify-content-between align-items-center">
                        <p className='mb-0 total-price'>Shipping</p>
                        <p className='mb-0 total-price'>$9</p>
                    </div>
                    </div>
                    <div>
                    <div className="d-flex justify-content-between align-items-center border-bottom py-4">
                        <h4 className='total'>Total</h4>
                        <h5 className='total-price'>$999</h5>
                    </div>
                    </div>
                   
                   


                </div>
            </div>


        </div>
    </div>
      
    </>
  )
}

export default Checkout

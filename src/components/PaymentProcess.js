import React from 'react'
import { Link } from 'react-router-dom'

const PaymentProcess = ({handleClick}) => {
  return (
    <>
            <form className='d-flex gap-15 flex-wrap '>
                <div className='w-75'>
                    <input type="text" name="holderName" className='form-control' placeholder='Name on Card' required />
                </div>
                <div className='w-75'>
                    <input type="number" name="cardNumber" className='form-control' placeholder='Card Number' required />
                </div>
                <div className='w-75 d-flex gap-4 '>
                <div className='w-50'>
                    <input type="date" name="expiryDate" className='form-control' placeholder='Expiry Date' required />
                </div>
                <div className='w-50' >
                    <input type="number" name="cvv" className='form-control' placeholder='CVV' required  />
                </div>
                    
                </div>
                <div className="w-75 m-3">
                <div className="d-flex justify-content-between">
                    <Link to='' className='text-dark'  onClick={handleClick}>&#60; Go back</Link>
                    <button type="submit" className='button'>Pay Now</button>
                </div>
            </div>
           
              
            </form>
    </>
  )
}

export default PaymentProcess

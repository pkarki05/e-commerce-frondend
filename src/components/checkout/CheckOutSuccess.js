import React from 'react'
import { Link } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';


const CheckOutSuccess = () => {

  return (
    <div className="checkout-success-wrapper">
      <div className="checkout-success-content">
        <FaCheckCircle className="success-icon" />
        <h1>Success!</h1>
        <p>Your request has been processed successfully</p>
        <p>You'll receive a confirmation email shortly.</p>
        <Link to="/" className="btn btn-primary">
          Continue shopping
        </Link>
      </div>
    </div>
  )
}

export default CheckOutSuccess

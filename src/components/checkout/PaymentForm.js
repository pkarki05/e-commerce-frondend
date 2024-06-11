import { Elements } from '@stripe/react-stripe-js'
import React from 'react'
import CheckoutForm from './CheckoutForm'

const PaymentForm = () => {
  return (
    <Elements stripe={stripePromise}>

      <CheckoutForm/>
    </Elements>
  )
}

export default PaymentForm

import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useSelector } from 'react-redux';
import CheckoutForm from './checkout/CheckoutForm';

const stripePromise = loadStripe('pk_test_51PN6fJDmaPfxxxi1L6rUtLSeUmoBPUyP7cXfwi1rbMiGb87rdf06yfMTHpLfkkgnSY7mEE7Ba5D95yCX4QpOCqrG00fakty5tj');

const PaymentProcess = ({ handleOnSubmit }) => {

  const cartItems = useSelector(state => state.cart.cartItems);
  
  const calculateSubTotal = () => {
    return cartItems.reduce((total, item) => total + ((item.salesPrice || item.price) * item.cartQuantity), 0);
  };

  // Convert the amount to the smallest currency unit if needed
  const amount = Math.round(calculateSubTotal() * 100);

  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm amount={amount} handleOnSubmit={handleOnSubmit} />
    </Elements>
  );
};

export default PaymentProcess;

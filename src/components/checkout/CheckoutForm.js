import React, { useState, useEffect } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { fetchClientSecret } from './api'; // Ensure this import is correct
import './CheckoutForm.css'; // Ensure this CSS file is created and styled
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearCart } from '../../redux/Cart/CartSlice';

const CheckoutForm = ({ amount }) => {
  const stripe = useStripe();
  const elements = useElements();
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const [clientSecret, setClientSecret] = useState('');
  const [paymentStatus, setPaymentStatus] = useState('');
 

  useEffect(() => {
    const createPaymentIntent = async () => {
      try {
        const { clientSecret } = await fetchClientSecret(amount);
        setClientSecret(clientSecret);
      } catch (error) {
        console.error('Error creating payment intent:', error);
      }
    };

    createPaymentIntent();
  }, [amount]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardElement,
       
      },
    });

    if (error) {
      setPaymentStatus(`Payment failed: ${error.message}`);
    } else if (paymentIntent.status === 'succeeded') {
      setPaymentStatus('Payment successful!');
      cardElement.clear();
      dispatch(clearCart())
      navigate('/checkout-success')
    }
  };

  const cardStyle = {
    style: {
      base: {
        color: '#32325d',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        '::placeholder': {
          color: '#aab7c4',
        },
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a',
      },
    },
  };

  return (
    <form onSubmit={handleSubmit} className="checkout-form">
      <div className="payment-methods">
        <button type="button" className="payment-method selected">Card</button>
        <button type="button" className="payment-method">Divido</button>
        <button type="button" className="payment-method">Cash App Pay</button>
        <button type="button" className="payment-method">Afterpay</button>
      </div>
      <CardElement options={cardStyle} />
     
      <button type="submit" disabled={!stripe || !clientSecret} className="pay-button">Pay now</button>
      {paymentStatus && <p>{paymentStatus}</p>}
    </form>
  );
};

export default CheckoutForm;

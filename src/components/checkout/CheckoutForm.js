import React, { useState, useEffect } from 'react';
import { CardNumberElement, CardExpiryElement, CardCvcElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { fetchClientSecret } from './api'; // Ensure this import is correct
import './CheckoutForm.css'; // Ensure this CSS file is created and styled
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearCart } from '../../redux/Cart/CartSlice';
import { saveOrderToFirebase } from '../../redux/customer-orders/customerOrderAction';
import { updateUserProfile } from '../../pages/auth/UserAction';

const CheckoutForm = ({ amount }) => {
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [clientSecret, setClientSecret] = useState('');
  const [paymentStatus, setPaymentStatus] = useState('');
  const cartItems = useSelector(state => state.cart.cartItems);
  const user = useSelector(state => state.user.user);



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

    const cardNumberElement = elements.getElement(CardNumberElement);
    const cardExpiryElement = elements.getElement(CardExpiryElement);
    const cardCvcElement = elements.getElement(CardCvcElement);

    if (!cardNumberElement || !cardExpiryElement || !cardCvcElement) {
      setPaymentStatus('Please complete the card details.');
      return;
    }

    const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardNumberElement,
      },
    });

    if (error) {
      setPaymentStatus(`Payment failed: ${error.message}`);
    } else if (paymentIntent.status === 'succeeded') {
       
      setPaymentStatus('Payment successful!');
      dispatch(updateUserProfile({shoppingItems:cartItems}, user))
      cardNumberElement.clear();
      cardExpiryElement.clear();
      cardCvcElement.clear();
      dispatch(clearCart());
      navigate('/checkout-success');
      handleOrderPlacement(paymentIntent, cartItems, user);
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
        backgroundColor: '#f7f9fc',
        padding: '10px 12px',
        border: '1px solid #ccd7e0',
        borderRadius: '4px',
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a',
      },
    },
  };

  const handleOrderPlacement = (paymentIntent, cartItems, user) => {
    const orderData = {
      id: paymentIntent.id,
      amount: paymentIntent.amount,
      items: cartItems,
      user: user,
      createdAt: new Date(),
      status: 'succeeded',
    };
    dispatch(saveOrderToFirebase(orderData));
  };

  return (
    <form onSubmit={handleSubmit} className="checkout-form">
      <div className="payment-methods">
        <button type="button" className="payment-method selected">Card</button>
        <button type="button" className="payment-method">Divido</button>
        <button type="button" className="payment-method">Cash App Pay</button>
        <button type="button" className="payment-method">Afterpay</button>
      </div>
      <div className="card-element">
        <label>
          Card Number
          <CardNumberElement options={cardStyle} />
        </label>
      </div>
      <div className="d-flex justify-content-start gap-5 mt-3 mb-3">
      <div className="card-element">
        <label>
          Expiry Date
          <CardExpiryElement options={cardStyle} />
        </label>
      </div>
      <div className="card-element">
        <label>
          CVC
          <CardCvcElement options={cardStyle} />
        </label>
      </div>

      </div>
      
      <button type="submit" disabled={!stripe || !clientSecret} className="pay-button">Pay now</button>
      {paymentStatus && <p>{paymentStatus}</p>}
    </form>
  );
};

export default CheckoutForm;

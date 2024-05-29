import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ShippingAddress from '../components/ShippingAddress';
import PaymentProcess from '../components/PaymentProcess';
import CheckoutDescription from '../components/CheckoutDescription';

const Checkout = () => {
    const [currentStep, setCurrentStep] = useState('shipping');

    const handleContinueToPayment = () => {
        setCurrentStep('payment');
    };

    const handleGoBackToShipping = () => {
        setCurrentStep('shipping');
    };

    return (
        <div className="checkout-wrapper py-5 home-wrapper-2">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-7">
                        <div className="checkout-left-data">
                            <h3 className="website-name">Dev Corner</h3>
                            <nav style={{ "--bs-breadcrumb-divider": '>' }} aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link className='text-dark total-price' to='/cart'>Cart</Link>
                                    </li>
                                    <li>&nbsp;/</li>
                                    <li className={`breadcrumb-item ${currentStep === 'shipping' ? 'active' : ''}`} aria-current="page">
                                        <span className='text-dark' onClick={handleGoBackToShipping} style={{ cursor: 'pointer' }}>Information</span>
                                    </li>
                                    <li>&nbsp;/</li>
                                    <li className={`breadcrumb-item ${currentStep === 'payment' ? 'active' : ''}`} aria-current="page">
                                        <span className={`text-dark ${currentStep === 'shipping' ? 'disabled-link' : ''}`} onClick={handleContinueToPayment} style={{ cursor: 'pointer' }}>Shipping</span>
                                    </li>
                                    <li>&nbsp;/</li>
                                    <li className="breadcrumb-item active" aria-current="page">Payment</li>
                                </ol>
                            </nav>
                            <h4 className="title">Contact Information</h4>
                            <p className="user-details">Prakash (karki@gmail.com)</p>
                            {currentStep === 'shipping' && (
                                <>
                                    <h4 className='mb-3'>Shipping Address</h4>
                                    <ShippingAddress onContinue={handleContinueToPayment} />
                                </>
                            )}
                            {currentStep === 'payment' && (
                                <>
                                    <h4 className='mb-3'>Payment Process</h4>
                                    <PaymentProcess handleClick={handleGoBackToShipping} />
                                </>
                            )}
                        </div>
                    </div>
                    <div className="col-5">
                        <CheckoutDescription />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;

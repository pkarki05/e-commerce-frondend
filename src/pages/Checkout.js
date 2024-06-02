import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ShippingAddress from '../components/checkout/ShippingAddress';
import PaymentProcess from '../components/PaymentProcess';
import CheckoutDescription from '../components/checkout/CheckoutDescription';
import { setStep } from '../redux/checkout/CheckOutSlice';
import ShippingSummary from '../components/checkout/ShippingSummary';

const Checkout = () => {
    const dispatch = useDispatch();
    const currentStep = useSelector((state) => state.checkout.currentStep);
    const contactInfo = useSelector((state) => state.checkout.contactInfo) || {};
    const shippingAddress = useSelector((state) => state.checkout.shippingAddress) || {};

    const handleOnEdit = () => {
        dispatch(setStep('shipping'));
    };
    const handleOnPaymentSubmit=()=>{

    }

    const handleContinueToPayment = () => {
        dispatch(setStep('payment'));
    };

    const handleGoBackToShipping = () => {
        dispatch(setStep('shipping'));
    };

    const renderStepContent = () => {
        switch (currentStep) {
            case 'shipping':
                return (
                    <ShippingAddress 
                        onContinue={handleContinueToPayment} 
                        initialData={shippingAddress}
                        initialContactInfo={contactInfo}
                    />
                );
            case 'payment':
                return (
                    <>
                        <ShippingSummary 
                            name={contactInfo.fName} 
                            email={contactInfo.email} 
                            phone={contactInfo.phone}
                            street={shippingAddress.street}
                            city={shippingAddress.city}
                            state={shippingAddress.state}
                            postalCode={shippingAddress.postalCode}
                            country={shippingAddress.country} 
                            handleEdit={handleOnEdit}
                        />
                        <h4 className='mt-3'>Payment Process</h4>
                        <PaymentProcess handleClick={handleGoBackToShipping} 
                        handleOnSubmit={handleOnPaymentSubmit}/>
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <div className="checkout-wrapper py-5 home-wrapper-2">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-7">
                        <div className="checkout-left-data">
                            <h3 className="website-name">Dev Corner</h3>
                            <nav aria-label="breadcrumb" className='breadcrumb-nav'>
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link className='text-dark total-price' to='/cart'>Cart</Link>
                                    </li>
                                    <li>&nbsp;/</li>
                                    <li className={`breadcrumb-item ${currentStep === 'shipping' ? 'active' : ''}`} aria-current="page">
                                        <span className='text-dark' onClick={handleGoBackToShipping} style={{ cursor: 'pointer' }}>Customer & shipping information</span>
                                    </li>
                                    <li>&nbsp;/</li>
                                    <li className={`breadcrumb-item ${currentStep === 'payment' ? 'active' : ''}`} aria-current="page">
                                        <span className={`text-dark ${currentStep === 'shipping' ? 'disabled-link' : ''}`} onClick={handleContinueToPayment} style={{ cursor: 'pointer' }}>Payment</span>
                                    </li>
                                </ol>
                            </nav>
                            {renderStepContent()}
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

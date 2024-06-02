import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PaymentProcess = ({ handleOnSubmit }) => {
    const [formData, setFormData] = useState({
        holderName: '',
        cardNumber: '',
        expiryDate: '',
        cvv: ''
    });

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        console.log(value)
    };

    const onSubmit = (e) => {
        e.preventDefault();
        handleOnSubmit(formData);
    };

    return (
        <>
            <form className='d-flex gap-15 flex-wrap' onSubmit={onSubmit}>
                <div className='w-75'>
                    <input
                        type="text"
                        name="holderName"
                        className='form-control'
                        placeholder='Name on Card'
                        value={formData.holderName}
                        onChange={handleOnChange}
                        required
                    />
                </div>
                <div className='w-75'>
                    <input
                        type="number"
                        name="cardNumber"
                        className='form-control'
                        placeholder='Card Number'
                        value={formData.cardNumber}
                        onChange={handleOnChange}
                        required
                    />
                </div>
                <div className='w-75 d-flex gap-4'>
                    <div className='w-50'>
                        <input
                            type="date"
                            name="expiryDate"
                            className='form-control'
                            placeholder='Expiry Date'
                            value={formData.expiryDate}
                            onChange={handleOnChange}
                            required
                        />
                    </div>
                    <div className='w-50'>
                        <input
                            type="number"
                            name="cvv"
                            className='form-control'
                            placeholder='CVV'
                            value={formData.cvv}
                            onChange={handleOnChange}
                            required
                        />
                    </div>
                </div>
                <div className="w-75 m-3">
                    <div className="d-flex justify-content-between">
                        <Link to='' className='text-dark'>&#60; Go back</Link>
                        <button type="submit" className='button'>Pay Now</button>
                    </div>
                </div>
            </form>
        </>
    );
};

export default PaymentProcess;

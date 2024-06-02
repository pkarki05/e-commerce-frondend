import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateContactInfo, updateShippingAddress } from '../../redux/checkout/CheckOutSlice';

const ShippingAddress = ({ onContinue, initialData, initialContactInfo }) => {
    const dispatch = useDispatch();
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(initialData?.country || '');
    const [address, setAddress] = useState({
        street: initialData?.street || '',
        city: initialData?.city || '',
        state: initialData?.state || '',
        postalCode: initialData?.postalCode || '',
        country: initialData?.country || ''
    });
    const [name, setName] = useState({
        fName: initialContactInfo?.fName || '',
        lName: initialContactInfo?.lName || '',
        email: initialContactInfo?.email || '',
        phone: initialContactInfo?.phone || ''
    });

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await fetch('https://restcountries.com/v3.1/all?fields=name');
                const data = await response.json();
                setCountries(data);
            } catch (error) {
                console.log("error fetching country data", error);
            }
        };
        fetchCountries();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "fName" || name === "lName" || name === 'email' || name === 'phone') {
            setName(prevName => ({ ...prevName, [name]: value }));
        } else {
            setAddress(prevAddress => ({ ...prevAddress, [name]: value }));
        }
    };

    const handleCountryChange = (e) => {
        const selectedValue = e.target.value;
        setSelectedCountry(selectedValue);
        setAddress(prevAddress => ({ ...prevAddress, country: selectedValue }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Send the address data to the backend or process it further
        dispatch(updateShippingAddress(address));
        dispatch(updateContactInfo(name));
        console.log("address", address);
        onContinue();
    };

    return (
        <>
            <form className='d-flex gap-15 flex-wrap justify-content-between me-3 pe-3' onSubmit={handleSubmit}>
                <h4 className="title w-100 my-2">Contact Information</h4>
                <div className='w-50'>
                    <input className="form-control" placeholder='E mail Address' type='email' value={name.email} onChange={handleChange} required name='email' />
                </div>
                <div className='flex-grow-1'>
                    <input className="form-control" placeholder='Phone Number' type='phone' value={name.phone} onChange={handleChange} required name='phone' />
                </div>
                <div className='w-50'>
                    <input type="text" name="fName" value={name.fName} onChange={handleChange} className='form-control' placeholder='First Name' required />
                </div>
                <div className='flex-grow-1'>
                    <input type="text" name="lName" value={name.lName} onChange={handleChange} className='form-control' placeholder='Last Name' required />
                </div>
                <h4 className='mb-3'>Shipping Address</h4>
                <div className='w-100'>
                    <select name="country" className='form-control form-select' value={selectedCountry} onChange={handleCountryChange} required>
                        <option value="" disabled>Select your country</option>
                        {countries.map(country => (
                            <option key={country.name.common} value={country.name.common}>
                                {country.name.common}
                            </option>
                        ))}
                    </select>
                </div>
                <div className='w-100'>
                    <input type="text" name="street" value={address.street} onChange={handleChange} className='form-control' placeholder='Street' required />
                </div>
                <div className='flex-grow-1'>
                    <input type="text" name="city" value={address.city} onChange={handleChange} className='form-control' placeholder='City' required />
                </div>
                <div className='flex-grow-1'>
                    <input type="text" name="state" value={address.state} onChange={handleChange} className='form-control' placeholder='State' required />
                </div>
                <div className='flex-grow-1'>
                    <input type="number" name="postalCode" value={address.postalCode} onChange={handleChange} className='form-control' placeholder='Postal code' required />
                </div>
                <div className="w-100 m-3">
                    <div className="d-flex justify-content-between">
                        <Link to='/cart' className='text-dark'>&#60; Return to Cart</Link>
                        <button type="submit" className='button'>Continue to payment</button>
                    </div>
                </div>
            </form>
        </>
    );
};

export default ShippingAddress;

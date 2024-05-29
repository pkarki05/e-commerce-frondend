import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ShippingAddress = ({handleClick}) => {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState('');
    const [address, setAddress] = useState({
        street: '',
        city: '',
        state: '',
        postalCode: '',
        country: ''
    });
    const [name, setName] = useState({
        fName: '',
        lName: ''
    });
    const [errors, setErrors] = useState({});

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
        if (name === "fName" || name === "lName") {
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
     
    };
    
    return (
        <form className='d-flex gap-15 flex-wrap justify-content-between' onSubmit={handleSubmit}>
            <div className='w-100'>
                <select name="country" className='form-control form-select' value={selectedCountry} onChange={handleCountryChange} required>
                    <option value="" disabled>Select your country</option>
                    {countries.map(country => (
                        <option key={country.name.common} value={country.name.common}>
                            {country.name.common}
                        </option>
                    ))}
                </select>
                {errors.country && <span className="text-danger">{errors.country}</span>}
            </div>
            <div className='flex-grow-1'>
                <input type="text" name="fName" value={name.fName} onChange={handleChange} className='form-control' placeholder='First Name' />
                {errors.fName && <span className="text-danger">{errors.fName}</span>}
            </div>
            <div className='flex-grow-1'>
                <input type="text" name="lName" value={name.lName} onChange={handleChange} className='form-control' placeholder='Last Name' />
                {errors.lName && <span className="text-danger">{errors.lName}</span>}
            </div>
            <div className='w-100'>
                <input type="text" name="street" value={address.street} onChange={handleChange} className='form-control' placeholder='Street' required />
                {errors.street && <span className="text-danger">{errors.street}</span>}
            </div>
            <div className='w-100'>
                <input type="text" name="city" value={address.city} onChange={handleChange} className='form-control' placeholder='City' />
                {errors.city && <span className="text-danger">{errors.city}</span>}
            </div>
            <div className='flex-grow-1'>
                <input type="text" name="state" value={address.state} onChange={handleChange} className='form-control' placeholder='State' required />
                {errors.state && <span className="text-danger">{errors.state}</span>}
            </div>
            <div className='flex-grow-1'>
                <input type="number" name="postalCode" value={address.postalCode} onChange={handleChange} className='form-control' placeholder='Postal code' required />
                {errors.postalCode && <span className="text-danger">{errors.postalCode}</span>}
            </div>
            <div className="w-100 m-3">
                <div className="d-flex justify-content-between">
                    <Link to='/cart' className='text-dark'>&#62; Return to Cart</Link>
                    <button type="submit" className='button'onClick={handleClick}>Continue to Payment</button>
                </div>
            </div>
        </form>
    );
};

export default ShippingAddress;

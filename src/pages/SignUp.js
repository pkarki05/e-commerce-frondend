import React, { useState } from 'react';
import MetaHelmentComp from '../components/MetaHelmentComp';
import BreadCrum from '../components/BreadCrum';
import { createNewUser } from './auth/UserAction';
import CustomInput from '../components/CustomInput';
import { Form } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";


const SignUp = () => {
    const navigate=useNavigate();

    const [form, setForm] = useState({});

    const inputFields = [
        {
          name: "fname",
          type: "text",
          placeholder: "First Name",
          required: true,
        },
        {
          name: "lname",
          type: "text",
          placeholder: "Last Name",
          required: true,
        },
        {
          name: "phone",
          type: "tel", // Change type from 'phone' to 'tel'
          placeholder: 'Phone Number'
        },
        {
          name: "email",
          type: "email",
          placeholder: "E-mail",
          required: true,
        },
        {
          name: "password",
          type: "password",
          placeholder: 'Password',
          required: true,
        },
        {
          name: "confirmPassword",
          type: "password",
          placeholder: "Confirm Password",
          required: true,
        },
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
        console.log('form data', form);
    };

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        await createNewUser(form);
        navigate('/login')
    };

    return (
        <>
            <MetaHelmentComp title={'Sign Up'}/>
            <BreadCrum title='Sign Up'/>
            <div className="login-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-12">
                        <div className="auth-card">
                            <h3 className='text-center mb-3'>Create Account</h3>
                            <Form className='d-flex flex-column gap-15' onSubmit={handleOnSubmit}>
                                <div>
                                    {inputFields.map((item) => (
                                        <CustomInput
                                            key={item.name}
                                            {...item}
                                            onChange={handleChange} // Pass onChange event handler
                                        />
                                    ))}
                                </div>
                                <div className='mt-1'>
                                    <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                                        <button className='button border-0'>Create</button>
                                    </div>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;

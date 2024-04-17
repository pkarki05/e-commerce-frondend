import React, { useState } from 'react'
import MetaHelmentComp from '../components/MetaHelmentComp'
import BreadCrum from '../components/BreadCrum'
import { Link } from 'react-router-dom'
import { Form } from 'react-bootstrap'
import CustomInput from '../components/CustomInput'
import { loginUser } from './auth/UserAction'
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [form, setForm] = useState({});
    const navigate=useNavigate();

    const inputFields = [
        {
          name: "email",
          type: "email",
          placeholder: "Email",
        },
        {

            name: "password",
          type: "password",
          placeholder: "Password",
        },
      ];
      const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
      };

      const handleOnSubmit = async(e) => {
        e.preventDefault();
       await loginUser(form)
       navigate('/cart')


      };
  return (
    <>
     <MetaHelmentComp title={'Login'}/>
    <BreadCrum title='Login'/>
    <div className="login-wrapper home-wrapper-2 py-5">
        <div className="row">
            <div className="col-12">
                <div className="auth-card">
                    <h3 className='text-center mb-3'>Login</h3>
                    <Form onSubmit={handleOnSubmit} action="" className='d-flex flex-column gap-15'>
                        <div>
                            {inputFields.map((items)=>(
                                <CustomInput {...items} onChange={handleChange} key={items.name}/>
                            ))}
                        </div>
                       
                       
                        <div className='mt-1'>
                            <Link to='/forgot-password'  >Forgot Password?</Link>
                            <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                                <button className='button border-0' type='submit'>Login</button>
                                <Link className='button signup ' to='/signup'>SignUp</Link>
                            </div>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    </div>
      
    </>
  )
}

export default Login

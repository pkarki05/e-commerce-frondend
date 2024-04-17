import React, { useState } from 'react'
import MetaHelmentComp from '../components/MetaHelmentComp'
import BreadCrum from '../components/BreadCrum'
import { Link, useNavigate } from 'react-router-dom'
import CustomInput from '../components/CustomInput'
import { Form } from 'react-bootstrap'
import { handleForgotPassword } from './auth/UserAction'

const ForgotPassword = () => {
    const[form,setForm]=useState({})
    const navigate=useNavigate()
    const inputFields = [
        {
          name: "email",
          type: "email",
          placeholder: "Email",
        }]
        const handleOnSubmit = async(e) => {
            e.preventDefault();
           await handleForgotPassword(form)
           navigate('/login')
    
    
          };
          const handleChange = (e) => {
            const { name, value } = e.target;
            setForm({ ...form, [name]: value });
          };
  return (
    <>
    <MetaHelmentComp title={'Forgot Password'}/>
    <BreadCrum title='Forgot Password'/>
    <div className="login-wrapper home-wrapper-2 py-5">
        <div className="row">
            <div className="col-12">
                <div className="auth-card">
                    <h3 className='text-center mb-3'>Reset Your Password</h3>
                    <p className='text-center mt-2 mb-3'>We'll send you an email to reset password</p>
                    <Form onSubmit={handleOnSubmit} action="" className='d-flex flex-column gap-15'>
                        <div className='mt-3'>
                            {inputFields.map((input)=>(
                                <CustomInput key={input.name} 
                                onChange={handleChange} {...input}/>
                            ))}
                        </div>    
                        <div className='mt-1'>
                            <div className=" flex-column mt-3 d-flex justify-content-center gap-15 align-items-center">
                                <button className='button border-0' type='submit'>Submit</button>
                                <Link to='/login' >Cancel</Link>

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

export default ForgotPassword

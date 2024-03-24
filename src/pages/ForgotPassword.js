import React from 'react'
import MetaHelmentComp from '../components/MetaHelmentComp'
import BreadCrum from '../components/BreadCrum'
import { Link } from 'react-router-dom'

const ForgotPassword = () => {
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
                    <form action="" className='d-flex flex-column gap-15'>
                        <div>
                            <input type="email" name='email' placeholder='Email' className='form-control w-100'/>
                        </div>
                       
                       
                        <div className='mt-1'>
                            <div className=" flex-column mt-3 d-flex justify-content-center gap-15 align-items-center">
                                <button className='button border-0' type='submit'>Submit</button>
                                <Link to='/login' >Cancel</Link>

                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
      
    </>
  )
}

export default ForgotPassword

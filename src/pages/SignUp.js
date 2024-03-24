import React from 'react'
import MetaHelmentComp from '../components/MetaHelmentComp'
import BreadCrum from '../components/BreadCrum'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <>
      <MetaHelmentComp title={'Sign Up'}/>
    <BreadCrum title='Sign Up'/>

    <div className="login-wrapper home-wrapper-2 py-5">
        <div className="row">
            <div className="col-12">
                <div className="auth-card">
                    <h3 className='text-center mb-3'>Create Account</h3>
                    <form action="" className='d-flex flex-column gap-15'>
                    <div>
                            <input type="text" name='fname' placeholder='First Name' className='form-control w-100'/>
                        </div>
                        <div>
                            <input type="text" name='lname' placeholder='Last Name' className='form-control w-100'/>
                        </div>
                        <div>
                            <input type="tel" name='mobile' placeholder='Mobile Number' className='form-control w-100'/>
                        </div>
                        <div>
                            <input type="email" name='email' placeholder='Email' className='form-control w-100'/>
                        </div>
                        <div>
                            <input type="password" name='password' placeholder='Password' className='form-control w-100'/>
                        </div>
                        <div className='mt-1'>
                            <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                                <button className='button border-0'>Create</button>
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

export default SignUp

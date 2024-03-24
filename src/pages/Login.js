import React from 'react'
import MetaHelmentComp from '../components/MetaHelmentComp'
import BreadCrum from '../components/BreadCrum'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
     <MetaHelmentComp title={'Login'}/>
    <BreadCrum title='Login'/>
    <div className="login-wrapper home-wrapper-2 py-5">
        <div className="row">
            <div className="col-12">
                <div className="auth-card">
                    <h3 className='text-center mb-3'>Login</h3>
                    <form action="" className='d-flex flex-column gap-15'>
                        <div>
                            <input type="email" name='email' placeholder='Email' className='form-control w-100'/>
                        </div>
                        <div>
                            <input type="password" name='password' placeholder='Password' className='form-control w-100'/>
                        </div>
                        <div className='mt-1'>
                            <Link to='/forgot-password'  >Forgot Password?</Link>
                            <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                                <button className='button border-0' type='submit'>Login</button>
                                <Link className='button signup ' to='/signup'>SignUp</Link>
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

export default Login

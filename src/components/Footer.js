import React from 'react'
import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import { SiPinterest } from "react-icons/si";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import newsLetter from '../images/newsletter.png'



const Footer = () => {
  return (
    <>
      <footer className='py-4'>
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5 ">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src={newsLetter} alt="" />
                <h3 className='text-white'>Sign Up for Newsletter</h3>
              </div>

            </div>
            <div className="col-7">
            <div className="input-group ">
  <input type="text" 
  className="form-control py-1" 
  placeholder="Your Email Address..." 
  aria-label="Your Email Address..." 
  aria-describedby="basic-addon2"/>
  <span className="input-group-text p-2" id="basic-addon2">Subscribe
</span>
</div>
            </div>
          </div>
          </div>
           </footer>
      <footer className='py-4'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className='text-white mb-4'> Contact US</h4>
              <address className='text-white fs-6'>84 Kings Canyon Street,  <br /> Harrison (2914) , <br />ACT, Australia </address>
              <a href="tel:0415690123" className='mt-2 d-block mb-2 text-white link'>61 415690123</a>
              <a href="mailto:karkiprakash049@gmail.com" className='mt-2 d-block mb-2 text-white link'>karkiprakash049@gmail.com</a>
              <div className="social-icons d-flex align-items-center gap-15 mt-3">
                <a href=""  className='text-white'>
                <FaFacebook  className='fs-4'/>
                  </a>
                <a href="" className='text-white'>
                <SiPinterest  className='fs-4'/>
                </a>
                <a href="" className='text-white'>
                <AiFillTwitterCircle className='fs-4' />
                </a>
                <a href="" className='text-white'>
                <FaInstagramSquare  className='fs-4'/>
                  </a>
                  <a href="" className='text-white'>
                  <FaYoutube  className='fs-4'/>
                  </a>
                  
                  

              </div>

            </div>
            <div className="col-3">
            <h4 className='text-white mb-4'>Information</h4>

            <div className='footer-links d-flex flex-column'>
                  <Link className='text-white py-2 mb-1 link'>Privacy Policy</Link>
                  <Link className='text-white py-2 mb-1 link' to='/refund-policy'>Refund Policy</Link>
                  <Link className='text-white py-2 mb-1 link' to='shipping-policy'>Shipping Policy</Link>
                  <Link className='text-white py-2 mb-1 link' to='/terms-and-conditions'>Terms & Conditions</Link>

                  <Link className='text-white py-2 mb-1 link'>Blogs</Link>
                </div>


            </div>
            <div className="col-3">
            <h4 className='text-white mb-4'>Account</h4>

            <div className='footer-links d-flex flex-column'>
                  <Link className='text-white py-2 mb-1 link'>About Us</Link>
                  <Link className='text-white py-2 mb-1 link'>FAQ</Link>
                  <Link className='text-white py-2 mb-1 link'>Contact</Link>
                </div>


            </div>
            <div className="col-2">
            <h4 className='text-white mb-4 '>Quick Links</h4>

                <div className='footer-links d-flex flex-column'>
                  <Link className='text-white py-2 mb-1 link'>Laptops</Link>
                  <Link className='text-white py-2 mb-1 link'>HeadPhone</Link>
                  <Link className='text-white py-2 mb-1 link'>Tablet</Link>
                  <Link className='text-white py-2 mb-1 link'>Watch</Link>
                </div>

            </div>
          </div>
        </div>
      </footer>
      <footer className='py-3 '>
        <div className="row">
          <div className="col-12">
            <p className="text-center mb-0 text-white">&copy;{new Date().getFullYear()} Powered by Developer</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer

import React from 'react'
import MetaHelmentComp from '../components/MetaHelmentComp'
import BreadCrum from '../components/BreadCrum'
import { FaHome } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
import { FaCircleInfo } from "react-icons/fa6";




const Contact = () => {
  return (
    <>
<MetaHelmentComp title={'Contact Us'}/>
    <BreadCrum title='Contact Us'/>  
    <div className="contact-wrapper py-5 home-wrapper-2">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13040.827947691347!2d149.13862204999998!3d-35.201312849999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sau!4v1710657200224!5m2!1sen!2sau" 
       width="800" height="450" className="border-0" 
       allowfullscreen="" loading="lazy" 
       referrerpolicy="no-referrer-when-downgrade">

       </iframe>

          </div>
          <div className="col-12 mt-5">
        <div className="contact-inner-wrapper d-flex justify-content-between">
          <div>
            <h3 className='contact-title mb-4'>Contact Us</h3>
            <form action="" className='d-flex flex-column gap-15'>
              <div >
                <input className=' w-100 form-contact' type="text" placeholder='Name' />
              </div>
              <div className=''>
                <input className='w-100 form-contact' type="email" placeholder='E-mail' />
              </div>
              <div className=''>
                <input className='w-100 form-contact' type="number" placeholder='Phone number' />
              </div>
              <div className=''>
                <textarea className='w-100 form-contact' type="text-area" placeholder='comment' cols='20'
                rows='10'/>
              </div>
              <div>
                <button className='button border-0'>Submit</button>
              </div>

            </form>
          </div>
          <div>
            <h3 className='contact-title mb-4'>Get in touch with us</h3>
            <div>
              <ul className='ps-0'>
                <li className='mb-3 d-flex gap-15 align-items-center' >
                  <FaHome className='fs-5'/>
                  <address className='mb-0'>84 Kings Canyon Street, Harrison, ACT (2914)</address>
                </li>
                <li className='mb-3 d-flex gap-15 align-items-center' >
                  <IoIosCall className='fs-5'/>
                  <a href="tel:=61 0415690123">+61 415690123</a>
                  </li>
                  <li className='mb-3 d-flex gap-15 align-items-center' >
                  <IoIosMail className='fs-5'/>
                  <a href="mailto:karkiprakash049@gmail.com">karkiprakash049@gmail.com</a>
                  </li>
                  <li className='mb-3 d-flex gap-15 align-items-center' >
                  <FaCircleInfo className='fs-5'/>
                  <p className='mb-0'>Monday-Friday 9Am-6Pm</p>

                  </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
        </div>
       
        
      </div>
    
    </div>
      </>
  )
}

export default Contact

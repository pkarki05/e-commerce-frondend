import React from 'react'
import { FaRegEdit } from "react-icons/fa";
import { useSelector } from 'react-redux';

const ShippingSummary = ({fName,lName, email,phone,street, city, state, postalCode, country,handleEdit}) => {
 
  return (
    <>
    <div className='d-flex row '>
        <div className='col-7'>
        <h5>Check your details</h5>
    <h6>Contact Info</h6>
    <div className=''>
    <p className='mb-0'>{fName} {lName}</p> 
    <p className='mb-0'>{email}</p>
    <p>{phone}</p>
    </div>
    


        </div>
        <div className="col-5">
            

        </div>

        <div className='col-8 '>
    <h5>Delivering to </h5>
    <div className=''>
    <p className='mb-0'>{street} {city}</p> 
    <p className='mb-0'>{state} {postalCode} {country}</p>
    </div>
    


        </div>
        <div className="col-4">
        <button onClick={handleEdit} className='border-0 fs-5 ' >
            Edit <FaRegEdit />
            </button>


        </div>
    </div>
    

      
    </>
  )
}

export default ShippingSummary

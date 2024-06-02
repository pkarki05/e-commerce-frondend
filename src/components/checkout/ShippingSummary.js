import React from 'react'
import { FaRegEdit } from "react-icons/fa";
import { useSelector } from 'react-redux';

const ShippingSummary = ({name, email,phone,street, city, state, postalCode, country,handleEdit}) => {
 
  return (
    <>
    <div className='d-flex row '>
        <div className='col-7'>
        <h4>Check your details</h4>
    <h6>Contact Info</h6>
    <div className=''>
    <p className='mb-0'>{name}</p>
    <p className='mb-0'>{email}</p>
    <p>{phone}</p>
    </div>
    


        </div>
        <div className="col-5">
            <button onClick={handleEdit}>
            Edit <FaRegEdit />
            </button>

        </div>

        <div className='col-7'>
    <h6>delivering to </h6>
    <div className=''>
    <p className='mb-0'>{street} {city}</p> 
    <p className='mb-0'>{state} {postalCode} {country}</p>
    </div>
    


        </div>
        <div className="col-5">
        <button onClick={handleEdit}>
            Edit <FaRegEdit />
            </button>


        </div>
    </div>
    

      
    </>
  )
}

export default ShippingSummary

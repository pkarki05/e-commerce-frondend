import React, { useState } from 'react'

const ContactInformation = () => {
    const [contactInfo, setContactInfo]=useState({
        fName:'',
        lName:'',
        email:'',
        phone:''
    })
    const handleSubmit=()=>{

    }
    const handleChange=()=>{
        
    }
  return (
    <>

    <form action="" className='d-flex gap-15 flex-wrap justify-content-between me-3 pe-3' onSubmit={handleSubmit}>

           

    </form>
      
    </>
  )
}

export default ContactInformation

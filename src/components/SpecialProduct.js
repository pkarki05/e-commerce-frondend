import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';

const SpecialProduct = () => {
  return (
    <div className='col-4'>
        <div className="special-product-card">
            <div className="d-flex justify-content-between">
                <div>
                    <img src="images/watch.jpg" className='img-fluid' alt="" />
                </div>
                <div className="special-product-content">
                <h6 className="brand">Havels</h6>
                <h5 className='title'>
                    Kids headPhones bulk 10 pack multi colored for students
                </h5>
                <ReactStars
                    count={5}
                    size={16}
                    edit={false}
                    value={3}
                    activeColor="#ffd700"
  />
                
                <p className="price">
                    <span className='red p'> $99.00</span>
                     &nbsp;<strike>$149</strike>
                    </p>
                    <div className="discount-till d-flex align-items-center gap-10">
                        <p className='mb-0'>
                            <b>5</b> days
                        </p>

                        <div className="d-flex gap-10 align-items-center">
                            <span className='badge rounded-circle p-2 bg-danger'>11</span>
                            <span className='badge rounded-circle p-2 bg-danger'>6</span>
                            <span className='badge rounded-circle p-2 bg-danger'>55</span>

                        </div>
                       
                    </div>
                    <div className="prod-count my-3">
                            <p>Products: 5</p>
                            <div className="progress">
                        <div className="progress-bar" 
                        role="progressbar" style={{width:'50%'}}
                        aria-valuenow="25" aria-valuemin="0" 
                        aria-valuemax="100"></div>
                        </div>


                        </div>
                        <Link className='button '>Add to Cart</Link>


                </div>
            </div>
        </div>
      
    </div>
  )
}

export default SpecialProduct

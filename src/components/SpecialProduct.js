import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';
import watch from '../images/watch.jpg'

const SpecialProduct = ({productImage,title,price, salesPrice,days, hours, minutes, seconds, quantity, progressValue}) => {
  return (
    <div className='col-4'>
        <div className="special-product-card">
            <div className="d-flex justify-content-between">
                <div>
                    <img src={productImage} className='img-fluid' alt="" width='200px'  />
                </div>
                <div className="special-product-content">
                <h6 className="brand">Havels</h6>
                <h5 className='title'>
                   {title}
                </h5>
                <ReactStars
                    count={5}
                    size={16}
                    edit={false}
                    value={3}
                    activeColor="#ffd700"
                    
  />
                    <div className='mt-3'>
                    <p className="price">
                    <span className='text-danger text-bold'> ${salesPrice}</span>
                     &nbsp;<strike>${price}</strike>
                    </p>

                    </div>
                
                
                    <div className="discount-till d-flex align-items-center gap-10">
                    <p>Offer Ends In: <b className='text-danger'>{days}</b> days
</p>

                        <p className='mb-0 text-danger'>
                        </p>

                       
                       
                    </div>
                    <div className="prod-count my-3">
                            <p>Stock Available: {quantity}</p>
                            <div className="progress">
                        <div className="progress-bar" 
                        role="progressbar" style={{width:`${progressValue}%`}}
                        aria-valuenow={progressValue} aria-valuemin="0" 
                        aria-valuemax="100"></div>
                        </div>


                        </div>
                        <Link className='button ' to='/cart'>Add to Cart</Link>


                </div>
            </div>
        </div>
      
    </div>
  )
}

export default SpecialProduct

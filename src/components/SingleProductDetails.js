import React from 'react'
import { Link } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";


const SingleProductDetails = ({title,price, category,tags, availability, size, color, quantity }) => {
  return (
    <>
     <div className="main-product-details">
                        <div className='border-bottom'>
                            <h3>{title}</h3>

                        </div>
                        <div className="border-bottom py-3">
                            <p className='price'>${price}</p>
                            <div className="d-flex align-items-center gap-10">
                            <ReactStars
                                    count={5}
                                    size={16}
                                    edit={true}
                                    value={3}
                                    activeColor="#ffd700"

                                />

                            </div>
                            <a href="#review" className='review-btn'>Write a review</a>
                        </div>
                        <div className="border-bottom ">
                            
                            <div className='d-flex gap-10 align-items-center my-2'>
                                <h3 className='product-heading'>Brand: </h3><p className='product-data'>Havels</p>
                            </div>
                            <div className='d-flex gap-10 align-items-center my-2'>
                                <h3 className='product-heading'>Category: </h3><p className='product-data'>{category}</p>
                            </div>
                            <div className='d-flex gap-10 align-items-center my-2'>
                                <h3 className='product-heading'> Tags: </h3><p className='product-data'>Watch</p>
                            </div>
                            <div className='d-flex gap-10 align-items-center my-2'>
                                <h3 className='product-heading'> Availability: </h3><p className='product-data'>In stock</p>
                            </div>
                            <div className='d-flex gap-10  my-2 flex-column'>
                                <h3 className='product-heading'> Size: </h3 >
                                <div className="d-flex flex-wrap gap-15">
                                <span className='badge border border-1 bg-white text-dark border-secondary'>S</span>
                                <span className='badge border border-1 bg-white text-dark border-secondary'>M</span>
                                <span className='badge border border-1 bg-white text-dark border-secondary'>L</span>
                                <span className='badge border border-1 bg-white text-dark border-secondary'>XL</span>
                                </div>
                              
                            </div>
                            <div className='d-flex gap-10 mt-2 mb-3 flex-column'>
                                <h3 className='product-heading'> Color </h3>
                                <p className='product-data'>Color:</p>


                            </div>
                            <div className='d-flex flex-row align-items-center gap-10  mt-2 mb-3 '>
                                <h3 className='product-heading'> Quantity </h3>
                                <div>
                                    <input type="number" style={{width:'60px'}} min={1} max={10} className='form-control' />
                                </div>
                                <div className='d-flex align-items-center gap-30'>
                                <Link className='button border-0' type='submit' to='/cart'>ADD TO CART</Link>
                                <Link className='button signup ' to='/signup'>Buy It Now</Link>
                                </div>


                            </div>
                            <div className='d-flex gap-10 mt-2 mb-3 flex-column'>
                                <h3 className='product-heading'> Shipping & Returns </h3>


                            </div>

                            
                        </div>
                    </div>
      
    </>
  )
}

export default SingleProductDetails

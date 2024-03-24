import React, { useState } from 'react'
import MetaHelmentComp from '../components/MetaHelmentComp'
import BreadCrum from '../components/BreadCrum'
import ProductCard from '../components/ProductCard'
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from 'react-image-zoom';
import { Link } from 'react-router-dom';





const SingleProduct = () => {
    const[orderedProduct, setOrderedProduct]=useState(true);
    const props = {
        width: 400, 
        height: 250, 
        zoomWidth: 500,
        img: "https://m.media-amazon.com/images/I/81OXGwEgBDL._AC_SL1500_.jpg"};

    

  return (
    <>
      <MetaHelmentComp title={'Product Name'}/>
    <BreadCrum title='Product Name'/>
    <div className="main-product-wrapper py-5 home-wrapper-2 ">
        <div className="container-xxl">
            <div className="row">
                <div className="col-6">
                    <div className="main-product-image">
                        <div>
                            <ReactImageZoom {...props}/>

                        </div>
                        
                    </div>
                    <div className="other-product-images d-flex flex-wrap gap-15">
                    <div >
                        <img src="https://www.jbhifi.com.au/cdn/shop/products/623346-Product-0-I-638126569045796477.jpg?v=1677031176" alt="" className='img-fluid'/>
                        </div>
                        <div >
                        <img src="https://www.jbhifi.com.au/cdn/shop/products/623346-Product-0-I-638126569045796477.jpg?v=1677031176" alt="" className='img-fluid'/>
                        </div>
                        <div >
                        <img src="https://www.jbhifi.com.au/cdn/shop/products/623346-Product-0-I-638126569045796477.jpg?v=1677031176" alt="" className='img-fluid'/>
                        </div>
                        <div >
                        <img src="https://www.jbhifi.com.au/cdn/shop/products/623346-Product-0-I-638126569045796477.jpg?v=1677031176" alt="" className='img-fluid'/>
                        </div>
                   
                   
                </div>
                </div>
               
                <div className="col-6">
                    <div className="main-product-details">
                        <div className='border-bottom'>
                            <h3>Kids Headphones Bulk 10 Pack Multi Colored For Students</h3>

                        </div>
                        <div className="border-bottom py-3">
                            <p className='price'>$199.00</p>
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
                                <h3 className='product-heading'>Type: </h3><p className='product-data'>Watch</p>
                            </div>
                            <div className='d-flex gap-10 align-items-center my-2'>
                                <h3 className='product-heading'>Brand: </h3><p className='product-data'>Havels</p>
                            </div>
                            <div className='d-flex gap-10 align-items-center my-2'>
                                <h3 className='product-heading'>Category: </h3><p className='product-data'>Watch</p>
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
                                <button className='button border-0' type='submit'>ADD TO CART</button>
                                <Link className='button signup ' to='/signup'>Buy It Now</Link>
                                </div>


                            </div>
                            <div className='d-flex gap-10 mt-2 mb-3 flex-column'>
                                <h3 className='product-heading'> Shipping & Returns </h3>
                                <p className='product-data'>Color:</p>


                            </div>

                            
                        </div>
                    </div>
                    
                    </div>

            </div>
        </div>
        <div className="description-wrapper py-5 home-wrapper-2">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                    <h4>Description</h4>

                        <div className="bg-white p-3">
                        <p className="bg-white p-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat nisi, cupiditate animi blanditiis repellendus adipisci quasi molestias tenetur corrupti vero eveniet ipsam debitis soluta minus nihil reiciendis consequatur, facere asperiores.</p>
                        
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
        <section className="review-wrapper home-wrapper-2">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <div className="review-inner-wrapper">

                        <div className="review-head d-flex justify-content-between align-items-end">
                            <div >
                                <h4 className='mb-2'>Customer reviews</h4>
                                <div className='d-flex align-items-center gap-10'>
                                <ReactStars
                    count={5}
                    size={16}
                    edit={false}
                    value={3}
                    activeColor="#ffd700"
                 />
                 <p className='mb-0 t-review'>Based on 2 Reviews</p>
                                </div>
                                
                            </div>
                            {orderedProduct && (
                                <div>

                                <a className='text-dark text-decoration-underline' href="">Write a review</a>
                            </div>

                            )}
                            

                        </div>
                        <div className="review-form">
            <form action="" className='d-flex flex-column gap-15'>
                <div className='review-form py-4'>
                    <h4 id='review'>Write a review</h4>
                <ReactStars
                    count={5}
                    size={16}
                    edit={true}
                    value={3}
                    activeColor="#ffd700"
                 />
                </div>
               
             
             
             
             
             
              <div className=''>
                <textarea className='w-100 form-contact' type="text-area" placeholder='comment' cols='10'
                rows='10'/>
              </div>
              <div className='d-flex justify-content-end'>
                <button className='button border-0'>Submit review</button>
              </div>
              

            </form>
           
            <div className="reviews mt-4">
                    <div className="review">
                    <div className="d-flex gap-10 align-items-center">
                <h6 className='mb-0'>Prakash</h6>
                <ReactStars
                    count={5}
                    size={16}
                    edit={true}
                    value={3}
                    activeColor="#ffd700"
                 />

            </div>
                   
                 <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur ipsam velit corporis quam totam obcaecati animi sint expedita saepe odio eos earum dolorum eius perferendis vel fugiat dolor, ipsa a.</p>

                    </div>
                    </div>
                        </div>
                        </div>
                       

                    </div>
                </div>
            </div>
        </section>
        <section className="popular-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Popular Products</h3>
            </div>
         <ProductCard/>   
        
        
          </div>
        </div>
      </section>
    </div>
      
    </>
  )
}

export default SingleProduct

import React from 'react'
import { Link } from 'react-router-dom'
import Marquee from "react-fast-marquee";
import BlogCart from '../components/BlogCart';
import ProductCard from '../components/ProductCard';
import SpecialProduct from '../components/SpecialProduct';



const Home = () => {
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              
              
              <div className="main-banner  position-relative">
                <img className='img-fluid rounded-3' 
                src="images/main-banner-1.jpg" 
                alt="main-banner" />
                <div className="main-banner-content position-absolute">
                  <h4>SUPERCHARGED FOR PRO</h4>
                  <h3>iPad S13+ Pro </h3>
                  <p>From $999 or $44.99/month</p>
                  <Link className='button'>BY NOW</Link>
                </div>

              </div>

            </div>
            <div className="col-6 ">
            <div className="d-flex flex-wrap justify-content-between allign-items-center gap-10">
              <div className="small-banner position-relative">
                <img className='img-fluid rounded-3' 
                src="images/catbanner-04.jpg" 
                alt="main-banner" />
                <div className="small-banner-content position-absolute">
                  <h4>FREE ENGRAVING</h4>
                  <h3>AirPods Max </h3>
                  <p>High-fidelity playback & <br /> ultra low distortion</p>
                </div>

                
              </div>
              <div className="small-banner  position-relative">
                <img className='img-fluid rounded-3' 
                src="images/catbanner-01.jpg" 
                alt="main-banner" />
                <div className="small-banner-content position-absolute">
                  <h4>BEST SALE</h4>
                  <h3>Laptops Max </h3>
                  <p>From $1699 or <br /> $64.99/month</p>
                </div>

              </div>
              <div className="small-banner  position-relative">
                <img className='img-fluid rounded-3' 
                src="images/catbanner-02.jpg" 
                alt="main-banner" />
                <div className="small-banner-content position-absolute">
                  <h4>NEW ARRIVAL</h4>
                  <h3>Smart Watch 7 </h3>
                  <p>Shop the latest band <br /> styes and colors</p>
                </div>
              </div>
              <div className="small-banner  position-relative">
                <img className='img-fluid rounded-3' 
                src="images/catbanner-03.jpg" 
                alt="main-banner" />
                <div className="small-banner-content position-absolute">
                  <h4>15% OFF</h4>
                  <h3>Buy Ipad Air </h3>
                  <p>From $599 or <br /> $41.99/month</p>
                </div>
              </div>
            </div>
            </div>
             
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between">
                <div className='d-flex align-items-center gap-15'>
                  <img src="images/service.png" alt="" />
                  <div>
                  <h6>Free Shipping</h6>
                  
                  <p className='mb-0'>From all orders over $5</p>

                  </div>
                  
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src="images/service-02.png" alt="" />
                  <div>
                  <h6>Daily Surprise Offers</h6>
                  <p className='mb-0'>Save Upto 25% Off</p>

                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src="images/service-03.png" alt="" />
                  <div>

                  <h6>Support 24/7</h6>
                  <p className='mb-0'>shop with an expert</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src="images/service-04.png" alt="" />
                  <div>
                  <h6>Affordable Prices</h6>
                  <p className='mb-0'>Get Factory Default Price</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src="images/service-05.png" alt="" />
                  <div>

                  <h6>Secure Payments</h6>
                  <p className='mb-0'>100% Protected Payment</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex justify-content-between align-items-center flex-wrap">
                <div className='d-flex  align-items-center'>
                  <div className='mx-3'>
                    <h6>Cameras</h6>
                    <p> 10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera" />
                </div>
                <div className='d-flex align-items-center'>
                  <div className='mx-3'>
                    <h6>Smart TV</h6>
                    <p> 22 Items</p>
                  </div>
                  <img src="images/tv.jpg" alt="camera" />
                </div>
                <div className='d-flex  align-items-center'>
                  <div className='mx-3'>
                    <h6>Smart Watches</h6>
                    <p> 10 Items</p>
                  </div>
                  <img src="images/headphone.jpg" alt="camera" />
                </div>
                <div className='d-flex  align-items-center'>
                  <div className='mx-3'>
                    <h6>Music & Gaming</h6>
                    <p> 10 Items</p>
                  </div>
                  <img src="images/headphone.jpg" alt="camera" />
                </div>
               
                <div className='d-flex align-items-center'>
                  <div className='mx-3'>
                    <h6>Cameras</h6>
                    <p> 10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera" />
                </div>
                <div className='d-flex  align-items-center'>
                  <div className='mx-3'>
                    <h6>Smart TV</h6>
                    <p> 22 Items</p>
                  </div>
                  <img src="images/tv.jpg" alt="camera" />
                </div>
                <div className='d-flex  align-items-center'>
                  <div className='mx-3'>
                    <h6>Smart Watches</h6>
                    <p> 10 Items</p>
                  </div>
                  <img src="images/headphone.jpg" alt="camera" />
                </div>
                <div className='d-flex  align-items-center'>
                  <div className='mx-3'>
                    <h6>Music & Gaming</h6>
                    <p> 10 Items</p>
                  </div>
                  <img src="images/headphone.jpg" alt="camera" />
                </div>
               

              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="featured-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Featured Collections</h3>
            </div>
         <ProductCard/>   
         <ProductCard/>   
         <ProductCard/>   
         <ProductCard/>   
          </div>
        </div>
      </section>
      <section className="famous-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="famous-card position-relative   ">
                <img className='img-fluid' src="images/famous-01.jpeg" alt="famous image" />
                
                <div className="famous-content  position-absolute">
                <h5 className=' '>Big Screen</h5>
                <h6 className=' '>Smart Watch Series 7</h6>
                <p >From $299 or $29.99/mo. for 12 mo.</p>
                </div>

              </div>

            </div>
            <div className="col-3">
              <div className="famous-card position-relative  ">
                <img className='img-fluid' src="images/famous-02.jpeg" alt="famous image" />
                
                <div className="famous-content  position-absolute">
                <h5 className='text-dark'>Studio Display</h5>
                <h6 className='text-dark'>600 nits of Brightness</h6>
                <p className='text-dark' >60 inch 5k retina display</p>
                </div>

              </div>

            </div>
            <div className="col-3">
              <div className="famous-card position-relative  ">
                <img className='img-fluid' src="images/famous-03.jpg" alt="famous image" />
                
                <div className="famous-content  position-absolute">
                <h5 className='  text-dark'>SmartPhones</h5>
                <h6 className=' text-dark'>Iphone 15 Pro-Max</h6>
                <p className='text-dark'>From $299 or $29.99/mo. for 12 mo.</p>
                </div>

              </div>

            </div>
            <div className="col-3">
              <div className="famous-card position-relative  ">
                <img className='img-fluid' src="images/famous-04.jpeg" alt="famous image" />
                
                <div className="famous-content  position-absolute">
                <h5 className='text-dark'>Home Speakers</h5>
                <h6 className='text-dark'>Room Feeling Sound </h6>
                <p className='text-dark' >From $499 or $39/mo.</p>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>
      <section className="special-wrapper py-5 home-wrapper">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Special Products</h3>
            </div>
          </div>
          <div className="row">
            <SpecialProduct/>
            <SpecialProduct/>
            <SpecialProduct/>
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
         <ProductCard/>   
         <ProductCard/>   
         <ProductCard/>   
          </div>
        </div>
      </section>
      <section className="marque-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
             <div className='marque-inner-wrapper bg-white p3 card-wrapper'>
             <Marquee>
              <div className='mx-4 w-25'> 
                <im className='mx-4 w-25'g src="images/brand-01.png" alt="" />
              </div>
              <div className='mx-4 w-25'>
              <img src="images/brand-02.png" alt="" />
              </div>
              <div className='mx-4 w-25'>
              <img src="images/brand-03.png" alt="" />
              </div>
              <div className='mx-4 w-25'>
              <img src="images/brand-04.png" alt="" />
              </div>
              <div className='mx-4 w-25'>
              <img src="images/brand-05.png" alt="" />
              </div>
              <div className='mx-4 w-25'>
              <img src="images/brand-06.png" alt="" />
              </div>
              <div className='mx-4 w-25'>
              <img src="images/brand-07.png" alt="" />
              </div>


              </Marquee>
              </div> 
              

            </div>
          </div>
        </div>

      </section>
     
      <section className="blog-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Latest News</h3>
            </div>
         <BlogCart/>   
         <BlogCart/>   
         <BlogCart/>   
         <BlogCart/>   
          </div>
        </div>
      </section>

    </>
  )
}

export default Home

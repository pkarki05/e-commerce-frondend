import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';
import watch from '../images/watch.jpg'
import watch02 from '../images/watch-02.jpg'
import waishList from '../images/wish.svg'
import productCompare from '../images/prodcompare.svg'
import view from '../images/view.svg'
import addCart from '../images/add-cart.svg'


const ProductCard = (props) => {
    const {grid}=props
    let location=useLocation()
  return (
    <>
    <div className={`${location.pathname=='/store'?`gr-${grid}`:'col-3'}`}>
        <div className="product-card position-relative">
            <div className="wishlist-icon position-absolute">
                <Link>
                <img src={waishList} alt="" />
                </Link>
            </div>
            <div className="product-image">
                <img src={watch}  className='img-fluid' alt="prouduct image" />
                <img src={watch02} className='img-fluid' alt="prouduct image" />
            </div>
            <div className="product-details">
                <h6 className="brand">Havels</h6>
                <h5 className='product-title'>
                    Kids headPhones bulk 10 pack multi colored for students
                </h5>
                <ReactStars
                    count={5}
                    size={16}
                    edit={false}
                    value={3}
                    activeColor="#ffd700"
                />
                <p className={`description ${grid===12 ? 'd-grid':'d-none'}`}>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Culpa odit unde aperiam quibusdam nesciunt similique, sapiente quas, 
                  tempora odio amet ducimus, asperiores laboriosam. Facilis,
                   quidem debitis itaque quos obcaecati nulla.</p>

                
                <p className="price">$99.00</p>
            </div>
            <div className="action-bar position-absolute">
                <div className="d-flex flex-column">
                    <Link>
                    <img src={productCompare} alt="" />
                    </Link>
                    <Link>
                    <img src={view} alt="" />
                    </Link>
                    <Link>
                    <img src={addCart} alt="" />
                    </Link>
                </div>

            </div>
        </div>
      
    </div>
    <div className={`${location.pathname=='/store'?`gr-${grid}`:'col-3'}`}>
       
       
        <Link to='product/:id' className="product-card position-relative">
            <div className="wishlist-icon position-absolute">
                <Link>
                <img src={waishList} alt="" />
                </Link>
            </div>
            <div className="product-image">
                <img src={watch}  className='img-fluid' alt="prouduct image" />
                <img src={watch02} className='img-fluid' alt="prouduct image" />
            </div>
            <div className="product-details">
                <h6 className="brand">Havels</h6>
                <h5 className='product-title'>
                    Kids headPhones bulk 10 pack multi colored for students
                </h5>
                <ReactStars
                    count={5}
                    size={16}
                    edit={false}
                    value={3}
                    activeColor="#ffd700"
                 />
                  <p className={`description ${grid===12 ? 'd-grid':'d-none'}`}>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Culpa odit unde aperiam quibusdam nesciunt similique, sapiente quas, 
                  tempora odio amet ducimus, asperiores laboriosam. Facilis,
                   quidem debitis itaque quos obcaecati nulla.</p>

                
                   <p className="price">$99.00</p>
            </div>
            <div className="action-bar position-absolute">
                <div className="d-flex flex-column">
                    <Link>
                    <img src={productCompare} alt="" />
                    </Link>
                    <Link>
                    <img src={view} alt="" />
                    </Link>
                    <Link>
                    <img src={addCart} alt="" />
                    </Link>
                </div>

            </div>
        </Link>
      
    </div>
    </>
    
  )
}

export default ProductCard

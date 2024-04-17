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
    const { grid, brand, productTitle, price, description, productImg1, productImg2, id } = props;

    let location=useLocation()
  return (
    <>
    <div className={`${location.pathname=='/store'?`gr-${grid}`:'col-3 mb-3'}`}>
        <div className="product-card position-relative">
            <div className="wishlist-icon position-absolute">
                <Link>
                <img src={waishList} alt="" />
                </Link>
            </div>
            <div className="product-image">
                <img src={productImg1}  className='img-fluid' alt="prouduct image" />
                <img src={productImg2} className='img-fluid' alt="prouduct image" />
            </div>
            <div className="product-details">
                <h6 className="brand">{brand}</h6>
                <h5 className='product-title'>
                    {productTitle}
                </h5>
                
                <div>
                <ReactStars
                    count={5}
                    size={16}
                    edit={true}
                    value={3}
                    activeColor="#ffd700"
                />

                </div>
                
                <p className={`description ${grid===12 ? 'd-grid':'d-none'}`}>{description}</p>

                
                <p className="price">${price}</p>
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
  
    </>
    
  )
}

export default ProductCard

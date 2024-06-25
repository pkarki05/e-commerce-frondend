import React, { useEffect, useState } from 'react'
import ReactStars from "react-rating-stars-component";
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import watch from '../images/watch.jpg'
import watch02 from '../images/watch-02.jpg'
import waishList from '../images/wish.svg'
import productCompare from '../images/prodcompare.svg'
import view from '../images/view.svg'
import addCart from '../images/add-cart.svg'
import { ProductInfo } from '../redux/Product/ProductAction';
import './productcart.css'
import { CiHeart } from "react-icons/ci";
import { FcLike } from "react-icons/fc";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/Cart/CartSlice';


const ProductCard = (props) => {
    const { grid, brand, productTitle, price, description, productImg1, productImg2, slug } = props;
    const location=useLocation()
    const cartItems=useSelector(state=>state.cart.cartItems)
    const [form, setForm] = useState({});
    const [isLiked, setIsLiked] = useState(false);
    const { productList } = useSelector(state => state.product);
    const {reviews}=useSelector(state=>state.review)
    const calculateAverageRating = (reviews) => {
        if (reviews.length === 0) return 0;
        const totalRating = reviews.reduce((acc, review) => acc + review.rating, 0);
        return totalRating / reviews.length;
    };

    const averageRating = calculateAverageRating(reviews[slug] || []);

    

    const dispatch=useDispatch()
   

    useEffect(() => {
        const productInfo = productList.find((product) => product.slug === slug);
        setForm(productInfo);
    }, [slug, productList]);

    const handleWishlistClick = () => {
        setIsLiked(!isLiked);
    };
    const handleClick=(product)=>{
        dispatch(addToCart({...product}));


    }
    
    
   
  return (
    <>
    <div className={`${location.pathname=='/store'?`gr-${grid}`:'col-3 mb-3 '}`}  >
        <Link to={`product/${slug}`} className='link'>

        <div className="product-card position-relative">
            <div className="wishlist-icon position-absolute"onClick={handleWishlistClick} >
                <Link>
                <div className='love-icon'>
                {isLiked ? <FcLike className='heart-fill' /> : <CiHeart className='heart-unfill' />}


                </div>

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
                    value={averageRating}
                    activeColor="#ffd700"
                />

                </div>
                
                <p className={`description ${grid===12 ? 'd-grid':'d-none'}`}>{description}</p>

                
                <p className="price text-dark">${price}</p>
            </div>
            <div className="action-bar position-absolute"  >
                <div className="d-flex flex-column">
                    
                    <Link className='border-0 bg-white' onClick={()=>handleClick(form)}>
                    <img src={addCart} alt="" width='22px' />
                    </Link>
                </div>

            </div>
        </div>
        </Link>
    </div>
  
    </>
    
  )
}

export default ProductCard

import React, { useEffect, useLayoutEffect, useState } from 'react';
import MetaHelmentComp from '../components/MetaHelmentComp';
import BreadCrum from '../components/BreadCrum';
import ProductCard from '../components/ProductCard';
import { Link, useNavigate, useParams } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
import { useDispatch, useSelector } from 'react-redux';
import { ProductInfo, fetchProductAction,updateProduct } from '../redux/Product/ProductAction';
import { addToCart } from '../redux/Cart/CartSlice';
import CustomCarousal from '../components/CustomCarousal';
import { getUserReview, submitReview } from '../redux/reviews/reviewAction';
import { toast } from 'react-toastify';

const SingleProduct = () => {
    const [orderedProduct, setOrderedProduct] = useState(true);
    const { slug } = useParams();
    const dispatch = useDispatch();
    const [form, setForm] = useState({});
    const [popularProduct, setPopularProduct] = useState([]);
    const navigate = useNavigate();
    const [quantity, setQuantity] = useState(1); // Default quantity is 1
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [newReview, setNewReview] = useState({ rating: 0, comment: '' });

    const { productList } = useSelector(state => state.product);
    const user = useSelector(state => state.user.user);
    const {reviews}=useSelector(state=>state.review)
    console.log("reviews",reviews)

    useEffect(()=>{
        dispatch(getUserReview(slug))
    },[dispatch,slug])

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const productInfo = productList.find((product) => product.slug === slug);
        setForm(productInfo);
    }, [slug, productList]);

    useEffect(() => {
        const fetchPopularProducts = async () => {
            try {
                const products = await ProductInfo();
                const filteredProducts = products.filter(
                    (product) => product.price <= 1000
                );
                setPopularProduct(filteredProducts);
            } catch (error) {
                console.error('Error fetching popular products: ', error);
            }
        };

        fetchPopularProducts();
    }, []);

    useEffect(() => {
        if (user && Object.keys(user).length > 0) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }, [user]);

    const handleAddToCart = (product) => {
        dispatch(addToCart({ ...product }));
        navigate('/cart');
    };

    const handleRatingChange = (newRating) => {
        setNewReview(prevState => ({ ...prevState, rating: newRating }));
    };

    const handleCommentChange = (event) => {
        const { name, value } = event.target;
        setNewReview(prevState => ({ ...prevState, [name]: value }));
    };

    const handleReviewSubmit = async (event) => {
        event.preventDefault();
    
        if (newReview.rating === 0 || newReview.comment.trim() === '') {
            alert('Please provide rating and comment.');
            return;
        }
    
        if (user && Object.keys(user).length > 0)  {
            const review = {
                ...newReview,
                userId: user.uid, // Assuming your user object has a userId field
                firstName: user.fname || 'Anonymous'
            };
    
            try {
                // Dispatch action to submit review
                await dispatch(submitReview(slug, review, form?.title, user.fname));
    
                // Reset review form
                setNewReview({ rating: 0, comment: '' });
            } catch (error) {
                console.error('Failed to submit review:', error);
                toast.error('Failed to submit review. Please try again.');
            }
        } else {
            alert('Please log in to submit a review.');
        }
    };
    const calculateAverageRating = (reviews) => {
        if (reviews.length === 0) return 0;
        const totalRating = reviews.reduce((acc, review) => acc + review.rating, 0);
        return totalRating / reviews.length;
    };

    const averageRating = calculateAverageRating(reviews[slug] || []);
    const numberOfReviews = reviews[slug]?.length || 0;

    
    return (
        <>
            <MetaHelmentComp title={form?.title || 'Product Name'} />
            <BreadCrum title={form?.title || 'Product Name'} />
            <div className="main-product-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-6">
                            <div className="main-product-image">
                            </div>
                            <CustomCarousal images={form.imageUrls}/>
                            
                        </div>
                        <div className="col-6">
                            <div className="main-product-details">
                                <div className="border-bottom">
                                    <h3>{form?.title}</h3>
                                </div>
                                <div className="border-bottom py-3">
                                    <p className="price">${form?.price}</p>

                                </div>
                                <div className="border-bottom">
                                    <div className="d-flex gap-10 align-items-center my-2">
                                        <h3 className="product-heading">Brand: </h3>
                                        <p className="product-data">{form?.brand || 'Unknown'}</p>
                                    </div>
                                    <div className="d-flex gap-10 align-items-center my-2">
                                        <h3 className="product-heading">Category: </h3>
                                        <p className="product-data">{form?.category}</p>
                                    </div>
                                    <div className="d-flex gap-10 align-items-center my-2">
                                        <h3 className="product-heading">Tags: </h3>
                                        <p className="product-data">{form?.tags?.join(', ') || 'None'}</p>
                                    </div>
                                    <div className="d-flex gap-10 align-items-center my-2">
                                        <h3 className="product-heading">Availability: </h3>
                                        <p className="product-data">{form?.stock > 0 ? 'In stock' : 'Out of stock'}</p>
                                    </div>
                                    <div className="d-flex gap-10 my-2 flex-column">
                                        <h3 className="product-heading">Size: </h3>
                                        <div className="d-flex flex-wrap gap-15">
                                            {form?.sizes?.map((size, index) => (
                                                <span key={index} className="badge border border-1 bg-white text-dark border-secondary">{size}</span>
                                            )) || <span className="badge border border-1 bg-white text-dark border-secondary">N/A</span>}
                                        </div>
                                    </div>
                                    <div className="d-flex gap-10 mt-2 mb-3 flex-column">
                                        <h3 className="product-heading">Color</h3>
                                        <div className="d-flex flex-wrap gap-15">
                                            {form?.colors?.map((color, index) => (
                                                <span key={index} className="badge" style={{ backgroundColor: color, width: '20px', height: '20px' }}></span>
                                            )) || <span className="badge border border-1 bg-white text-dark border-secondary">N/A</span>}
                                        </div>
                                    </div>
                                    <div className="d-flex flex-row align-items-center gap-10 mt-2 mb-3">
                                        <div className="d-flex align-items-center gap-30">
                                            <button className="button border-0" onClick={() => handleAddToCart(form)}>ADD TO CART</button>
                                            <Link className="button signup" to="/signup">Buy It Now</Link>
                                        </div>
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
                                    <p>{form?.description}</p>
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
                                        <div>
                                            <h4 className="mb-2">Customer reviews</h4>
                                            <div className="d-flex align-items-center gap-10">
                                                <ReactStars
                                                    count={5}
                                                    size={16}
                                                    edit={false}
                                                    value={averageRating}
                                                    activeColor="#ffd700"
                                                />
                                                <p className="mb-0 t-review">Based on {numberOfReviews} Reviews</p>
                                            </div>
                                        </div>
                                        {orderedProduct && (
                                            <div>
                                                <a className="text-dark text-decoration-underline" href="#review">Write a review</a>
                                            </div>
                                        )}
                                    </div>
                                    <div className="review-form">
                                        <form className="d-flex flex-column gap-15" onSubmit={handleReviewSubmit}>
                                            <div className="review-form py-4">
                                                <h4 id="review">Write a review</h4>
                                                <ReactStars
                                                    count={5}
                                                    size={16}
                                                    edit={true}
                                                    value={newReview.rating}
                                                    activeColor="#ffd700"
                                                    onChange={handleRatingChange}
                                                />
                                            </div>
                                            <div>
                                                <textarea
                                                    className="w-100 form-contact p-3  rounded"
                                                    name="comment"
                                                    placeholder={isLoggedIn ? "Write a review" : "Please log in to write a review"}
                                                    cols="5" rows="8"
                                                    disabled={!isLoggedIn}
                                                    value={newReview.comment}
                                                    onChange={handleCommentChange}
                                                />
                                            </div>
                                            <div className="d-flex justify-content-end">
                                                <button className="button border-0" disabled={!isLoggedIn}>Submit review</button>
                                            </div>
                                        </form>
                                        {reviews[slug] && reviews[slug].length >0 &&(
                                            <div className="reviews mt-4">
                                            {reviews[slug].map((review, index) => (
                                                <div className="review" key={index}>
                                                    <div className="d-flex gap-10 align-items-center">
                                                        <h6 className="mb-0">{review.user}</h6>
                                                        <ReactStars
                                                            count={5}
                                                            size={16}
                                                            edit={false}
                                                            value={review.rating}
                                                            activeColor="#ffd700"
                                                        />
                                                    </div>
                                                    <p>{review.comment}</p>
                                                </div>
                                            ))}
                                        </div>

                                        )}
                                        
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
                            {popularProduct.map((product) => (
                                <ProductCard
                                    key={product.id}
                                    slug={product.id}
                                    productTitle={product.title}
                                    price={product.price}
                                    productImg1={product.thumbnail}
                                    productImg2={product.imageUrls[1]}
                                />
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default SingleProduct;

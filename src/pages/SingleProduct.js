import React, { useEffect, useLayoutEffect, useState } from 'react';
import MetaHelmentComp from '../components/MetaHelmentComp';
import BreadCrum from '../components/BreadCrum';
import ProductCard from '../components/ProductCard';
import { Link, useNavigate, useParams } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
import { useDispatch, useSelector } from 'react-redux';
import { ProductInfo, fetchProductAction } from '../redux/Product/ProductAction';
import { addToCart } from '../redux/Cart/CartSlice';

const SingleProduct = () => {
    const [orderedProduct, setOrderedProduct] = useState(true);
    const { slug } = useParams();
    const dispatch = useDispatch();
    const [form, setForm] = useState({});
    const [popularProduct, setPopularProduct] = useState([]);
    const navigate = useNavigate();
    const [quantity, setQuantity] = useState(1); // Default quantity is 1

    const { productList } = useSelector(state => state.product);
   
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

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

    const handleAddToCart = (product) => {
        dispatch(addToCart({...product}));
        navigate('/cart')
    };

    return (
        <>
            <MetaHelmentComp title={form?.title || 'Product Name'} />
            <BreadCrum title={form?.title || 'Product Name'} />
            <div className="main-product-wrapper py-5 home-wrapper-2"  >
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-6">
                            <div className="main-product-image">
                                <img src={form?.thumbnail} alt="thumbnail" className="img-fluid p-3" />
                            </div>
                            <div className="other-product-images d-flex flex-wrap gap-15">
                                <div className="row">
                                    {Array.isArray(form?.imageUrls) && form.imageUrls.slice(0, 4).map((imageUrl, index) => (
                                        <div className="col-6 border rounded" key={index}>
                                            <img src={imageUrl} alt={`image-${index}`} className="img-fluid p-4" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="main-product-details">
                                <div className="border-bottom">
                                    <h3>{form?.title}</h3>
                                </div>
                                <div className="border-bottom py-3">
                                    <p className="price">${form?.price}</p>
                                    <div className="d-flex align-items-center gap-10">
                                        <ReactStars
                                            count={5}
                                            size={16}
                                            edit={true}
                                            value={form?.rating || 3}
                                            activeColor="#ffd700"
                                        />
                                    </div>
                                    <a href="#review" className="review-btn">Write a review</a>
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
                                    <div className="d-flex gap-10 mt-2 mb-3 flex-column">
                                        <h3 className="product-heading">Shipping & Returns</h3>
                                        <p className="product-data">Details about shipping and returns...</p>
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
                                                    value={form?.rating || 3}
                                                    activeColor="#ffd700"
                                                />
                                                <p className="mb-0 t-review">Based on 2 Reviews</p>
                                            </div>
                                        </div>
                                        {orderedProduct && (
                                            <div>
                                                <a className="text-dark text-decoration-underline" href="#review">Write a review</a>
                                            </div>
                                        )}
                                    </div>
                                    <div className="review-form">
                                        <form className="d-flex flex-column gap-15">
                                            <div className="review-form py-4">
                                                <h4 id="review">Write a review</h4>
                                                <ReactStars
                                                    count={5}
                                                    size={16}
                                                    edit={true}
                                                    value={3}
                                                    activeColor="#ffd700"
                                                />
                                            </div>
                                            <div>
                                                <textarea className="w-100 form-contact" type="text-area" placeholder="comment" cols="10" rows="10" />
                                            </div>
                                            <div className="d-flex justify-content-end">
                                                <button className="button border-0">Submit review</button>
                                            </div>
                                        </form>
                                        <div className="reviews mt-4">
                                            <div className="review">
                                                <div className="d-flex gap-10 align-items-center">
                                                    <h6 className="mb-0">Prakash</h6>
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

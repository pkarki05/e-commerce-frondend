import React, { useEffect, useLayoutEffect, useState } from 'react'
import { Link, NavLink, useLocation, useNavigate, useParams } from 'react-router-dom'
import Marquee from "react-fast-marquee";
import BlogCart from '../components/BlogCart';
import ProductCard from '../components/ProductCard';
import SpecialProduct from '../components/SpecialProduct';
import mainBanner1 from '../images/main-banner-1.jpg'
import mainBanner from '../images/main-banner.jpg'
import catBanner04 from '../images/catbanner-04.jpg'
import catBanner01 from '../images/catbanner-01.jpg'
import catBanner02 from '../images/catbanner-02.jpg'
import catBanner03 from '../images/catbanner-03.jpg'
import service from '../images/service.png'
import service02 from '../images/service-02.png'
import service03 from '../images/service-03.png'
import service04 from '../images/service-04.png'
import service05 from '../images/service-05.png'
import camera from '../images/camera.jpg'
import tv from '../images/tv.jpg'
import headPhone from '../images/headphone.jpg'
import famous01 from '../images/famous-01.jpeg'
import famous02 from '../images/famous-02.jpeg'
import famous03 from '../images/famous-03.jpg'
import famous04 from '../images/famous-04.jpeg'
import brand01 from '../images/brand-01.png'
import brand02 from '../images/brand-02.png'
import brand03 from '../images/brand-03.png'
import brand04 from '../images/brand-04.png'
import brand05 from '../images/brand-05.png'
import brand06 from '../images/brand-06.png'
import brand07 from '../images/brand-07.png'
import { ProductInfo, SpecialProductInfo, fetchProductAction } from '../redux/Product/ProductAction';
import { CategoryInfo } from '../redux/Product/ProductAction';
import CategoryCard from '../components/CategoryCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategoryAction } from '../redux/Category/CategoryAction';
import { Button } from 'react-bootstrap';
import { addToCart } from '../redux/Cart/CartSlice';




const Home = (props) => {
  const [data, setData] = useState([]);
  const [category, setCategory]=useState([])
  const [specialProduct, setSpecialProducts]=useState([])
  const [popularProduct, setPopularProduct]=useState([])
  const [productsWithDuration, setProductsWithDuration] = useState([]); 
  const dispatch=useDispatch()
  const{slug}=useParams()
  const {productList}=useSelector(state=>state.product)
  const {categoryList}=useSelector(state=>state.category)
  

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
});

  useEffect(()=>{
    dispatch(fetchProductAction())
    dispatch(fetchCategoryAction())

  },[dispatch])
  

  useEffect(()=>{
    setData(productList)
    setCategory(categoryList)
  },[productList,categoryList,dispatch])
  
  const handleClick=(slug)=>{
    <Link to={`product/${slug}`}>
    </Link>

  }
  const handleAddToCart = (product) => {
    dispatch(addToCart({...product}));
};
  

  
  

   useEffect(() => {
    if(productList.length){
      const special = productList.filter(
        (product) =>
          product.salesPrice && product.salesStartAt && product.salesEndAt
      );
      setSpecialProducts(special);

      //filter popular product
      
        // Filter products that have salesPrice, salesStartAt, and salesEndAt
        const popular = productList.filter(
          (product) =>
            product.price <=1000
        );
        setPopularProduct(popular);

        //calculate duration for special products
        const productsWithDuration = special.map((product) => {
          const startDate = new Date(product.salesStartAt);
          const endDate = new Date(product.salesEndAt);
    
          // Calculate difference in milliseconds
          const durationMs = endDate.getTime() - startDate.getTime();
    
          // Convert milliseconds to days
          const durationDays = Math.floor(durationMs / (1000 * 60 * 60 * 24));
    
          // Return product object with duration
          return {
            ...product,
            durationDays: durationDays
          };
        });
    
        setProductsWithDuration(productsWithDuration);
    

    }
    
        
    

  }, [productList]);

  
  


  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
          <div className="col-6">
  <div className="position-relative">
    <div className='main-banner '>
    <img className='img-fluid rounded-3' 
    src={mainBanner} 
    alt="main-banner" />
    <div className="main-banner-content position-absolute">
      <h4>SUPERCHARGED FOR PRO</h4>
      <h3>iPad S13+ Pro</h3>
      <p>From $999 or $44.99/month</p>
    </div>
    </div> 
  </div>
  <div className=" position-relative">
    <div className='main-banner1'>
    <img className='img-fluid rounded-3' 
    src={mainBanner1} 
    alt="main-banner" />
    <div className="main-banner-content position-absolute">
      <h4>SUPERCHARGED FOR PRO</h4>
      <h3>iPad S13+ Pro</h3>
      <p>From $999 or $44.99/month</p>
    </div>

    </div>
   
  </div>
</div>


            <div className="col-6 ">
            <div className="d-flex flex-wrap justify-content-between allign-items-center gap-10">
              <div className="small-banner position-relative">
                <img className='img-fluid rounded-3' 
                src={catBanner04} 
                alt="main-banner" />
                <div className="small-banner-content position-absolute">
                  <h4>FREE ENGRAVING</h4>
                  <h3>AirPods Max </h3>
                  <p>High-fidelity playback & <br /> ultra low distortion</p>
                </div>

                
              </div>
              <div className="small-banner  position-relative">
                <img className='img-fluid rounded-3' 
                src={catBanner01} 
                alt="main-banner" />
                <div className="small-banner-content position-absolute">
                  <h4>BEST SALE</h4>
                  <h3>Laptops Max </h3>
                  <p>From $1699 or <br /> $64.99/month</p>
                </div>

              </div>
              <div className="small-banner  position-relative">
                <img className='img-fluid rounded-3' 
                src={catBanner02} 
                alt="main-banner" />
                <div className="small-banner-content position-absolute">
                  <h4>NEW ARRIVAL</h4>
                  <h3>Smart Watch 7 </h3>
                  <p>Shop the latest band <br /> styes and colors</p>
                </div>
              </div>
              <div className="small-banner  position-relative">
                <img className='img-fluid rounded-3' 
                src={catBanner03} 
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
                  <img src={service} alt="" />
                  <div>
                  <h6>Free Shipping</h6>
                  
                  <p className='mb-0'>From all orders over $5</p>

                  </div>
                  
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src={service02} alt="" />
                  <div>
                  <h6>Daily Surprise Offers</h6>
                  <p className='mb-0'>Save Upto 25% Off</p>

                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src={service03} alt="" />
                  <div>

                  <h6>Support 24/7</h6>
                  <p className='mb-0'>shop with an expert</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src={service04} alt="" />
                  <div>
                  <h6>Affordable Prices</h6>
                  <p className='mb-0'>Get Factory Default Price</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src={service05} alt="" />
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
               
                {category.map((category)=>(
                   <CategoryCard key={category.slug}
                    name={category.name} 
                    thumbnail={category.thumbnail}/>


                ))}

                
                
            
                
                
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="featured-wrapper py-5 home-wrapper-2 ">
        <div className="container-xxl ">
          <div className="row  ">
            <div className="col-12 ">
              <h3 className="section-heading">Featured Collections</h3>
            </div>

            {data.map((product) => (

              <ProductCard 
              slug={product.slug}
              key={product.id}
              productTitle={product.title}
              price={product.price}
              productImg1={product.thumbnail}
              productImg2={product.imageUrls[1]}
              onClick={()=>handleClick(product.slug)}/>


            ))}
          </div>
        </div>
      </section>
      <section className="famous-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="famous-card position-relative   ">
                <img className='img-fluid' src={famous01} alt="famous image" />
                
                <div className="famous-content  position-absolute">
                <h5 className=' '>Big Screen</h5>
                <h6 className=' '>Smart Watch Series 7</h6>
                <p >From $299 or $29.99/mo. for 12 mo.</p>
                </div>

              </div>

            </div>
            <div className="col-3">
              <div className="famous-card position-relative  ">
                <img className='img-fluid' src={famous02} alt="famous image" />
                
                <div className="famous-content  position-absolute">
                <h5 className='text-dark'>Studio Display</h5>
                <h6 className='text-dark'>600 nits of Brightness</h6>
                <p className='text-dark' >60 inch 5k retina display</p>
                </div>

              </div>

            </div>
            <div className="col-3">
              <div className="famous-card position-relative  ">
                <img className='img-fluid' src={famous03} alt="famous image" />
                
                <div className="famous-content  position-absolute">
                <h5 className='  text-dark'>SmartPhones</h5>
                <h6 className=' text-dark'>Iphone 15 Pro-Max</h6>
                <p className='text-dark'>From $299 or $29.99/mo. for 12 mo.</p>
                </div>

              </div>

            </div>
            <div className="col-3">
              <div className="famous-card position-relative  ">
                <img className='img-fluid' src={famous04} alt="famous image" />
                
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
            {productsWithDuration.map((product)=>(
              <SpecialProduct title={product.title}
              slug={product.slug}
              productImage={product.thumbnail}
              price={product.price}
              salesPrice={product.salesPrice}
              days={product.durationDays}
              quantity={product.quantity}
              progressValue={product.quantity}
              handleAddToCart={()=>handleAddToCart(product)}/>


            ))}
           
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
              key={product.slug}
              slug={product.slug}
                productTitle={product.title}
                price={product.price}
                productImg1={product.thumbnail}
                productImg2={product.imageUrls[1]}
              />
            ))}         
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
                <im className='mx-4 w-25'g src={brand01} alt="" />
              </div>
              <div className='mx-4 w-25'>
              <img src={brand02} alt="" />
              </div>
              <div className='mx-4 w-25'>
              <img src={brand03} alt="" />
              </div>
              <div className='mx-4 w-25'>
              <img src= {brand04} alt="" />
              </div>
              <div className='mx-4 w-25'>
              <img src={brand05} alt="" />
              </div>
              <div className='mx-4 w-25'>
              <img src={brand06} alt="" />
              </div>
              <div className='mx-4 w-25'>
              <img src={brand07} alt="" />
              </div>


              </Marquee>
              </div> 
              

            </div>
          </div>
        </div>

      </section>
     
      

    </>
  )
}

export default Home

import React, { useEffect, useLayoutEffect, useState } from 'react'
import BreadCrum from '../components/BreadCrum'
import MetaHelmentComp from '../components/MetaHelmentComp'
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { TbListDetails } from "react-icons/tb";
import ProductCard from '../components/ProductCard'
import { CategoryInfo, ProductInfo } from '../redux/Product/ProductAction';

const OurStore = ({title}) => {
    const [sortingOption, setSortingOption] = useState('price-ascending');
    const [grid, setGrid] = useState(12);
    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [activeCount, setActiveCount] = useState(0);
    const [inactiveCount, setInactiveCount] = useState(0);
    const [showActive, setShowActive] = useState(false);
    const [showInactive, setShowInactive] = useState(false);
    const [startPrice, setStartPrice] = useState();
    const [endPrice, setEndPrice] = useState();


    useLayoutEffect(() => {
      window.scrollTo(0, 0)
  });
  
    // Function to handle sorting option change
    const handleSortChange = (e) => {
      setSortingOption(e.target.value);
    };
      // Function to handle price range change
  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    if (name === 'startPrice') {
      setStartPrice(value);
    } else if (name === 'endPrice') {
      setEndPrice(value);
    }
  };

   
  
    // Function to filter products based on selected category
  const filterProductsByCategory = (category) => {
    if (!category) return products;
    return products.filter(product => product.ParentCategory === category);
  };

  
    useEffect(() => {
      // Call ProductInfo function when component mounts
      const fetchData = async () => {
        const productData = await ProductInfo('slug'); // Pass the uid or any other necessary parameter
        setProducts(productData || []); // Ensure data is initialized as an empty array if productData is null
        console.log(products);
        let active = 0;
      let inactive = 0;
      productData.forEach(product => {
        if (product.status === 'Active') {
          active++;
        } else {
          inactive++;
        }
      });
      setActiveCount(active);
      setInactiveCount(inactive);
    
      };
      fetchData();
    }, []);

    // Function to filter products based on price range
  const filterProductsByPriceRange = (products) => {
    if (!startPrice && !endPrice) {
      return products; // No range specified, return all products
    }
    // Convert price strings to numbers
    const start = parseFloat(startPrice);
    const end = parseFloat(endPrice);

    if (isNaN(start) || isNaN(end)) {
      return products; // Invalid price range, return all products
    }

    return products.filter(product => {
      const price = parseFloat(product.price);
      return price >= start && price <= end;
    });
  };

  
    
    // Function to sort products based on selected sorting option
    const sortProducts = (products) => {
      switch (sortingOption) {
        case 'price-ascending':
          return products.sort((a, b) => a.price - b.price);
        case 'price-descending':
          return products.sort((a, b) => b.price - a.price);
        case 'name-ascending':
          return products.sort((a, b) => a.title.localeCompare(b.title));
        case 'name-descending':
          return products.sort((a, b) => b.title.localeCompare(a.title));
        default:
          return products;
      }
    };
    // Function to filter products based on availability
  const filterProductsByAvailability = (products) => {
    if (showActive && showInactive) {
      return products; // Show all products
    } else if (showActive && !showInactive) {
      return products.filter(product => product.status === 'Active');
    } else if (!showActive && showInactive) {
      return products.filter(product => product.status !== 'Active');
    } else {
      return products; // Show no products
    }
  };
  
    const filteredProducts = filterProductsByCategory(selectedCategory);
    const filteredAndSortedProducts = filterProductsByPriceRange(filterProductsByAvailability(filteredProducts));


    
    
  return (
    <>
    <MetaHelmentComp title={'Our Store'}/>
    <BreadCrum title='Our Store'/>
    <div className="store-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
            <div className="row">
                <div className="col-3">
                    <div className='filter-card mb-3'>
                        <h3 className="filter-title">Shop By Categories</h3>
                        <ul className='ps-0'>
                            <li onClick={() => setSelectedCategory('smart-watch')} >Watch</li>
                            <li onClick={() => setSelectedCategory('tv')}>TV</li>
                            <li onClick={() => setSelectedCategory('camera')}>Camera</li>
                            <li onClick={() => setSelectedCategory('laptop')}>Laptop</li>
                            <li onClick={() => setSelectedCategory('computers')}>Computer</li>
                            <li onClick={() => setSelectedCategory('headphone')}>HeadPhone</li>
                            <li onClick={() => setSelectedCategory('smart-phone')}>Smartphone</li>
                            <li onClick={() => setSelectedCategory('speaker')}>Speaker</li>
                        </ul>
                    </div>
                    <div className='filter-card mb-3'>
                        <h3 className="filter-title">Filter By</h3>
                        <div>
                            <h5 className="sub-title">Availability</h5>
                            <div className="form-check">
                                <input className='form-check-input' type='checkbox' 
                                onChange={()=>setShowActive(!showActive)} checked={showActive} />
                                <label htmlFor="stock" className='form-check-label'>
                                    In Stock ({activeCount})
                                </label>
                            </div>
                            <div className="form-check">
                            <input className='form-check-input' type='checkbox' 
                            onChange={()=>setShowInactive(!showInactive)} checked={showInactive}/>
                                <label htmlFor="stock" className='form-check-label'>
                                    Out of Stock ({inactiveCount})
                                </label>
                            </div>
                        </div>
                        <h5 className="sub-title mt-2">Price</h5>
                        <div className="d-flex align-items-center gap-10">
                        <div class="form-floating ">
                        <input type="text" className="form-control " 
                        placeholder="From" onChange={handlePriceChange} 
                        value={startPrice} name='startPrice' />
                        <label htmlFor="floatingInput">From</label>
                        </div>
                        <div class="form-floating ">
                        <input type="text" className="form-control" 
                        placeholder="To" onChange={handlePriceChange}
                         value={endPrice} name='endPrice' />
                        <label htmlFor="floatingInput">To</label>
                        </div>
                        </div>
                        
                       
                        
                    </div>
                    <div className='filter-card mb-3'>
                        <h3 className="filter-title">Product Tags</h3>
                        <div>
                            <div className="product-tags d-flex flex-wrap align-items-cemter gap-10">
                                <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                    Headphone
                                </span>
                                <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                    Laptop
                                </span>
                                <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                    Speaker
                                </span>
                                <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                    TV
                                </span>
                                <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                    Smartphone
                                </span>

                            </div>
                        </div>
                    </div>
                    
                    
                    
                    
                </div>
                <div className="col-9">
                    <div className="filter-sort-grid">
                        <div className="d-flex justify-content-between align-items-center ">

                        <div className="d-flex align-items-center gap-10">
                            <p className="mb-0 d-block">Sort By</p>
                            <select name="form-control form-select" id="" onChange={handleSortChange}>
                                <option value="price-ascending"  >Price low to high</option>
                                <option value="price-descending">Price high to row</option>
                                <option value="name-ascending">Alphabetically A to Z</option>
                                <option value="name-descending">Alphabetically Z to A</option>
                            </select>

                        </div>
                        
                        <div className="d-flex  gap-10  align-items-center">
                            <p className=" mb-0 d-block total-products ">{products.length} Products</p>
                            <div className='d-flex align-items-center gap-10 grid'> 
                            <BsFillGrid3X3GapFill  onClick={()=>{setGrid(3)}} className='d-block img-fluid image'/>
                            <TbListDetails   onClick={()=>{setGrid(12)}} className='d-block img-fluid image'/>


                            </div>
                          
                               
                           
                               

                        </div>

                        </div>
                       
                    </div>

                    <div className="product-list mt-3">
                        <div className="d-flex gap-10 flex-wrap">
                        {filteredAndSortedProducts.map((product) => (
                        <ProductCard grid={grid}
                        key={product.id}
                        slug={product.id}
                        description={product.description}
                            productTitle={product.title}
                            price={product.price}
                            productImg1={product.thumbnail}
                            productImg2={product.imageUrls[1]}
                        />
                        ))}    

                        </div>
                        
                    </div>

                </div>
            </div>
        </div>
    </div> 
      
    </>
  )
}

export default OurStore

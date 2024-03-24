import React, { useState } from 'react'
import BreadCrum from '../components/BreadCrum'
import MetaHelmentComp from '../components/MetaHelmentComp'
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { TbListDetails } from "react-icons/tb";
import ProductCard from '../components/ProductCard'

const OurStore = ({title}) => {
    const [grid,setGrid]=useState(4)
    
    
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
                            <li>Watch</li>
                            <li>TV</li>
                            <li>Camera</li>
                            <li>Laptop</li>
                        </ul>
                    </div>
                    <div className='filter-card mb-3'>
                        <h3 className="filter-title">Filter By</h3>
                        <div>
                            <h5 className="sub-title">Availability</h5>
                            <div className="form-check">
                                <input className='form-check-input' type='checkbox' />
                                <label htmlFor="" className='form-check-label'>
                                    In Stock (4)
                                </label>
                            </div>
                            <div className="form-check">
                            <input className='form-check-input' type='checkbox' />
                                <label htmlFor="" className='form-check-label'>
                                    Out of Stock (0)
                                </label>
                            </div>
                        </div>
                        <h5 className="sub-title mt-2">Price</h5>
                        <div className="d-flex align-items-center gap-10">
                        <div class="form-floating ">
                        <input type="text" className="form-control " 
                        placeholder="From"/>
                        <label htmlFor="floatingInput">From</label>
                        </div>
                        <div class="form-floating ">
                        <input type="text" className="form-control" 
                        placeholder="To"/>
                        <label htmlFor="floatingInput">To</label>
                        </div>
                        </div>
                        <h5 className="sub-title mt-2">Colors</h5>
                        <div className=''>
                            <ui className='colors ps-0'>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                              
                            </ui>



                        </div>
                        <h5 className="sub-title mt-2">Size</h5>

                        <div className="form-check">
                            <input className='form-check-input' type='checkbox' />
                                <label htmlFor="color-1" className='form-check-label'>
                                    S(3)
                                </label>
                            </div>
                            <div className="form-check">
                            <input className='form-check-input' type='checkbox' />
                                <label htmlFor="color-2" className='form-check-label'>
                                    M(3)
                                </label>
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
                            <select name="form-control form-select" id="">
                                <option value="price-ascending">Price low to high</option>
                                <option value="price-descending">Price high to row</option>
                                <option value="price-ascending">Alphabetically A to Z</option>
                                <option value="price-descending">Alphabetically Z to A</option>
                            </select>

                        </div>
                        
                        <div className="d-flex  gap-10  align-items-center">
                            <p className=" mb-0 d-block total-products ">21 Products</p>
                            <div className='d-flex align-items-center gap-10 grid'> 
                            <BsFillGrid3X3GapFill  onClick={()=>{setGrid(3)}} className='d-block img-fluid image'/>
                            <TbListDetails   onClick={()=>{setGrid(12)}} className='d-block img-fluid image'/>


                            </div>
                          
                               
                           
                               

                        </div>

                        </div>
                       
                    </div>

                    <div className="product-list mt-3">
                        <div className="d-flex gap-10 flex-wrap">
                        <ProductCard grid={grid}/>


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

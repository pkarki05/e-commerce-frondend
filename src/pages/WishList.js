import React from 'react'
import MetaHelmentComp from '../components/MetaHelmentComp'
import BreadCrum from '../components/BreadCrum'

const WishList = () => {
  return (
    <>
     <MetaHelmentComp title={'WishList'}/>
    <BreadCrum title='WishList'/>
   
   
    <div className="wishlist-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
            <div className="row">
                <div className="col-3">
                    <div className="wishlist-card position-relative">
                        <img src="images/cross.svg" alt="cross" className='position-absolute cross img-fluid'/>
                        <div className="wishlist-card-image">
                            <img src="images/watch.jpg" className='img-fluid w-100' alt="watch" />


                        </div>
                        <div className="py-3 px-3">
                        <h5 className="title">
                            Honor T1 &.0 1 GB RAM 7 inch With Wi-Fi-3G Tablet
                        </h5>
                        <h6 className="price">$ 299</h6>

                        </div>
                        

                    </div>

                </div>
                <div className="col-3">
                    <div className="wishlist-card position-relative">
                        <img src="images/cross.svg" alt="cross" className='position-absolute cross img-fluid'/>
                        <div className="wishlist-card-image">
                            <img src="images/watch.jpg" className='img-fluid w-100' alt="watch" />


                        </div>
                        <div className="py-3 px-3">
                        <h5 className="title">
                            Honor T1 &.0 1 GB RAM 7 inch With Wi-Fi-3G Tablet
                        </h5>
                        <h6 className="price">$ 299</h6>

                        </div>
                        

                    </div>

                </div>
            </div>
        </div>
    </div>
    
      
    </>
  )
}

export default WishList

import React from 'react'
import MetaHelmentComp from '../components/MetaHelmentComp'
import BreadCrum from '../components/BreadCrum'

const ShippingPolicy = () => {
  return (
    <>
     <MetaHelmentComp title={'Shipping Policy'}/>
    <BreadCrum title='Shipping Policy'/>
    <section className="policy-wrapper py-5 home-wrapper-2">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <div className="policy">

            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default ShippingPolicy

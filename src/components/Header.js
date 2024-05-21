import React, { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import compareImage from '../images/compare.svg'
import useImage from '../images/user.svg'
import cart from '../images/cart.svg'
import menu from '../images/menu.svg'
import { useSelector } from 'react-redux';
import '../search.css'




const Header = () => {
  const [searchInput, setSearchInput] = useState('');
  const [filteredProducts, setFilteredProduct]=useState([])
  const products=useSelector(state=>state.product.productList)
  const cartItems=useSelector(state=>state.cart.cartItems)
  const navigate=useNavigate()

  const calculateTotal=()=>{
    return cartItems.reduce((total, item)=>total+(item.price*(item.cartQuantity || item.cartQuantity)),0)
}

const handleSeachChange=(e)=>{
  setSearchInput(e.target.value)
  if(e.target.value.length>0){
    const filtered=products.filter(product=>product.title.toLowerCase().includes(e.target.value.toLowerCase()))
    setFilteredProduct(filtered)
  }else{
    setFilteredProduct([])
  }
}
const handleSearchSelect=(product)=>{
  setSearchInput('')
  setFilteredProduct([])
  navigate(`/product/${product.slug}`)
}




  return (
    <>
<header className="header-top-strip">
  <div className="container-xxl">
    
  </div>
</header>
<header className="header-upper py-3">
  <div className="container-xxl">
    <div className="row align-items-center">
      <div className="col-2">
        <h2>
          <Link className='d-flex align-items-center gap-10 text-white'>Electro.</Link>
        </h2>
        </div>
        <div className="col-5 position-relative">
        <div className="input-group ">
  <input type="text" 
  className="search-input py-2 position-relative" 
  placeholder="Search product here..." 

  value={searchInput}
  onChange={handleSeachChange}/>
 
</div>
<div className='search-icon'>
<CiSearch />

</div>
{filteredProducts.length>0 && (
  <ul className='search-results'>
    {filteredProducts.map(product=>(
      <li key={product.slug} onClick={()=>handleSearchSelect(product)}>
        {product.title}

      </li>
    ))}
  </ul>
)}
        </div>
        <div className="col-5">
          <div className="header-uopeer-links d-flex align-item-center justify-content-end gap-30">


<div>
<Link className='d-flex align-items-center gap-10 text-white' to='/login'>
<img src={useImage} alt="user" />
<p className='mb-0'>
  Log in <br /> My Account
</p>
</Link>
</div>
<div>
<Link to='/cart' className="d-flex align-items-center gap-10 text-white">
<div className="d-flex flex-column gap-10">

<span className="badge bg-danger text-light rounded-circle qty-count position-absolute" >{cartItems.length}</span>
<img src={cart} alt="cart"  className='text-light position-relative'/>

<p className='mb-0 position-absolute cart-total'>${calculateTotal()} </p>
</div>
</Link>
</div>
          </div>
        </div>
        
    </div>
  </div>
</header>
<header className="header-bottom py-3">
<div className="container-xxl">
  <div className="row">
    <div className="col-12">
      <div className="menu-bottom d-flex align-items-center gap-30">
        <div>
        <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 align-items-center d-flex"
   type="button" id="dropdownMenuButton1" 
   data-bs-toggle="dropdown" 
   aria-expanded="false">
  <img src={menu}alt="" />
   <span className='me-3 d-inline-block'> Shop Categories</span> 
  </button>
  <ul className="dropdown-menu text-white" aria-labelledby="dropdownMenuButton1">
    <li>
      <Link className="dropdown-item text-white" to="#">Action</Link>
      </li>
    <li>
      <Link className="dropdown-item text-white" to="#">Another action</Link>
      </li>
    <li>
      <Link className="dropdown-item " to="#">Something else here</Link>
      </li>
  </ul>
</div>
        </div>
        <div className="menu-links">
          <div className='d-flex align-items-center gap-15'>
            <NavLink className='text-white' to=''>Home</NavLink>
            <NavLink className='text-white' to='/store'>Our Store</NavLink>
            <NavLink className='text-white' to='/contact'>Contacs</NavLink>
          </div>
        </div>

      </div>
    </div>

  </div>
</div>
</header>
  
    </>
  )
}

export default Header

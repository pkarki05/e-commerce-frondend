import React, { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import compareImage from '../images/compare.svg'
import useImage from '../images/user.svg'
import cart from '../images/cart.svg'
import menu from '../images/menu.svg'
import { useDispatch, useSelector } from 'react-redux';
import '../search.css'
import { fetchCategoryAction } from '../redux/Category/CategoryAction';
import '../search.css'
import { MdAddShoppingCart } from "react-icons/md";
import { userLogOut } from '../pages/auth/UserAction';



const Header = () => {
  const [searchInput, setSearchInput] = useState('');
  const [filteredProducts, setFilteredProduct]=useState([])
  const [category,setCategory]=useState([])
  const products=useSelector(state=>state.product.productList)
  const categories=useSelector(state=>state.category.categoryList)
  const cartItems=useSelector(state=>state.cart.cartItems)
  const user =useSelector(state=>state.user.user)
  const navigate=useNavigate()
  const dispatch=useDispatch()

useEffect(()=>{
  dispatch(fetchCategoryAction)
  console.log('categories',categories)
  

},[dispatch])

useEffect(()=>{
  setCategory(categories)
},[categories,dispatch])


 


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
          <Link className='d-flex align-items-center gap-10 text-white link ' to='/' >Electro.</Link>
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
        <div className='d-flex gap-3 align-items-center border-bottom ms-2'>
        <img src={product.thumbnail} alt="product image " width="40px" className='rounded-circle'/>
        <div className='d-flex align-items center ms-2'>{product.title} </div>
        
        </div>
        
        

      </li>
    ))}
  </ul>
)}
        </div>
<div className="col-5">
<div className="header-uopeer-links d-flex align-item-center justify-content-end ">
<div className='d-flex login-container'>
 <div className='d-flex flex-column'>
        {/* Other nav items */}
        
        {user && user.email ? (
          <div className='d-flex  row'>
            <div className="col">
            <img src={user.avatar} alt="" className='rounded-circle' width='30px'/>
            </div>
            <Link to='/profile' className='text-light font-small link '>{user.fname}</Link>

          </div>
        ) : (
          <div className='d-flex row'>
            <div className="col">
            <img src={useImage} alt="" width="30px"/>
            </div>
         <Link to="/login" className='text-light font-small '>Log in</Link>

          </div>

        )}
      </div>
</div>
<div>
<Link to='/cart' className="d-flex align-items-center gap-10 text-white cart-lin link">
<div className="d-flex flex-column gap-10 position-relative">
  {cartItems.length>0 && (
    <span className="badge bg-danger text-light rounded-circle qty-count position-absolute" >{cartItems.length}</span>
  )}

<MdAddShoppingCart className='text-white position-absolute shopping-cart' />



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
      <div className="menu-bottom d-flex align-items-center gap-5">
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
  {categories.map((cat)=>(
    
      <Link to={`/category/${cat.slug}`} className=" text-white d-flex category-items link" > <li className=' '>{cat.name}
      </li> </Link>


          ))}
    
  </ul>
</div>
        </div>
        <div className="menu-links ">
          <div className='d-flex align-items-center gap-4'>
            <NavLink className='nav-link text-white   ' to=''>Home</NavLink>
            <NavLink className='nav-link text-white' to='/store'>Our Store</NavLink>
            <NavLink className='nav-link text-white' to='/contact'>Contacs</NavLink>
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

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import OurStore from './pages/OurStore';
import WishList from './pages/WishList';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import SignUp from './pages/SignUp';
import TermsAndConditions from './pages/TermsAndConditions';
import RefundPolicy from './pages/RefundPolicy';
import ShippingPolicy from './pages/ShippingPolicy';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/'element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='store' element={<OurStore/>}/>
        <Route path='product/:id' element={<SingleProduct/>}/>
        <Route path='wishlist' element={<WishList/>}/>
        <Route path='cart' element={<Cart/>}/>
        <Route path='checkout' element={<Checkout/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='forgot-password' element={<ForgotPassword/>}/>
        <Route path='signup' element={<SignUp/>}/>
        <Route path='terms-and-conditions' element={<TermsAndConditions/>}/>
       <Route path='refund-policy' element={<RefundPolicy/>}/>
       <Route path='shipping-policy' element={<ShippingPolicy/>}/>


      </Route>

    </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;

import React, { useState } from 'react'
import './navbar.css'
import logo from '../assets/logo.png'
import cart from '../assets/shopping-cart.png'
import search from '../assets/search.png'
import { Link } from 'react-router-dom';

const NAVBAR = () => {
  const[menu,setMenu]=useState("shop");
  return (
    <div className='navbar'>
      <div className='nav-logo'onClick={() => setMenu("Home")}>
        <Link to="/home" className="nav-link">
       <img src={logo} alt="" /></Link>
       <p>.</p>
      </div>
      <ul className="nav-menu">
  <li onClick={() => setMenu("Home")}>
    <Link to="/home" className="nav-link">HOME</Link>
    {menu === "Home" }
  </li>
  <li onClick={() => setMenu("About")}>
    <Link to="/about" className="nav-link">ABOUT</Link>
    {menu === "About" }
  </li>
  <li onClick={() => setMenu("Products")}>
    <Link to="/products" className="nav-link">PRODUCTS</Link>
    {menu === "Products" }
  </li>
  <li onClick={() => setMenu("ContactUs")}>
    <Link to="/contactUs" className="nav-link">CONTACT US</Link>
    {menu === "ContactUs" }
  </li>
</ul>

      <div className='shop-button'onClick={() => setMenu("Products")}>
        <Link to="/products" className="nav-link">
        <button>
            <p>SHOP NOW</p>
        </button></Link>
      </div>

      
      <div className='search' >
       <img src={search} alt=''/>
      </div>
      <div className='cart' onClick={() => setMenu("Cart")}>
        <Link to="/cart" className="nav-link">
         <img src={cart} alt=''/></Link>{menu === "Cart" }
      </div>
    </div>
  )
}

export default NAVBAR

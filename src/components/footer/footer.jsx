import logo from '../assets/logo.png'
import icon1 from'../assets/faceook.png'
import { Link } from 'react-router-dom';
import React, { useState } from 'react'
import icon2 from '../assets/twitter.png'
import './footer.css';
import icon3 from '../assets/email.png'
import icon4 from '../assets/insta.png'

const Footer = () => {
    const [menu, setMenu] = useState("shop");
  return (
    <div>
      
             <div className='footer'>
              <div className='one'>
              <img src={logo} alt=""/>
              <h3>
                CONTACT US FOR ANY QUESTIONS
              </h3>
              <h6>
                We're here to help. Whether you're a restaurant, wholesaler, or international buyer, our team is ready to assist you with product details, pricing, and logistics. Reach out to us today — let’s grow your business with quality you can trust.
              </h6>
              <h4>+0000000000</h4>
              <h5>
               gmail@address
              </h5>
              <hr/>
              <p>©All rights reserved for freshlyfoodstrading.com</p>
              </div>
              <div className='two'>
              <h4>RELATED LINKS</h4>
              <div className='child1'>
                <div className='childn'>
                 <div  className='links' onClick={() => setMenu("Home")}>
                <Link to="/home" className="nav-link"><h6>HOME</h6></Link>
              </div>
              <div className='links' onClick={() => setMenu("About")}>
                <Link to="/about" className="nav-link"><h6>ABOUT</h6></Link>
              </div>
              <div className='links' onClick={() => setMenu("ContactUs")}>
                <Link to="/contactUs" className="nav-link"><h6>CONTACT US</h6></Link>
              </div>
            </div>
            <div className='childn'>
              <div className='links' onClick={() => setMenu("Products")}>
                <Link to="/products" className="nav-link"><h6>SHOP</h6></Link>
              </div>
              <div className='links' onClick={() => setMenu("ContactUs")}>
                <Link to="/contactUs" className="nav-link"><h6>BLOG</h6></Link>
              </div>
            </div>
          </div>
              <h3>FOLLOW US ON SOCIAL MEDIA</h3>
              <div className='icons'>
              <img src={icon1} alt=""/>
              <img src={icon2} alt=""/>
              <img src={icon3} alt=""/>
              <img src={icon4} alt=""/>
              </div>
              <hr/>
              </div>
              <div className='three'>
              <h3>SUBSCRIBE TO OUR NEWSLETTER</h3>
              <h6>Stay updated with our latest product arrivals, seasonal offers, and export insights. Join our mailing list and never miss a fresh opportunity!</h6>
            <div className='pch'>
            <input type="email"placeholder='EMAIL ADDRESS...' />
            <button>Submit</button>
            </div>
            <hr></hr>
             <p>PRIVACY POLICY | TERMS OF CONDITIONS</p>
             </div>
             </div>
    </div>
  )
}

export default Footer

import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import './hero2.css'
import bg from '../assets/fruitsbg.png'
import morethan from'../assets/12.png'
import arrows from'../assets/11.png'
import star from'../assets/star.png'
import bg2 from'../assets/fruitsbg2.jpg'
import c1 from'../assets/4.png'
import c2 from'../assets/5.png'
import c3 from'../assets/6.png'
import c4 from'../assets/7.png'
import bg3 from '../assets/2.jpg'
import bowl from '../assets/3.png'
import item1 from '../assets/8.png'
import item2 from '../assets/9.png'
import item3 from '../assets/10.png'
import bg4 from'../assets/bg4.jpg'
import logo from '../assets/logo.png'
import icon1 from'../assets/faceook.png'
import icon2 from '../assets/twitter.png'
import icon3 from '../assets/email.png'
import icon4 from '../assets/insta.png'


const Hero2 = ({ toggleHero }) => {

 const [menu, setMenu] = useState("shop");

  return (
    <div>
        <div className="arrows">
  <img onClick={toggleHero} src={arrows} alt="Arrow" />


<div className="arrows-text" >MEAT</div>

    </div>
      <div className='backgroundS'>
        <img src={bg} alt=""/>
      </div>
      <div className='heading'>
        <h1>Freshly Food<br /> Trading </h1>
      </div>


     <div className='BUY'  onClick={() => setMenu("Products")}>
        <Link to="/products" className="nav-link"><button >
            <span>BUY NOW </span>
            <img src={morethan} alt=""/>
        </button></Link>  
      </div>


      <div className='review-box'>
        <p>Freshly Food Trading delivers fresh, high-quality halal meat every time. Their reliable service makes them our trusted supplier. Highly recommended!</p>
        <div className='starsS'>
        <img src={star} alt=""/>
        <img src={star} alt=""/>
        <img src={star} alt=""/>
        <img src={star} alt=""/>
        <img src={star} alt=""/>
        </div>
      <h4>JOHN SMITH</h4>
      <h6>SEE ALL REVIEWS</h6>
      </div>
      <div className='background2'>
      <img src={bg2} alt=""/>
      <div className='para1'>
      <h2>WHY   CHOOSE    US</h2>
      <p>At Freshly Food Trading, we prioritize quality, reliability, and trust. Sourcing the finest halal-certified meat and fresh fruits from Pakistan and India, we ensure every product meets strict hygiene and export standards. With timely delivery, transparent processes, and a customer-first approach, we are committed to being your dependable partner in international trade.</p>
      </div>
      <div className='cards'>
        <div className='card-box'>
        <div className='card1' onClick={() => setMenu("Products")}><Link to="/products" className="nav-link">
        <h3>100% FRESH MEAT</h3>
        <img src={c1} alt=""/></Link>
        </div>
        <div className='card2' onClick={() => setMenu("Products")}><Link to="/products" className="nav-link">
<h3>QUALITY PRODUCTS</h3>
<img src={c2} alt=""/></Link>
        </div>
</div>
         <div className='card-box'>
        <div className='card3' onClick={() => setMenu("Products")}><Link to="/products" className="nav-link">
<h3>FAIR PRICING</h3>
<img src={c3} alt=""/></Link>
        </div>
        <div className='card4' onClick={() => setMenu("Products")}><Link to="/products" className="nav-link">
<h3>HOME DELIEVRY</h3>
<img src={c4} alt=""/></Link>
</div>
        </div>

      </div>
      </div>
       <div className='background3'>
        <img className='bg3' src={bg3} alt=""/>
        <img className='bowl' src={bowl} alt=""/>
        <h2>MEAT  MENU</h2>
        <div className='container'>
          <div className='p1'>
        <img src={item1} alt=""/>
        <p>Halal-certified, farm-raised mutton sourced from trusted suppliers in Pakistan. Our bone-in cuts are rich in flavor, ideal for traditional dishes like stews, biryani, and curries. Carefully processed to maintain freshness and nutritional value during export.</p>
         <h3>AED 28.00/kg</h3>
         <div className='more-info-button' onClick={() => setMenu("Products")}><Link to="/products" className="nav-link">
          <button>
            <h6>MORE INFO</h6>
          </button></Link>
         </div>
          </div>

           <div className='p1'>
            <div className='p2'>
        <img src={item2} alt=""/>
        <p>Top-grade, boneless beef selected from grass-fed cattle, offering tender texture and rich taste. Perfect for grilling, roasting, or high-end restaurant preparations. Vacuum-sealed for maximum shelf life and hygiene compliance.</p>
         <h3>AED 34.00/kg</h3>
         <div className='more-info-button' onClick={() => setMenu("Products")}><Link to="/products" className="nav-link">
          <button>
            <h6>MORE INFO</h6>
          </button></Link>
         </div>
         </div>
          </div>

           <div className='p1'>
        <img src={item3} alt=""/>
        <p>Fresh, halal-certified chicken cleaned and processed under strict hygienic conditions. Ideal for bulk orders, this product is ready for immediate use in restaurants, catering, or wholesale distribution. Sourced from high-quality poultry farms in India and Pakistan.</p>
         <h3>AED 14.50/kg</h3>
         <div className='more-info-button' onClick={() => setMenu("Products")}><Link to="/products" className="nav-link">
          <button>
            <h6>MORE INFO</h6>
          </button></Link>
         </div>
          </div>

        </div>
       </div>
       <div className='instagram'>
      <img className='bg4' src={bg4} alt=""/>
      <h2>Follow Us On Instagram</h2>

       </div>
    </div>
)
}


export default Hero2;

import React, { useState } from 'react';
import './cart.css';
import bgrr from '../assets/bg4.jpg';
import itemmeat from '../assets/item1.png';
import save from '../assets/save.png';
import first from '../assets/101 (1).png';
import second from '../assets/103.png';


const Cart = () => {
  const [showCheckoutPopup, setShowCheckoutPopup] = useState(false);
const [showSavePopup, setShowSavePopup] = useState(false);

const handleCheckoutClick = () => {
    setShowCheckoutPopup(true);
  };

  const handleSaveClick = () => {
    setShowSavePopup(true);
  };

  const dismissCheckoutPopup = () => {
    setShowCheckoutPopup(false);
  };

  const dismissSavePopup = () => {
    setShowSavePopup(false);
  };
  return (
    <div>
      <div className={`bgroud ${showCheckoutPopup || showSavePopup ? 'blurred' : ''}`}>
        <img src={bgrr} alt=""/>
        <div className='leftcart'>
        <h1>MY CART</h1>
        <p>Review your selected items below before proceeding to checkout.</p>
        <hr/>
        <div className='product'>
        <img className='meat' src={itemmeat} alt=''/>
        <div className='data-product'>
        <h2>AED 23.OO</h2>
        <p>Fresh Mutton (Bone-In)</p>
        <h6>Qty: 2 kg</h6>
        <button onClick={handleSaveClick} id='savee'>
            <img id="save" src={save} alt='' />
            <p id='savep'onClick={handleSaveClick}>SAVE FOR LATER</p>
        </button>
        <h5>SUBTOTAL:  AED 23.00</h5>
        </div>
        </div>
        </div>
        <div className='rightcart'>
            <h1>TOTAL</h1>
            <hr/>
            <div className='outer'>
             <div className='inner'>
            <h5>SUBTOTAL :</h5>
            <h5>DELIEVRY :</h5>
            </div>
              <div className='inner'>
                <h6>AED 46.00</h6>
                <h6 id='extra'>AED 5.00</h6>
                </div>
                </div>
                <div className='tbtn'>
            <button  id='chceckout-btn' onClick={handleCheckoutClick}>CHECK OUT</button>
            <h5>WE ACCEPT :</h5></div>
            <div className='money-type'>
            <img id='first' src={first} alt=''/>
            <img id='second' src={second} alt=''/>
            </div>
            <p>Got a discount code add it in the next step.</p>
        </div>

      </div>




    {showCheckoutPopup && (
 <div class="card"> 
  <button class="dismiss" onClick={dismissCheckoutPopup} type="button">×</button> 
  <div class="header"> 

<div class="div_image_v">
    <div class="image">
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20 7L9.00004 18L3.99994 13" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
      </div> 
  </div> 
      <div class="content">
         <span class="title">Order validated</span> 
         <p class="message">Thank you for your purchase. you package will be delivered within 24 hours of your purchase</p> 
         </div> 
       
            </div> 
            </div>
  )}





      
      {showSavePopup && (
        <div className="popup-card">
          <button className="dismiss" onClick={dismissSavePopup}>×</button>
          <div className="header">
            <div className="div_image_v">
              <div className="image">
                
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" stroke="#000" strokeWidth="1.5"/></svg>
              </div>
            </div>
            <div className="content">
              <span className="title">Saved to Favorites</span>
              <p className="message">You have successfully saved this item for later.</p>
            </div>
          </div>
        </div>
      )}





    </div>
  );
};

export default Cart

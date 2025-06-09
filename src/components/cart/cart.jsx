import React from 'react';
import './cart.css';
import bgrr from '../assets/bg4.jpg';
import itemmeat from '../assets/item1.png';
import save from '../assets/save.png';
import first from '../assets/101 (1).png';
import second from '../assets/103.png';
const cart = () => {
  return (
    <div>
      <div className='bgroud'>
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
        <button>
            <img id="save" src={save} alt='' />
            <p id='savep'>SAVE FOR LATER</p>
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
            <button id='chceckout-btn'>CHECK OUT</button>
            <h5>WE ACCEPT :</h5>
            <div className='money-type'>
            <img id='first' src={first} alt=''/>
            <img id='second' src={second} alt=''/>
            </div>
            <p>Got a discount code add it in the next step.</p>
        </div>

      </div>

    </div>
  )
}

export default cart

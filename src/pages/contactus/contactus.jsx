import React from 'react';
import bgro from '../../components/assets/bg4.jpg';
import './contactus.css';
const contactus = () => {
  return (
    <div>
      <div className='main'>
        <img src={bgro} alt=""/>
        <h1>CONTACT US</h1>
        <h5>Have questions, bulk inquiries, or want to place an order? We’re here to help! Reach out to us anytime — our team will respond promptly.</h5>
      <h2>Office Address</h2>
      <p>Freshly Food Trading Dubai, United Arab Emirates</p>
      <h2>Email</h2>
      <p>FRESHLYFRESHFOODTRADING</p>
      <h2>Office Address</h2>
      <p>Sunday – Friday: 9:00 AM – 6:00 PM <br/>Saturday: Closed</p>
      </div>
      <div className='dd'>
        <img src={bgro} alt=""/>
        <div className='ld'>
         <div className='ds'><input type='text' placeholder='Name' ></input></div>
          <div className='ds'><input type='email' placeholder='Email' ></input></div>
          <div className='ds'><input type='text' placeholder='Subject' ></input></div>
          <div className='rd'><input type='text' placeholder='Enter your Message!' ></input>
          </div>
        </div>
        <button>
          SUBMIT
        </button>
      </div>
    </div>
  )
}

export default contactus

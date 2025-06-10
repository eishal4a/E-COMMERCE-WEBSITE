import React, { useState } from 'react'
import bgro from '../../components/assets/bg4.jpg';
import './contactus.css';

const Contactus = () => {
  const [showSavePopup, setShowSavePopup] = useState(false);
   const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSaveClick = () => {
    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      console.log('Please fill all the areas');
      return;
    }
    setShowSavePopup(true);
  };

  const dismissSavePopup = () => {
    setShowSavePopup(false);
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };


  return (
    <div>
     <div className={`mainn1 ${ showSavePopup ? 'blurred' : ''}`}>
        <div className= 'mainn'>
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
         <div className='ds'><textarea type='text' placeholder='Name' value={name}
                onChange={(e) => setName(e.target.value)} ></textarea></div>
          <div className='ds'><textarea type='email' placeholder='Email' value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></textarea></div>
          <div className='ds'><textarea type='text' placeholder='Subject'   value={subject}
                onChange={(e) => setSubject(e.target.value)}></textarea></div>
          <div className='rd'><textarea   placeholder="Enter your Message!"   value={message}
                onChange={(e) => setMessage(e.target.value)}   className="message-box" ></textarea>
          </div>
        </div>
        <button onClick={handleSaveClick} >
          SUBMIT
        </button>
      </div>
</div>



      
      {showSavePopup && (
        <div className="popup-card2">
          <button className="dismiss" onClick={dismissSavePopup}>×</button>
          <div className="header">
            <div className="div_image_v">
              <div className="image">
                
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" stroke="#000" strokeWidth="1.5"/></svg>
              </div>
            </div>
            <div className="content">
              <span className="title">Sent</span>
              <p className="message">You have successfully sent a message.</p>
            </div>
          </div>
        </div>
      )}


    </div>
  )
}

export default Contactus

import React, { useState } from 'react';
import bg5 from '../../components/assets/bg4.jpg';
import './abouts.css';
import itema from '../../components/assets/item1.png';
import itemb from '../../components/assets/item2.png';
import itemc from '../../components/assets/car2.png';

const Abouts = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <div className='background'>
        <img className='bg5' src={bg5} alt="background" />
        <h1>ABOUT US</h1>
        <p>
          Freshly Food Trading is a UAE-based company dedicated to the import and export of premium meat and fresh fruits.
          We partner with carefully selected farms and suppliers in Pakistan, India, and South Africa to bring high-quality,
          halal-certified products to our clients. Whether it’s tender cuts of meat or hand-picked seasonal fruits, we
          ensure everything meets strict hygiene and export standards. With a strong presence in the Gulf region, we
          proudly serve restaurants, wholesalers, and distributors who value freshness, consistency, and professionalism.
          Our team is committed to building long-term relationships through reliable service, transparent processes,
          and a customer-first approach that reflects the heart of our brand.
        </p>
<div className='items'>
          <img className='itema' src={itema} alt="itema" />
          <img className='itemb' src={itemb} alt="itemb" />
          <img className='itemc' src={itemc} alt="itemc" />
        </div>

        {isVisible && (
        <>
          <div className='hidden-text'>
            <p>
              Freshly Food Trading is a UAE-based enterprise specializing in the import and export of premium-quality meat and fresh fruits.
              With a strong emphasis on halal compliance, hygiene, and traceability, we partner with reputable farms and suppliers in Pakistan,
              India, and South Africa — regions known for their rich agricultural and livestock heritage.
              <br /><br />
              Our product range includes tender cuts of halal meat and hand-picked seasonal fruits, carefully sourced to meet the highest standards of
              freshness and quality. Whether it's delivering to a local restaurant or fulfilling a bulk export order, we tailor our services to meet
              the unique needs of each client.
              <br /><br />
              With a growing footprint across the Gulf Cooperation Council (GCC) countries, Freshly Food Trading has earned the trust of wholesalers,
              food distributors, supermarkets, and hospitality businesses that demand both excellence and consistency.
              <br /><br />
              Our mission extends beyond trade. We focus on building long-term partnerships based on trust, transparency, and mutual growth. From
              procurement to logistics, our processes are streamlined and customer-focused, ensuring timely delivery, clear communication, and
              responsive service.
              <br /><br />
              Driven by professionalism, integrity, and a passion for food, we are proud to contribute to the region’s supply of reliable, high-quality
              agricultural products. Whether you're seeking a trusted partner for import/export or exploring sourcing solutions for your business,
              Freshly Food Trading is your bridge to global quality.
            </p>
          </div>
          
         <img className='bg6' src={bg5} alt="background" />
         </>
        )}
        <div
          className='read-btn'
          onClick={() => setIsVisible(!isVisible)}
          style={{ cursor: 'pointer' }}
        >
          <h4>{isVisible ? 'READ LESS' : 'READ MORE'}</h4>
        </div>
      </div>
    </div>
  );
};

export default Abouts;

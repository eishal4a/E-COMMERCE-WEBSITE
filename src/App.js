import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/navbar/navbar.jsx';
import Hero from './components/hero/hero.jsx';
import Hero2 from './components/hero2/hero2.jsx';
import About from './pages/abouts/abouts.jsx';
import Products from './pages/products/products.jsx';   
import ContactUs from './pages/contactus/contactus.jsx'; 
import Footer from './components/footer/footer.jsx';
import Cart from './components/cart/cart.jsx';

function App() {
  const [showHero, setShowHero] = useState(true);
  const location = useLocation();

  const toggleHero = () => {
    setShowHero(!showHero);
  };

  return (
    <div>
      <Navbar />
      
      {location.pathname === '/' && <Hero />}

      {location.pathname === '/home' && (
        showHero 
          ? <Hero toggleHero={toggleHero} /> 
          : <Hero2 toggleHero={toggleHero} />
      )}

      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import Navbar from './components/navbar/navbar.jsx';
import Hero from './components/hero/hero.jsx';
import Hero2 from './components/hero2/hero2.jsx';
import { Routes, Route } from 'react-router-dom';
import About from './pages/abouts/abouts.jsx';
import Products from './pages/products/products.jsx';   
import ContactUs from './pages/contactus/contactus.jsx'; 
import Footer from './components/footer/footer.jsx';
import Cart from './components/cart/cart.jsx';
function App() {
  const [showHero, setShowHero] = useState(true);

  const toggleHero = () => {
    setShowHero(!showHero);
  };

  return (
    <div>
      
      <Navbar />
      
      <Routes>
        <Route path="/home" element={showHero ? <Hero toggleHero={toggleHero} /> : <Hero2 toggleHero={toggleHero} />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

import React, { useState, useRef , useEffect } from 'react';
import { Link } from 'react-router-dom';
import bgr from '../../components/assets/bg4.jpg';
import './products.css';
import item11 from '../../components/assets/8.png';
import itemaa from '../../components/assets/item1.png';
import mt from'../../components/assets/12.png';
import star from'../../components/assets/star.png';
import Lastbg from '../../components/assets/last.png';
import axios from "axios";


const Products = () => {
   const[menu,setMenu]=useState("shop");
const [products, setProducts] = useState([]);
 useEffect(() => {
    fetch('http://localhost:5000/api/products') 
      .then(res => res.json())
      .then(data => {
        console.log(data);        
        setProducts(data);        
      })
      .catch(error => console.error('Error fetching products:', error));
  }, []); 


const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
const meat = useRef(null);
const fv = useRef(null);

 const scrollToMeat = () => {
    meat.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToFV = () => {
    fv.current.scrollIntoView({ behavior: "smooth" });
  };

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <div>
      <div id='top' className='bgr'>
        <img src={bgr} alt=""/>
        <h2>OUR PRODUCTS</h2>
        <div className='firstbtn' onClick={() => setMenu("Cart")}><Link to="/cart" className="nav-link">
          <button onClick={() => setMenu("Cart")}>SEE ITEMS ADDED</button></Link>
        </div>
      </div>





      <div className='big-container'>
        <div className='left'>
          <img src={item11} alt=""/>
          <h2>MEAT</h2>
          <h4 onClick={scrollToMeat}>SEE ALL PRODUCTS</h4>
          <img onClick={scrollToMeat} className='mt' src={mt} alt=""/>
        </div>
        <div className='right'>
          <img src={itemaa} alt=""/>
          <h2>FRUITS & VEGETABLES</h2>
          <h4 onClick={scrollToFV}> SEE ALL PRODUCTS</h4>
          <img onClick={scrollToFV} className='mt' src={mt} alt=""/>
        </div>
      </div>







      <div id='meat' ref={meat} className='bigger-container'>
         <img src={bgr} alt=""/>
         <div className='leftbigcontainer'>
          <div className='item11'>
        <img  src={item11} alt="item11"/>
        </div>
        <h6>Fresh Mutton (Bone-In)</h6>
        <h5>AED 28.00/kg</h5>
        <p>Tender and flavorful, sourced from healthy livestock. Ideal for curries and traditional dishes.</p>
        <h4 onClick={() => setMenu("Cart")}><Link to="/cart" className="nav-link">ADD TO CART</Link></h4>
        <div className='stars'>
        <img src={star} alt=""/>
        <img src={star} alt=""/>
        <img src={star} alt=""/>
        <img src={star} alt=""/>
        <img src={star} alt=""/>
        </div>
         </div>



         <div className='Upper'>
          <div className='smallcontainer'>
          <img className='smallimg' src={item11} alt=""/>
          <h6>Fresh Mutton (Bone-In)</h6>
        <h5>AED 28.00/kg</h5>
        <p>Tender and flavorful, sourced from healthy livestock. Ideal for curries and traditional dishes.</p>
        <h4 onClick={() => setMenu("Cart")}><Link to="/cart" className="nav-link">ADD TO CART</Link></h4>
        <div className='starsmallu'>
        <img src={star} alt=""/>
        <img src={star} alt=""/>
        <img src={star} alt=""/>
        <img src={star} alt=""/>
        <img src={star} alt=""/>
        </div>
        </div>
        <div className='smallcontainer'>
          <img className='smallimg'  src={item11} alt=""/>
          <h6>Fresh Mutton (Bone-In)</h6>
        <h5>AED 28.00/kg</h5>
        <p>Tender and flavorful, sourced from healthy livestock. Ideal for curries and traditional dishes.</p>
        <h4 onClick={() => setMenu("Cart")}><Link to="/cart" className="nav-link">ADD TO CART</Link></h4>
        <div className='starsmallu'>
        <img src={star} alt=""/>
        <img src={star} alt=""/>
        <img src={star} alt=""/>
        <img src={star} alt=""/>
        <img src={star} alt=""/>
        </div>
        </div>
        </div>
        <div className='lower'>
          <div className='smallcontainer'>
          <img className='smallimg'  src={item11} alt=""/>
          <h6>Fresh Mutton (Bone-In)</h6>
        <h5>AED 28.00/kg</h5>
        <p>Tender and flavorful, sourced from healthy livestock. Ideal for curries and traditional dishes.</p>
        <h4 onClick={() => setMenu("Cart")}><Link to="/cart" className="nav-link">ADD TO CART</Link></h4>
        <div className='starsmall'>
        <img src={star} alt=""/>
        <img src={star} alt=""/>
        <img src={star} alt=""/>
        <img src={star} alt=""/>
        <img src={star} alt=""/>
        </div>
        </div>
        
        <div className='smallcontainer'>
          <img className='smallimg'  src={item11} alt=""/>
          <h6>Fresh Mutton (Bone-In)</h6>
        <h5>AED 28.00/kg</h5>
        <p>Tender and flavorful, sourced from healthy livestock. Ideal for curries and traditional dishes.</p>
        <h4 onClick={() => setMenu("Cart")}><Link to="/cart" className="nav-link">ADD TO CART</Link></h4>
        <div className='starsmall'>
        <img src={star} alt=""/>
        <img src={star} alt=""/>
        <img src={star} alt=""/>
        <img src={star} alt=""/>
        <img src={star} alt=""/>
        </div>
        </div>
         </div>
      </div>








      <div className='pg3'>
        <img src={bgr} alt=""/>
        <div className='up'>
        <div className='smallcontainer'>
          <img src={item11} alt=""/>
          <h6>Fresh Mutton (Bone-In)</h6>
        <h5>AED 28.00/kg</h5>
        <p>Tender and flavorful, sourced from healthy livestock. Ideal for curries and traditional dishes.</p>
        <h4 onClick={() => setMenu("Cart")}><Link to="/cart" className="nav-link">ADD TO CART</Link></h4>
        <div className='starsmallu'>
        <img src={star} alt=""/>
        <img src={star} alt=""/>
        <img src={star} alt=""/>
        <img src={star} alt=""/>
        <img src={star} alt=""/>
        </div>
        </div>
        <div className='smallcontainer'>
          <img src={item11} alt=""/>
          <h6>Fresh Mutton (Bone-In)</h6>
        <h5>AED 28.00/kg</h5>
        <p>Tender and flavorful, sourced from healthy livestock. Ideal for curries and traditional dishes.</p>
        <h4 onClick={() => setMenu("Cart")}><Link to="/cart" className="nav-link">ADD TO CART</Link></h4>
        <div className='starsmallu'>
        <img src={star} alt=""/>
        <img src={star} alt=""/>
        <img src={star} alt=""/>
        <img src={star} alt=""/>
        <img src={star} alt=""/>
        </div>
        </div>
        <div className='smallcontainer'>
          <img src={item11} alt=""/>
          <h6>Fresh Mutton (Bone-In)</h6>
        <h5>AED 28.00/kg</h5>
        <p>Tender and flavorful, sourced from healthy livestock. Ideal for curries and traditional dishes.</p>
        <h4 onClick={() => setMenu("Cart")}><Link to="/cart" className="nav-link">ADD TO CART</Link></h4>
        <div className='starsmallu'>
        <img src={star} alt=""/>
        <img src={star} alt=""/>
        <img src={star} alt=""/>
        <img src={star} alt=""/>
        <img src={star} alt=""/>
        </div>
        </div>
        <div className='smallcontainer'>
          <img src={item11} alt=""/>
          <h6>Fresh Mutton (Bone-In)</h6>
        <h5>AED 28.00/kg</h5>
        <p>Tender and flavorful, sourced from healthy livestock. Ideal for curries and traditional dishes.</p>
        <h4 onClick={() => setMenu("Cart")}><Link to="/cart" className="nav-link">ADD TO CART</Link></h4>
        <div className='starsmallu'>
        <img src={star} alt=""/>
        <img src={star} alt=""/>
        <img src={star} alt=""/>
        <img src={star} alt=""/>
        <img src={star} alt=""/>
        </div>
        </div>
        </div>


        <div className='down'>
        <div className='smallcontainer'>
          <img src={item11} alt=""/>
          <h6>Fresh Mutton (Bone-In)</h6>
        <h5>AED 28.00/kg</h5>
        <p>Tender and flavorful, sourced from healthy livestock. Ideal for curries and traditional dishes.</p>
        <h4 onClick={() => setMenu("Cart")}><Link to="/cart" className="nav-link">ADD TO CART</Link></h4>
        <div className='starsmall'>
        <img src={star} alt=""/>
        <img src={star} alt=""/>
        <img src={star} alt=""/>
        <img src={star} alt=""/>
        <img src={star} alt=""/>
        </div>
        </div>
        <div className='smallcontainer'>
          <img src={item11} alt=""/>
          <h6>Fresh Mutton (Bone-In)</h6>
        <h5>AED 28.00/kg</h5>
        <p>Tender and flavorful, sourced from healthy livestock. Ideal for curries and traditional dishes.</p>
        <h4 onClick={() => setMenu("Cart")}><Link to="/cart" className="nav-link">ADD TO CART</Link></h4>
        <div className='starsmall'>
        <img src={star} alt=""/>
        <img src={star} alt=""/>
        <img src={star} alt=""/>
        <img src={star} alt=""/>
        <img src={star} alt=""/>
        </div>
        </div>
        <div className='smallcontainer'>
          <img src={item11} alt=""/>
          <h6>Fresh Mutton (Bone-In)</h6>
        <h5>AED 28.00/kg</h5>
        <p>Tender and flavorful, sourced from healthy livestock. Ideal for curries and traditional dishes.</p>
        <h4 onClick={() => setMenu("Cart")}><Link to="/cart" className="nav-link">ADD TO CART</Link></h4>
        <div className='starsmall'>
        <img src={star} alt=""/>
        <img src={star} alt=""/>
        <img src={star} alt=""/>
        <img src={star} alt=""/>
        <img src={star} alt=""/>
        </div>
        </div>
        <div className='smallcontainer'>
          <img src={item11} alt=""/>
          <h6>Fresh Mutton (Bone-In)</h6>
        <h5>AED 28.00/kg</h5>
        <p>Tender and flavorful, sourced from healthy livestock. Ideal for curries and traditional dishes.</p>
        <h4 onClick={() => setMenu("Cart")}><Link to="/cart" className="nav-link">ADD TO CART</Link></h4>
        <div className='starsmall'>
        <img src={star} alt=""/>
        <img src={star} alt=""/>
        <img src={star} alt=""/>
        <img src={star} alt=""/>
        <img src={star} alt=""/>
        </div>
        </div>
        </div>
      </div>






      <div id='fv' ref={fv} className='bigger-container'>
         <img id='fi' src={bgr} alt=""/>
         <div id='jo' className='leftbigcontainer'>
          <div className='item11'>
        <img src={itemaa} alt=""/></div>
        <h6>Fresh Mutton (Bone-In)</h6>
        <h5>AED 28.00/kg</h5>
        <p>Tender and flavorful, sourced from healthy livestock. Ideal for curries and traditional dishes.</p>
        <h4 onClick={() => setMenu("Cart")}><Link to="/cart" className="nav-link">ADD TO CART</Link></h4>
        <div className='stars'>
        <img src={star} alt=""/>
        <img src={star} alt=""/>
        <img src={star} alt=""/>
        <img src={star} alt=""/>
        <img src={star} alt=""/>
        </div>
         </div>

         <div className='Upper'>
          <div className='smallcontainer'>
          <img className='smallimg'  src={itemaa} alt=""/>
          <h6>Fresh Mutton (Bone-In)</h6>
        <h5>AED 28.00/kg</h5>
        <p>Tender and flavorful, sourced from healthy livestock. Ideal for curries and traditional dishes.</p>
        <h4 onClick={() => setMenu("Cart")}><Link to="/cart" className="nav-link">ADD TO CART</Link></h4>
        <div className='starsmallu'>
        <img src={star} alt=""/>
        <img src={star} alt=""/>
        <img src={star} alt=""/>
        <img src={star} alt=""/>
        <img src={star} alt=""/>
        </div>
        </div>
        <div  className='smallcontainer'>
          <img className='smallimg'  src={itemaa} alt=""/>
          <h6>Fresh Mutton (Bone-In)</h6>
        <h5>AED 28.00/kg</h5>
        <p>Tender and flavorful, sourced from healthy livestock. Ideal for curries and traditional dishes.</p>
        <h4 onClick={() => setMenu("Cart")}><Link to="/cart" className="nav-link">ADD TO CART</Link></h4>
        <div className='starsmall'>
        <img src={star} alt=""/>
        <img src={star} alt=""/>
        <img src={star} alt=""/>
        <img src={star} alt=""/>
        <img src={star} alt=""/>
        </div>
        </div>
         </div>
         <div className='lower'>
          <div className='smallcontainer'>
          <img className='smallimg'  src={itemaa} alt=""/>
          <h6>Fresh Mutton (Bone-In)</h6>
        <h5>AED 28.00/kg</h5>
        <p>Tender and flavorful, sourced from healthy livestock. Ideal for curries and traditional dishes.</p>
        <h4 onClick={() => setMenu("Cart")}><Link to="/cart" className="nav-link">ADD TO CART</Link></h4>
        <div className='starsmall'>
        <img src={star} alt=""/>
        <img src={star} alt=""/>
        <img src={star} alt=""/>
        <img src={star} alt=""/>
        <img src={star} alt=""/>
        </div>
        </div>
        <div className='smallcontainer'>
          <img className='smallimg'  src={itemaa} alt=""/>
          <h6>Fresh Mutton (Bone-In)</h6>
        <h5>AED 28.00/kg</h5>
        <p>Tender and flavorful, sourced from healthy livestock. Ideal for curries and traditional dishes.</p>
        <h4 onClick={() => setMenu("Cart")}><Link to="/cart" className="nav-link">ADD TO CART</Link></h4>
        <div className='starsmall'>
        <img src={star} alt=""/>
        <img src={star} alt=""/>
        <img src={star} alt=""/>
        <img src={star} alt=""/>
        <img src={star} alt=""/>
        </div>
        </div>
         </div>
      </div>









      <div id='cl' className='pg3'>
        <img src={bgr} alt=""/>
        <div id='ca' className='up'>
        <div className='smallcontainer'>
          <img src={itemaa} alt=""/>
          <h6>Fresh Mutton (Bone-In)</h6>
        <h5>AED 28.00/kg</h5>
        <p>Tender and flavorful, sourced from healthy livestock. Ideal for curries and traditional dishes.</p>
        <h4 onClick={() => setMenu("Cart")}><Link to="/cart" className="nav-link">ADD TO CART</Link></h4>
        <div className='starsmallu'>
        <img src={star} alt=""/>
        <img src={star} alt=""/>
        <img src={star} alt=""/>
        <img src={star} alt=""/>
        <img src={star} alt=""/>
        </div>
        </div>
        <div className='smallcontainer'>
          <img src={itemaa} alt=""/>
          <h6>Fresh Mutton (Bone-In)</h6>
        <h5>AED 28.00/kg</h5>
        <p>Tender and flavorful, sourced from healthy livestock. Ideal for curries and traditional dishes.</p>
        <h4 onClick={() => setMenu("Cart")}><Link to="/cart" className="nav-link">ADD TO CART</Link></h4>
        <div className='starsmallu'>
        <img src={star} alt=""/>
        <img src={star} alt=""/>
        <img src={star} alt=""/>
        <img src={star} alt=""/>
        <img src={star} alt=""/>
        </div>
        </div>
        <div className='smallcontainer'>
          <img src={itemaa} alt=""/>
          <h6>Fresh Mutton (Bone-In)</h6>
        <h5>AED 28.00/kg</h5>
        <p>Tender and flavorful, sourced from healthy livestock. Ideal for curries and traditional dishes.</p>
        <h4 onClick={() => setMenu("Cart")}><Link to="/cart" className="nav-link">ADD TO CART</Link></h4>
        <div className='starsmallu'>
        <img src={star} alt=""/>
        <img src={star} alt=""/>
        <img src={star} alt=""/>
        <img src={star} alt=""/>
        <img src={star} alt=""/>
        </div>
        </div>
        <div className='smallcontainer'>
          <img src={itemaa} alt=""/>
          <h6>Fresh Mutton (Bone-In)</h6>
        <h5>AED 28.00/kg</h5>
        <p>Tender and flavorful, sourced from healthy livestock. Ideal for curries and traditional dishes.</p>
        <h4 onClick={() => setMenu("Cart")}><Link to="/cart" className="nav-link">ADD TO CART</Link></h4>
        <div className='starsmallu'>
        <img src={star} alt=""/>
        <img src={star} alt=""/>
        <img src={star} alt=""/>
        <img src={star} alt=""/>
        <img src={star} alt=""/>
        </div>
        </div>
        </div>


        <div className='down'>
        <div className='smallcontainer'>
          <img src={itemaa} alt=""/>
          <h6>Fresh Mutton (Bone-In)</h6>
        <h5>AED 28.00/kg</h5>
        <p>Tender and flavorful, sourced from healthy livestock. Ideal for curries and traditional dishes.</p>
        <h4 onClick={() => setMenu("Cart")}><Link to="/cart" className="nav-link">ADD TO CART</Link></h4>
        <div className='starsmall'>
        <img src={star} alt=""/>
        <img src={star} alt=""/>
        <img src={star} alt=""/>
        <img src={star} alt=""/>
        <img src={star} alt=""/>
        </div>
        </div>
        <div className='smallcontainer'>
          <img src={itemaa} alt=""/>
          <h6>Fresh Mutton (Bone-In)</h6>
        <h5>AED 28.00/kg</h5>
        <p>Tender and flavorful, sourced from healthy livestock. Ideal for curries and traditional dishes.</p>
        <h4 onClick={() => setMenu("Cart")}><Link to="/cart" className="nav-link">ADD TO CART</Link></h4>
        <div className='starsmall'>
        <img src={star} alt=""/>
        <img src={star} alt=""/>
        <img src={star} alt=""/>
        <img src={star} alt=""/>
        <img src={star} alt=""/>
        </div>
        </div>
        <div className='smallcontainer'>
          <img src={itemaa} alt=""/>
          <h6>Fresh Mutton (Bone-In)</h6>
        <h5>AED 28.00/kg</h5>
        <p>Tender and flavorful, sourced from healthy livestock. Ideal for curries and traditional dishes.</p>
        <h4 onClick={() => setMenu("Cart")}><Link to="/cart" className="nav-link">ADD TO CART</Link></h4>
        <div className='starsmall'>
        <img src={star} alt=""/>
        <img src={star} alt=""/>
        <img src={star} alt=""/>
        <img src={star} alt=""/>
        <img src={star} alt=""/>
        </div>
        </div>
        <div className='smallcontainer'>
          <img src={itemaa} alt=""/>
          <h6>Fresh Mutton (Bone-In)</h6>
        <h5>AED 28.00/kg</h5>
        <p>Tender and flavorful, sourced from healthy livestock. Ideal for curries and traditional dishes.</p>
        <h4 onClick={() => setMenu("Cart")}><Link to="/cart" className="nav-link">ADD TO CART</Link></h4>
        <div className='starsmall'>
        <img src={star} alt=""/>
        <img src={star} alt=""/>
        <img src={star} alt=""/>
        <img src={star} alt=""/>
        <img src={star} alt=""/>
        </div>
        </div>
        </div>
      </div>


      <div className='last'>
        <img src={Lastbg} alt=""/>
        <h1>Need Fresh Meat or Fruits? <br/>Shop Now for Guaranteed Quality.</h1>
        <div className='lastbtn' onClick={() => setMenu("Products")}><Link to="/products" className="nav-link">
          <button onClick={scrollToTop}>SHOP NOW</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Products

import React from 'react';
import './Items.css';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../Products/All_products.js';
import { Link } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { addToCart } from '../../Redux/counter/counterSlice.js';
const Items = () => {
  const { id } = useParams();
  const product = products.find((prod) => prod.id === parseInt(id));
   const items = useSelector((state)=> state.counter.items)
   console.log(items)
   const dispatch = useDispatch();
   useEffect(() => {
    window.scrollTo(0, 0); // scrolls to top-left of the page
  }, []);
  if (!product) {
    return (
      <div className="product-not-found" style={{ position: 'relative', top: '157px' }}>
        <h2>Product not found</h2>
      </div>
    );
  }

  return (
    <div style={{ position: 'relative', top: '157px' }} className='items'>
      <div className="items-plain">
        <ul>
         <Link className='items-link' style={{textDecorationColor:'rgb(0,45,24)',}} to='/home'><li>Home </li></Link>
         <li>/</li> 
         <Link className='items-link' style={{textDecorationColor:'rgb(0,45,24)'}} to='/' ><li>Collection </li></Link>
         <li>/</li> 
         <Link className='items-link' style={{textDecorationColor:'rgb(0,45,24)'}} to='/'><li>Now Trending </li></Link>
         <li>/</li> 
          <li>{product.name}</li>
        </ul>
      </div>
      <div className="items-cont">
      <div className="items-img">
        <img src={product.imageUrl} alt="" /> 
      </div>
      <div className="items-s2">
        <p>{product.name.toUpperCase()}</p>
        <p style={{fontSize:'13px',fontWeight:'400',color:'rgb(102,112,107)'}}>Men - Green - Lacoste</p>
        <div>
        <div className='items-s2-div'>MRP: {product.price}</div>
        <p style={{fontSize:'14px',fontWeight:'400', color: 'rgb(0,45,24)'}}>(Inclusive of all taxes)</p>
        </div>
        <hr style={{width:'435px',backgroundColor:'#EEEEEE'}} />
        <p style={{fontSize:'16px',fontWeight:'400', color: 'rgb(0,45,24)'}}>Size</p>
        <div className="items-s2-box">TU - Free Size</div>
        <hr style={{width:'435px',backgroundColor:'#EEEEEE'}} />

        <div style={{display:'flex',}}>
        <div className="items-addtocart" onClick={()=>dispatch(addToCart(product))}>ADD TO CART</div>
        <div className='items-buynow'>BUY NOW</div>
        </div>
        <p style={{fontSize:'14px',fontWeight:'400',color:'rgb(0,45,24)'}}>NOT RETURNABLE</p>
        <div className='items-available'>
          <p style={{fontSize:'14px',fontWeight:'400',color:'rgb(0,45,24)'}}>Check Shipping Availability</p>
          <div className='items-code'>
            <input type="text" placeholder='POSTAL CODE' />
            <button>Check</button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Items;

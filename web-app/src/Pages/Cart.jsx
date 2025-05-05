import React from 'react'
import './Cart.css'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { RemoveToCart,increaseQuantity,decreaseQuantity } from '../Redux/counter/counterSlice';
import { Link } from 'react-router-dom';
import CartSummary from '../Components/CartSummary/CartSummary';

const Cart = () => {
  const dispatch = useDispatch();
    const items = useSelector((state)=> state.counter.items)

    const subtotal = items.reduce((sum, item) => {
      const price = typeof item.price === 'string'
        ? parseFloat(item.price.replace(/[^\d.]/g, ''))
        : item.price;
    
      return sum + price * item.quantity;
    }, 0);
    
    
    const shipping = 0.00;
    const total = subtotal + shipping;

  return (
    <div className='cart'  style={items.length === 0 ?{position:'relative',top:'157px',display:'flex',alignItems:'center',justifyContent:'center'}:{position:'relative',top:'157px',} }>
      {items.length === 0 ?
      <div className='empty-cart' style={{display:'flex'}} >
      <p>You have no items in your shopping cart.</p>
      <p>Click <Link to={'/home'}>here</Link> to continue shopping.</p>
    </div>
    :(
      <div className='cart-items'>
        <div className="cart-items-inner">
        <h1>CART & OPTIONS</h1>
        <div className="cart-items-s1">
        <h1>SHOPPING CART ITEMS</h1>
        {items.map((item)=>{
          return <div className='cart-product-cont'>
            <div className="cart-product-s1">
              <img src={item.imageUrl} alt="" />
            </div>
            <div className="cart-product-s2">
              <p>{item.name}</p>
              <span>Size: 5-L</span>
              <p style={{fontWeight:'500'}}>{item.price}</p>
              <div className="cart-product-last">
                <div className='cart-product-input'>
                <button onClick={()=>dispatch(decreaseQuantity({id:item.id}))} ><svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="rgb(0, 45, 24)"><path d="M200-440v-80h560v80H200Z"/></svg></button>
                <input type='number' min={1} value={item.quantity} />
                <button onClick={()=>dispatch(increaseQuantity({id:item.id}))} ><svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="rgb(0, 45, 24)"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg></button>
                </div>
                <div className='cart-product-bin'>
                <svg onClick={() => dispatch(RemoveToCart({ id: item.id }))} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
                </div>
              </div>
            </div>
          </div>
        })}
        </div>
        </div>
        <div className="cart-items-s2">
          <h1>SUMMARY</h1>
          <CartSummary label='Subtotal' price={`₹${subtotal.toLocaleString()}`} />
          <CartSummary label='Shipping (Standard Delivery - Free)	' price={`₹${shipping.toFixed(2)}`} />
          <hr />
          <CartSummary label='Order Total' price={`₹${total.toLocaleString()}`} />
          <button>Proceed to Checkout</button>
        </div>
      </div>
    ) 
      }
    </div>
  )
}

export default Cart

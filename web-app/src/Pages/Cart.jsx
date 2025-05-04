import React from 'react'
import './Cart.css'
import { useSelector } from 'react-redux';
const Cart = () => {
    const items = useSelector((state)=> state.counter.items)
  return (
    <div className='cart' style={{position:'relative',top:'157px'}}>
      {items.length === 0 ?
      <div style={{display:'flex'}} >
      <p>You have no items in your shopping cart.</p>
      <p>Click <a href="/">here</a> to continue shopping.</p>
    </div>
    :(
      <div>
        {items.map((item)=>{
          return <div>
            <img src={item.imageUrl} alt="" />
            <p>{item.name}</p>
            <p>{item.price}</p>
          </div>
        })}
      </div>
    ) 
      }
    </div>
  )
}

export default Cart

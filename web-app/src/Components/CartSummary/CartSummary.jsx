import React from 'react'
import './CartSummary.css'
const CartSummary = ({label,price}) => {
  return (
   <div className='cartsummary'>
    <p>{label}</p>
    <p>{price}</p>
    </div>
  )
}

export default CartSummary

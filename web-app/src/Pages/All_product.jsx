import React from 'react'
import { products } from '../Components/Products/All_products'
import './/All_products.css'
import { Link } from 'react-router-dom'
const All_product = () => {
  return (
    <div className='all-product' style={{position:'relative',top:'157px'}} >
       <div className="all-product-sort">
       <svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 -960 960 960" width="22px" fill="#000000"><path d="M120-240v-80h240v80H120Zm0-200v-80h480v80H120Zm0-200v-80h720v80H120Z"/></svg>
       Sort and filter
       </div>
       <div className="all-product-cont">
        {products.map((item)=>{
            return <Link style={{textDecoration:'none'}} to={`/product/${item.id}`}><div key={item.id} className='all-product-product'>
                <img src={item.imageUrl} alt="" />
                
                <p style={{fontSize:'16px',fontWeight:'400',color:'rgb(0,45,24'}}>{item.name}</p>
                <p style={{fontSize:'13px',fontWeight:'700',color:'rgb(0,45,24' }}>MRP: {item.price}</p>
            </div>
            </Link>
        })}
       </div>
    </div>
  )
}

export default All_product

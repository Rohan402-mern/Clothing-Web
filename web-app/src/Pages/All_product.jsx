import React from 'react'
import { products } from '../Components/Products/All_products'
import './/All_products.css'
import { Link,useParams } from 'react-router-dom'
import { useEffect,useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleSortPanel } from '../Redux/counter/counterSlice'
import SortFilter from '../Components/Sort&Filter/SortFilter'
const All_product = () => {
  const dispatch = useDispatch();
  const { sortParam } = useParams();
   useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    let sortedProducts = [...products];
    if (sortParam === 'sort-by-price') {
      sortedProducts.sort((a, b) =>
        parseFloat(a.price.replace(/[₹,]/g, '')) - parseFloat(b.price.replace(/[₹,]/g, ''))
      );
    } else if (sortParam === 'sort-by-category') {
      sortedProducts.sort((a, b) => a.type.localeCompare(b.type));
    }

  return (
    <div className='all-product' style={{position:'relative',top:'157px'}} >
       <div onClick={() => dispatch(toggleSortPanel())} className="all-product-sort">
       <svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 -960 960 960" width="22px" fill="#000000"><path d="M120-240v-80h240v80H120Zm0-200v-80h480v80H120Zm0-200v-80h720v80H120Z"/></svg>
       Sort and filter
       </div>
       <div className="all-product-cont">
        {sortedProducts.map((item)=>{
            return <Link key={item.id} style={{textDecoration:'none'}} to={`/product/${item.id}`}><div key={item.id} className='all-product-product'>
                <img src={item.imageUrl} alt="" />
                
                <p style={{fontSize:'16px',fontWeight:'400',color:'rgb(0,45,24'}}>{item.name}</p>
                <p style={{fontSize:'13px',fontWeight:'700',color:'rgb(0,45,24' }}>MRP: {item.price}</p>
            </div>
            </Link>
        })}
       </div>
       <SortFilter  />
    </div>
  )
}

export default All_product

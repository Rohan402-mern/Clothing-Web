import React from 'react'
import './Kids.css'
import { useSelector,useDispatch } from 'react-redux';
import { cat2 } from '../../Redux/counter/counterSlice';
const Kids = () => {
     const dispatch = useDispatch()
          const cateogry = useSelector((state)=> state.counter.cateogry)
  return (
    <div style={{display:cateogry === "kids"?'block':'none'}} className="men-cont">
    <div className='men'>
      <div className="men-div-1">
      <div>NEW IN</div>
        <p>SEE THE KID'S COLLECTION</p>
        
      </div>
      <div style={{paddingRight:'150px'}} className="men-div-2">
        <ul>
            <h1>CLOTHING</h1>
            <li>Polo Shirts</li>
            <li>T-Shirts</li>
            <li>Shirts</li>
            <li>Dresses</li>
            <li>Sweatshirts</li>
            <li>Trackpants</li>
            <li>Trousers</li>
            
        </ul>
      </div>
      <div  className="men-div-3">
        <div style={{paddingRight:'190px'}}>
        <ul>
            <h1>SHOES</h1>
            <li>Sneakers</li>
        </ul>
        </div>
      </div>
      <div style={{paddingRight:'110px'}} className="men-div-4">
      <ul>
            <h1>ACESSORIES</h1>
            <li>Watches</li>
        </ul>
      </div>
      <div className="men-div-5">
      <svg style={{paddingLeft:'210px',cursor:'pointer'}} onClick={()=>dispatch(cat2())} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
      </div>
    </div>
</div>
  )
}

export default Kids

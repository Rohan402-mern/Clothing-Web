import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { cat2 } from '../../Redux/counter/counterSlice';
const Bags = () => {
    const dispatch = useDispatch()
              const cateogry = useSelector((state)=> state.counter.cateogry)
  return (
   <div style={{display:cateogry === "bags"?'flex':'none'}} className='men'>
                 <div className="men-div-1">
                 <div style={{paddingRight:'101px'}}>ALL NEW BAGS</div>
                 <div style={{paddingRight:'101px'}}>ALL BAGS</div>
                 </div>
                 <div style={{paddingRight:'100px'}} className="men-div-2">
                   <ul>
                       <h1>MEN</h1>
                       <li>Backpack</li>
                       <li>Computer Bags</li>
                       <li>Duffle Bags</li>
                       <li>Messenger Bags</li>
                       <li>Shoulder & Reporter Bags</li>
                       <li>Small Leather Goods</li>
                       <li>Wallet & Card Holder</li>
                   </ul>
                 </div>
                 <div  className="men-div-3">
                   <div style={{paddingRight:'117px'}}>
                   <ul >
                       <h1>WOMEN</h1>
                       <li>Backpacks</li>
                       <li>Messenger Bags</li>
                       <li>Shoulder Bags</li>
                       <li>Tote Bags</li>
                       <li>Wallet & Card Holders</li>
                       <li>Small Leather Goods</li>
                   </ul>
                   </div>
                 </div>
                 <div style={{paddingRight:'137px'}} className="men-div-4">
                 <ul>
                 <h1>UNISEX</h1>
                       <li>Backpacks</li>
                       <li>Bags</li>
                       <li>Clutches</li>
                       <li>Messenger Bags</li>
                       <li>Reporter Bags</li>
                       <li>Satchel</li>
                       <li>Sholder Bags</li>
                       <li>Tote Bags</li>
                   </ul>
                 </div>
                 <div className="men-div-5">
                 <svg style={{paddingLeft:'210px',cursor:'pointer'}} onClick={()=>dispatch(cat2())} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
                 </div>
               </div>
  )
}

export default Bags

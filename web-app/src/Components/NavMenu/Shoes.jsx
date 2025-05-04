import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { cat2 } from '../../Redux/counter/counterSlice';
const Shoes = () => {
    const dispatch = useDispatch()
              const cateogry = useSelector((state)=> state.counter.cateogry)
  return (
     <div style={{display:cateogry === "shoes"?'flex':'none'}} className='men'>
              <div className="men-div-1">
              <div style={{paddingRight:'90px'}}>ALL NEW SHOES</div>
              <div style={{paddingRight:'90px'}}>ALL FOOTWEAR</div>
              </div>
              <div style={{paddingRight:'150px'}} className="men-div-2">
                <ul>
                    <h1>MEN</h1>
                    <li>Sneakers</li>
                    <li>Sliders & Sandals</li>
                </ul>
              </div>
              <div  className="men-div-3">
                <div style={{paddingRight:'145px'}}>
                <ul >
                    <h1>WOMEN</h1>
                    <li>Sneakers</li>
                    <li>Sliders & Sandals</li>
                </ul>
                </div>
              </div>
              <div style={{paddingRight:'137px'}} className="men-div-4">
              <ul>
              <h1>KIDS</h1>
                    <li>Sneakers</li>
                    <li>Sliders & Sandals</li>
                </ul>
              </div>
              <div className="men-div-5">
              <svg style={{paddingLeft:'210px',cursor:'pointer'}} onClick={()=>dispatch(cat2())} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
              </div>
            </div>
  )
}

export default Shoes

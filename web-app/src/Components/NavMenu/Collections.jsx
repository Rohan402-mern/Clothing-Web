import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { cat2 } from '../../Redux/counter/counterSlice';
const Collections = () => {
    const dispatch = useDispatch()
          const cateogry = useSelector((state)=> state.counter.cateogry)
  return (
    <div style={{display:cateogry === "collection"?'block':'none'}} className="men-cont">
        <div className='men'>
          <div className="men-div-1">
          <div style={{paddingRight:'120px'}}>GENDERLESS</div>
            
            
          </div>
          <div style={{paddingRight:'90px'}} className="men-div-2">
            <ul>
                <h1>NOW TRENDING</h1>
                <li>L.12.12 Light Polo</li>
                <li>French Elegance Silhouette</li>
                <li>Crocodile Essential</li>
                <li>Special Edition Polo Shirts</li>
                <li>L.12.12 Collection</li>
                
                
            </ul>
          </div>
          <div  className="men-div-3">
            <div style={{paddingRight:'85px'}}>
            <ul >
                <h1>LACOSTE STYLES</h1>
                <li>Color-Block</li>
                <li>Monogram</li>
                <li>Logos XXL</li>
            </ul>
            </div>
          </div>
          <div style={{paddingRight:'37px'}} className="men-div-4">
          <ul>
                <h1>SPORTS COLLECTION</h1>
                <li>Tennis</li>
                <li>Golf</li>
                <li>Fitness & Training</li>
            </ul>
          </div>
          <div className="men-div-5">
          <svg style={{paddingLeft:'210px',cursor:'pointer'}} onClick={()=>dispatch(cat2())} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
          </div>
        </div>
        <div className="new-s2">
      <div className="new-s2-1">
        <img src="https://www.lacoste.in/media/.renditions/wysiwyg/6A-ftwR1-desktop.jpg" alt="" />
       
        <p>LACOSTE SNEAKER</p>
      </div>
      <div className="new-s2-2">
        <img src="https://www.lacoste.in/media/.renditions/wysiwyg/LOOK28_1655.png" alt="" />
        <p>CROCODILE ESSENTIAL</p>
      </div>
      <div className="new-s2-3">
        <img src="https://www.lacoste.in/media/.renditions/wysiwyg/6A-m-sport-desktop.jpg" alt="" />
        <p>SPORTS COLLECTION</p>
      </div>
      <div className="new-s2-4">
        <img src="https://www.lacoste.in/media/.renditions/wysiwyg/LOOK20_0787.png" alt="" />
        <p>FRENCH ELEGANCE SILHOUETTE</p>
      </div>
    </div>
    </div>
  )
}

export default Collections

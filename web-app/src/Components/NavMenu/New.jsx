import React from 'react'
import './New.css'
import { useSelector,useDispatch } from 'react-redux';
import { cat2 } from '../../Redux/counter/counterSlice'; 
const New = () => {
  const dispatch = useDispatch()
  const cateogry = useSelector((state)=> state.counter.cateogry)
  // console.log(cateogry)
  return (
    <div style={{display:cateogry == "new"?'block':'none'}} className="new-cont">
    <div  className='new'>
      <div className="new-div-1">
        <p>NEW IN FOOTWEAR</p>
        <div>SEE THE NEW COLLECTION</div>
      </div>
      <div className="new-div-2">
        <ul>
          <h1>MEN</h1>
          <li>Clothing</li>
          <li>Shoes</li>
          <li>Bags and Small Leather Goods</li>
          <li>Accessories</li>
        </ul>
      </div>
      <div className="new-div-3">
      <ul>
          <h1>WOMEN</h1>
          <li>Clothing</li>
          <li>Shoes</li>
          <li>Bags and Small Leather Goods</li>
        </ul>
      </div>
      <div className="new-div-4">
      <ul>
          <h1>KIDS</h1>
          <li>Clothing</li>
          <li>Shoes</li>
        </ul>
      </div>
      <div className="new-div-5">
      <svg onClick={()=>dispatch(cat2())} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
      </div>
    </div>
    <div className="new-s2">
      <div className="new-s2-1">
        <img src="https://www.lacoste.in/media/.renditions/wysiwyg/Untitled_2.jpeg" alt="" />
        <p>NEW L.12.12 LIGHT POLO SHIRT</p>
      </div>
      <div className="new-s2-2">
        <img src="https://www.lacoste.in/media/.renditions/wysiwyg/Footwear_Chapter-2.jpeg" alt="" />
        <p>LACOSTE SNEAKER</p>
      </div>
      <div className="new-s2-3">
        <img src="https://www.lacoste.in/media/.renditions/wysiwyg/Mega_Menu_Thumbnail_Polo.jpeg" alt="" />
        <p>LACOSTE POLO SHIRTS</p>
      </div>
      <div className="new-s2-4">
        <img src="https://www.lacoste.in/media/.renditions/wysiwyg/medvedev2-story-brandblock-desl_1__1.jpg" alt="" />
        <p>SPORTS COLLECTIONS</p>
      </div>
    </div>
    </div>
  )
}

export default New

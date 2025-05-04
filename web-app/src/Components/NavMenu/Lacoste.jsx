import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { cat2 } from '../../Redux/counter/counterSlice';
const Lacoste = () => {
    const dispatch = useDispatch()
              const cateogry = useSelector((state)=> state.counter.cateogry)
  return (
    <div  style={{display:cateogry === "lacoste"?'flex':'none'}} className="new-s2">
      <div className="new-s2-1">
        <img src="https://www.lacoste.in/media/wysiwyg/label-fair-menu.jpg?imwidth=450&impolicy=custom" alt="" />
       
        <p>DISCOVER OUR COMMITMENTS</p>
      </div>
      <div className="new-s2-2">
        <img src="https://www.lacoste.in/media/.renditions/wysiwyg/Untitled_design.jpg" alt="" />
        <p>LACOSTE STORY</p>
      </div>
      <div className="new-s2-3">
        <img src="https://image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-GB-Site/Library-Sites-LacosteContent/en/dw48571399/fw23/push-menu/brand/PUSH-MENU-sport-fw23.jpg?imwidth=450&impolicy=custom" alt="" />
        <p>SPORT</p>
      </div>
      <div className="new-s2-4">
        <img src="https://image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-GB-Site/Library-Sites-LacosteContent/en/dwc5ba70f8/loyalty-program/le-club-lacoste/CLUB-LACOSTE-MENU-PUSH.jpg?imwidth=450&impolicy=custom" alt="" />
        <svg style={{paddingLeft:'300px',paddingTop:'10px',cursor:'pointer',position:'absolute',}} onClick={()=>dispatch(cat2())} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
        <p>LE CLUB LACOSTE</p>
      </div>
    </div>
  )
}

export default Lacoste

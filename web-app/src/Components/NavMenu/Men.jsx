import React from 'react'
import './Men.css'
import { useSelector,useDispatch } from 'react-redux';
import { cat2 } from '../../Redux/counter/counterSlice'; 
const Men = () => {
    const dispatch = useDispatch()
      const cateogry = useSelector((state)=> state.counter.cateogry)
      
  return (
    <div style={{display:cateogry === "men"?'block':'none'}} className="men-cont">
    <div className='men'>
      <div className="men-div-1">
        <p>SEE THE MEN'S COLLECTION</p>
        <div>BESTSELLERS</div>
        <div>NEW IN</div>
      </div>
      <div className="men-div-2">
        <ul>
            <h1>CLOTHING</h1>
            <li>Polo Shirts</li>
            <li>Shirts</li>
            <li>T-Shirts</li>
            <li>Kurtas & pyjamas</li>
            <li>Sweatshirts</li>
            <li>Tracksuits</li>
            <li>Jackets & Coats</li>
            <li>Sweaters</li>
            <li>Trousers & Shorts</li>
            <li>Swinwear</li>
            <li>Sport CLothing</li>
            <li>Underwear & Lounge wear</li>
        </ul>
      </div>
      <div className="men-div-3">
        <div>
        <ul>
            <h1>SHOES</h1>
            <li>Sneakers</li>
            <li>Outdoor</li>
            <li>Performance</li>
            <li>Sliders & Scandals</li>
        </ul>
        </div>
        <ul className='last-div'>
            <h1>SPORT</h1>
            <li>Tennis</li>
            <li>Golf</li>
            <li>Fitness & Traning</li>
        </ul>
      </div>
      <div className="men-div-4">
      <ul>
            <h1>ACESSORIES</h1>
            <li>Caps & Hats</li>
            <li>Socks</li>
            <li>Belts</li>
            <li>Watches</li>
            <li>Perfumes</li>
            <li>Sunglasses</li>
        </ul>
      </div>
      <div className="men-div-5">
      <ul>
            <h1>BAGS & SMALL LEATHER GOODS</h1>
            <li>Bags</li>
            <li>Wallets & Small Leather Goods</li>
            <li>Backpacks</li>
            <li>Vertical Bags</li>
            <li>Bum Bags</li>
            <li>Buisness and Laptops Bags</li>
        </ul>
      </div>
    </div>

    <div className="new-s2">
      <div className="new-s2-1">
        <img src="https://www.lacoste.in/media/.renditions/wysiwyg/LOOK16_0248.jpg" alt="" />
        <p>FRENCH ELEGANCE SILHOUETTE</p>
      </div>
      <div className="new-s2-2">
        <img src="https://www.lacoste.in/media/.renditions/wysiwyg/6A-ftwR1-desktop.jpg" alt="" />
        <p>LACOSTE SNEAKER</p>
      </div>
      <div className="new-s2-3">
        <img src="https://www.lacoste.in/media/.renditions/wysiwyg/6A-m-udw-desktop.jpg" alt="" />
        <p>LACOSTE UNDERWEAR</p>
      </div>
      <div className="new-s2-4">
        <img src="https://www.lacoste.in/media/.renditions/wysiwyg/6A-m-sport-desktop.jpg" alt="" />
        <p>SPORTS COLLECTIONS</p>
      </div>
    </div>

    </div>
  )
}

export default Men

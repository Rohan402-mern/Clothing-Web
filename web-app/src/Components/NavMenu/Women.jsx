import React from 'react'
import './Women.css'
import { useSelector,useDispatch } from 'react-redux';
const Women = () => {
    const dispatch = useDispatch()
      const cateogry = useSelector((state)=> state.counter.cateogry)
  return (
    
      <div style={{display:cateogry === "women"?'block':'none'}} className="men-cont">
    <div className='men'>
      <div className="men-div-1">
        <p>SEE THE WOMEN'S COLLECTION</p>
        <div>BESTSELLERS</div>
        <div>NEW IN</div>
      </div>
      <div className="men-div-2">
        <ul>
            <h1>CLOTHING</h1>
            <li>Dresses & Skirts</li>
            <li>Sweatshirts</li>
            <li>Polo Shirts</li>
            <li>Jackets & Coats</li>
            <li>T-Shirts</li>
            <li>Tracksuits</li>
            <li>Trousers & Shorts</li>
            <li>Shirts & Tops</li>
            <li>Swinwear</li>
            <li>Sportwear</li>
            <li>Underwear & Lounge wear</li>
        </ul>
      </div>
      <div className="men-div-3">
        <div>
        <ul>
            <h1>SHOES</h1>
            <li>Sneakers</li>
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
            <li>Sunglasses</li>
            <li>Watches</li>
            <li>Caps & Hats</li>
            <li>Perfumes</li>
            <li>Socks</li>
            
        </ul>
      </div>
      <div className="men-div-5">
      <ul>
            <h1>BAGS & SMALL LEATHER GOODS</h1>
            <li>Bags</li>
            <li>Cross Body</li>
            <li>Wallets & Small Leather Goods</li>
            <li>Backpacks</li>
            
        </ul>
      </div>
    </div>

    <div className="new-s2">
      <div className="new-s2-1">
        <img src="https://www.lacoste.in/media/.renditions/wysiwyg/LOOK1_0022.jpg" alt="" />
        <p>FRENCH ELEGANCE SILHOUETTE</p>
      </div>
      <div className="new-s2-2">
        <img src="https://www.lacoste.in/media/.renditions/wysiwyg/6A-ftwR1-desktop.jpg" alt="" />
        <p>LACOSTE SNEAKER</p>
      </div>
      <div className="new-s2-3">
        <img src="https://www.lacoste.in/media/.renditions/wysiwyg/Starter-desk-2.jpg" alt="" />
        <p>CROCODILE LEATER GOODS</p>
      </div>
      <div className="new-s2-4">
        <img src="https://www.lacoste.in/media/.renditions/wysiwyg/6A-w-sport-desktop.jpg" alt="" />
        <p>SPORTS COLLECTIONS</p>
      </div>
    </div>

    </div>
    
  )
}

export default Women

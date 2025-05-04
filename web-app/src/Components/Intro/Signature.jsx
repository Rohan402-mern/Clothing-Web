import React from 'react'
import './Signature.css'
import { useState,useRef,useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { ReducerType } from '@reduxjs/toolkit';
import { cat12 } from '../../Redux/counter/counterSlice';
const Signature = () => {

    const signature_product=[
        {id:1,img:'https://www.lacoste.in/media/wysiwyg/DG_230125_LACOSTE_04_814_F1.jpg',title:"Polos for All"},
        {id:2,img:'https://www.lacoste.in/media/wysiwyg/2C-m-tshirt.jpg',title:"T-Shirt Plain & simple"},
        {id:3,img:'https://www.lacoste.in/media/wysiwyg/2B-m-footwear.jpg',title:"LACOSTE Sneakers"},
        {id:4,img:'https://www.lacoste.in/media/wysiwyg/TILE-8.jpg',title:"Shirt All Around"},
        {id:5,img:'https://www.lacoste.in/media/wysiwyg/2C-w-polo.jpg',title:"Polo shirt for her"},
        ]
        const slide = useSelector((state)=> state.counter.slide)
          const dispatch = useDispatch()        
          
          const slideRef = useRef()

          const moveSlide = () => {
            if (slide < signature_product.length && slide<3) {
              const newSlide = slide + 1;
                dispatch(cat12(newSlide))
              slideRef.current.style.transform = `translateX(-${(newSlide - 1) * 10}%)`;
            }
          };
          
          const backSlide = () => {
            if (slide > 1 ) {
              const newSlide = slide - 1;
              dispatch(cat12(newSlide))
              slideRef.current.style.transform = `translateX(-${(newSlide - 1) * 10}%)`;
            }
          };
       
         
      
          

  return (
    <div className='signature'>
      <h1>SIGNATURE ESSENTIALS</h1>
      <div className="move">
      <svg onClick={backSlide} style={{opacity:slide == "1"?'0.4':'1'}} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M400-116 36-480l364-364 34 34-330 330 330 330-34 34Z"/></svg>
      <p>{slide}/5</p>
      <svg onClick={moveSlide} style={{opacity:slide == "3"?'0.4':'1'}} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m320-116-34-34 330-330-330-330 34-34 364 364-364 364Z"/></svg>
      </div>
      <div className="signature-slider">
      <div ref={slideRef} className='slider-cont'>
        {
            signature_product.map((item)=>{
            return <div key={item.id} className='signature-product'>
                <img src={item.img} alt="" />
                <p>{item.title}</p>
            </div>
        })
        }
        </div>
      </div> 
    </div>
  )
}

export default Signature

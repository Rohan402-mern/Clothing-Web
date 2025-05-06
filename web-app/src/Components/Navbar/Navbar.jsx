import React, { useState, useRef, useEffect } from 'react';
import './Navbar.css';
import { useSelector,useDispatch } from 'react-redux';
import {cat1,cat3,cat4,cat5,cat6,cat7,cat8,cat9,cat10,cat11 } from '../../Redux/counter/counterSlice';
import New from '../NavMenu/New';
import Men from '../NavMenu/Men';
import Women from '../NavMenu/Women';
import Kids from '../NavMenu/Kids';
import Collections from '../NavMenu/Collections';
import Lacoste from '../NavMenu/Lacoste';
import Shoes from '../NavMenu/Shoes';
import Bags from '../NavMenu/Bags';
import LoginSlide from '../Intro/LoginSlide';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const moveref = useRef();
  const move = useSelector((state)=> state.counter.move)
  const items = useSelector((state)=> state.counter.items)
  const dispatch = useDispatch()
  useEffect(() => {
    let interval;
    let i =0;

    const fun=()=>{
      interval = setInterval(() => {
        if(i < 50){
          i++;
        moveref.current.style.transform = `translateX(-${i}%)`
        }
        else{
          clearInterval(interval)
          setTimeout(() => {
            moveref.current.style.transform = `translateX(${0}%)`
          }, 2000);
           
        }
      }, 2);

    }
    // setInterval(() => { 
    //   dispatch(increment())
    //   fun()
    // }, 4000);
   return()=>{
    clearInterval(interval)
   }
  }, [move])
  
  return (
    
    <div className='navbar'>
      <div ref={moveref} className="navbar-s1">
        <div>Free Delivery - Free Return</div>
        <div>Join Club Lacoste to enjoy excluive benefits!</div>
      </div>
      <div className="navbar-s2">
        <div className="navbar-s2-s1">
            <img src="https://www.lacoste.in/static/frontend/Eighteentech/Lacoste/en_US/images/logo.svg" alt="" />

            <div className="navbar-s2-s1-input">
            <svg style={{cursor:'pointer'}} xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="black"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
            <input type="text" placeholder='Find a product' />
            </div>
           <div className='navbar-s2-s1-othericon'>
            <svg onMouseEnter={()=>{dispatch(cat11())}} xmlns="http://www.w3.org/2000/svg" height="23px" viewBox="0 -960 960 960" width="23px" fill="#FFFFFF"><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/></svg>
            <svg onMouseEnter={()=>{dispatch(cat11())}} xmlns="http://www.w3.org/2000/svg" height="23px" viewBox="0 -960 960 960" width="23px" fill="#FFFFFF"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/></svg>
            <svg onMouseEnter={()=>{dispatch(cat10())}} xmlns="http://www.w3.org/2000/svg" height="23px" viewBox="0 -960 960 960" width="23px" fill="#FFFFFF"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"/></svg>
            <p style={{color:'white'}}>|</p>
            <Link to={'/checkout'} style={{display:'inline-block',position:'relative'}} ><svg onMouseEnter={()=>{dispatch(cat11())}} xmlns="http://www.w3.org/2000/svg" height="23px" viewBox="0 -960 960 960" width="23px" fill="#FFFFFF"><path d="M240-80q-33 0-56.5-23.5T160-160v-480q0-33 23.5-56.5T240-720h80q0-66 47-113t113-47q66 0 113 47t47 113h80q33 0 56.5 23.5T800-640v480q0 33-23.5 56.5T720-80H240Zm0-80h480v-480h-80v80q0 17-11.5 28.5T600-520q-17 0-28.5-11.5T560-560v-80H400v80q0 17-11.5 28.5T360-520q-17 0-28.5-11.5T320-560v-80h-80v480Zm160-560h160q0-33-23.5-56.5T480-800q-33 0-56.5 23.5T400-720ZM240-160v-480 480Z"/></svg><span className='cart-badge'>{items.length}</span></Link>
            </div>
        </div>
        <div className="navbar-s2-s2">
            <ul>
                <li onClick={()=>dispatch(cat1())} >NEW&nbsp;IN<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M480-380 276-584l20-20 184 184 184-184 20 20-204 204Z"/></svg></li>
                <li onClick={()=>dispatch(cat3())}>MEN<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M480-380 276-584l20-20 184 184 184-184 20 20-204 204Z"/></svg></li>
                <li onClick={()=>dispatch(cat4())}>WOMEN<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M480-380 276-584l20-20 184 184 184-184 20 20-204 204Z"/></svg></li>
                <li onClick={()=>dispatch(cat5())}>KIDS<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M480-380 276-584l20-20 184 184 184-184 20 20-204 204Z"/></svg></li>
                <li onClick={()=>dispatch(cat6())}>COLLECTIONS<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M480-380 276-584l20-20 184 184 184-184 20 20-204 204Z"/></svg></li>
                <li onClick={()=>dispatch(cat7())} style={{color:"rgb(9,212,88)"}}>SHOES<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M480-380 276-584l20-20 184 184 184-184 20 20-204 204Z"/></svg></li>
                <li onClick={()=>dispatch(cat8())} style={{color:"rgb(9,212,88)"}}>BAGS<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M480-380 276-584l20-20 184 184 184-184 20 20-204 204Z"/></svg></li>
                <li style={{color:"rgb(9,212,88)"}}>T-SHIRTS</li>
                <li style={{color:"rgb(9,212,88)"}}>SHIRTS</li>
                <li onClick={()=>dispatch(cat9())}>WE ARE LACOSTE<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M480-380 276-584l20-20 184 184 184-184 20 20-204 204Z"/></svg></li>
            </ul>
        </div>
      </div>
      <div className="menu">
        <New/>
        <Men/>
        <Women/>
        <Kids/>
        <Collections/>
        <Lacoste/>
        <Shoes/>
        <Bags/>
        <LoginSlide/>
        
      </div>
    </div>

  );
};

export default Navbar;

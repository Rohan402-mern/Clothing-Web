import React from 'react'
import './LoginSlide.css'
import { useSelector,useDispatch } from 'react-redux';
import { cat10,cat11 } from '../../Redux/counter/counterSlice';
const LoginSlide = () => {
    const dispatch = useDispatch()
          const cateogry = useSelector((state)=> state.counter.cateogry)
  return (
    <div onMouseEnter={()=>dispatch(cat10())} onMouseLeave={()=>dispatch(cat11())} 
    style={{height:cateogry === "login"?'35vw':'0vw'}} className='loginslide'>
        <div className="loginslide-s1">
            <div>
             <svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 -960 960 960" width="25px" fill="black"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"/></svg>
             <span>LOGIN</span>
             </div>
             <p>Already have an account?</p>
             <p>Sign in for a personalized experience and access to all your benefits and offers.</p>
             <div><button>Login</button></div>
        </div>
        <div className="loginslide-s2">
        <p>DON'T HAVE AN ACCOUNT? CREATE YOUR ACCOUNT NOW AND GET:</p>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 -960 960 960" width="25px" fill="#000000"><path d="M160-80v-440H80v-240h208q-5-9-6.5-19t-1.5-21q0-50 35-85t85-35q23 0 43 8.5t37 23.5q17-16 37-24t43-8q50 0 85 35t35 85q0 11-2 20.5t-6 19.5h208v240h-80v440H160Zm400-760q-17 0-28.5 11.5T520-800q0 17 11.5 28.5T560-760q17 0 28.5-11.5T600-800q0-17-11.5-28.5T560-840Zm-200 40q0 17 11.5 28.5T400-760q17 0 28.5-11.5T440-800q0-17-11.5-28.5T400-840q-17 0-28.5 11.5T360-800ZM160-680v80h280v-80H160Zm280 520v-360H240v360h200Zm80 0h200v-360H520v360Zm280-440v-80H520v80h280Z"/></svg>
            <p>Exclusive Club Lacoste Benefits</p>
            </div>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M240-80q-33 0-56.5-23.5T160-160v-480q0-33 23.5-56.5T240-720h80q0-66 47-113t113-47q66 0 113 47t47 113h80q33 0 56.5 23.5T800-640v480q0 33-23.5 56.5T720-80H240Zm0-80h480v-480h-80v80q0 17-11.5 28.5T600-520q-17 0-28.5-11.5T560-560v-80H400v80q0 17-11.5 28.5T360-520q-17 0-28.5-11.5T320-560v-80h-80v480Zm160-560h160q0-33-23.5-56.5T480-800q-33 0-56.5 23.5T400-720ZM240-160v-480 480Z"/></svg>
            <p>Access to Sale Previews </p>
            </div>
            <div>
            <button style={{color:'white',fontSize:'16px',}}>Create an account</button>
            </div>
        </div>
    </div>
  )
}

export default LoginSlide

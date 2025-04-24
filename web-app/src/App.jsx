import { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='*' element={<div><h1 style={{fontFamily:'Figtree'}}>404 NOT FOUND</h1></div>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import All_product from './Pages/All_product'
import Items from './Components/Items/Items'
function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/all-product' element={<All_product/>} />
      <Route path='/product/:id' element={<Items/>} />
      <Route path='/checkout' element={<Cart/>} />
      {/* <Route path='/checkout/cart' element={<Cart/>} /> */}
      <Route path='*' element={<div><h1 style={{fontFamily:'Figtree',fontWeight:'400',fontSize:'14px',paddingTop:'157px',paddingLeft:'50px',paddingBottom:'280px',color:'rgb(0,45,24'}}>There was no 404 CMS page configured or found.</h1></div>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App

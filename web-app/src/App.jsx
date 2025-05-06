import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Suspense, lazy } from 'react';
import './App.css'
import Spinner from './Components/Lazy/Spinner';
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
const Home = lazy(() => import('./Pages/Home'));
const Cart = lazy(() => import('./Pages/Cart'));
const All_product = lazy(() => import('./Pages/All_product'));
const Items = lazy(() => import('./Components/Items/Items'));

function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Suspense fallback={<Spinner/>}>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/all-product' element={<All_product/>} />
      <Route path="/all-product/:sortParam" element={<All_product />} />
      <Route path='/product/:id' element={<Items/>} />
      <Route path='/checkout' element={<Cart/>} />
      <Route path='*' element={<div><h1 style={{fontFamily:'Figtree',fontWeight:'400',fontSize:'14px',paddingTop:'157px',paddingLeft:'50px',paddingBottom:'280px',color:'rgb(0,45,24'}}>There was no 404 CMS page configured or found.</h1></div>}/>
    </Routes>
    </Suspense>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App

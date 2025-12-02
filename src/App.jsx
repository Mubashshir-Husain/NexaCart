import React,{useState} from 'react'

import NavBar from './Componenets/NavBar.jsx'
import Home from './Pages/Home.jsx'
import Products from './Pages/Products.jsx'
import ProductDetails from './Pages/ProductDetails.jsx'
import NoFound from './Pages/NoFound.jsx'
import Cart from './Pages/Cart.jsx'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function App() {

  let [cartItems, setCartItems] = useState([]);

  return (
    <div>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/products' element = {<Products cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route path='/productDetails/:id' element = {<ProductDetails cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route path='/Cart' element = {<Cart cartItems={cartItems} />} />
        <Route path='*' element = {<NoFound/>} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}


import Header from './Components/Header/Header'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Product from './Components/Product/Product'
import Order from './Components/Order/Order'
import User from './Components/User/User'
import Home from './Components/Home/Home'
import ProductDetail from './Components/ProductDetail/ProductDetail'
import { useState } from 'react'
import Cart from './Components/Cart/Cart'
import Checkout from './Components/Checkout/Checkout'
function App() {
  const [cartshownumber, setcartshownumber] = useState(0)
  const [cartArray,setcartArray] = useState([])
function addToCart(itemDetail){
setcartArray([...cartArray,itemDetail])
setcartshownumber(cartshownumber+1)
}
  return (
    <>
    <BrowserRouter>
    <Header cartshownumber = {cartshownumber} />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/productdetail/:id' element={<ProductDetail addToCart = {addToCart} />}/>
      <Route path='/checkout' element={<Checkout />}/>
      <Route path='/cart' element={<Cart cartItem={cartArray} />}/>
      <Route path='/order' element={<Order/>}/>
      <Route path='/user' element={<User/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../customer/pages/HomePage'
import Cart from '../customer/pages/Cart'
import Navigation from '../customer/components/navigation/Navigation'
import Footer from '../customer/pages/Footer'
import Product from '../customer/pages/Product'
import ProductDetails from '../customer/pages/ProductDetails'
import CheckOut from '../customer/pages/CheckOut'
import Order from '../customer/pages/Order'
import OrderDetails from '../customer/pages/OrderDetails'

const CustomerRoutes = () => {
  return (
    <div>
      <div>
      <Navigation/>
      </div>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/:lavelOne/:lavelTwo/:lavelThree' element={<Product/>}></Route>
        <Route path='/product/:productId' element={<ProductDetails/>}></Route>
        <Route path='/checkout' element={<CheckOut/>}></Route>
        <Route path='/account/order' element={<Order/>}></Route>
        <Route path='/account/order/:orderId' element={<OrderDetails/>}></Route>
      </Routes>
      {/* <HomePage/> */}
        {/* <Product/> */}
        {/* <ProductDetails/> */}
        {/* <Cart/> */}
        {/* <CheckOut/> */}
        {/* <Order/> */}
        {/* <OrderDetails/> */}
      <div>
      <Footer/>
      </div>
    </div>
  )
}

export default CustomerRoutes

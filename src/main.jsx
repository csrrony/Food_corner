import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Context from './component/context/Context.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './component/home/Home.jsx'
import Shop from './component/shop/Shop.jsx'
import Contact from './component/contact/Contact.jsx'
import CatagoryView from './component/catagory/CatagoryView.jsx'
import SingleProduct from './component/product/SingleProduct.jsx'
import Cart from './component/cart/Cart.jsx'
import Payment from './component/payment/Payment.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='product/:id' element={<SingleProduct />} />
      <Route path='shop' element={<Shop />} />
      <Route path='shop/:id' element={<SingleProduct />} />
      <Route path='contact' element={<Contact />} />
      <Route path='/:catagory' element={<CatagoryView />} />
      <Route path='/:catagory/:id' element={<SingleProduct />} />
      <Route path='cart' element={<Cart />} />
      <Route path='cart/payment' element={<Payment />} />
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Context>
      <RouterProvider router={router} />
    </Context>
  </React.StrictMode>,
)

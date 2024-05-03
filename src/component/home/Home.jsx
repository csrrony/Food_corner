import React from 'react'
import Product from '../product/Product'
import Search from '../search/Search'
import Catagory from '../catagory/Catagory'
import Register from '../register/Register'
import About from '../about/About'
import Map from '../map/Map'

const Home = () => {
  return (
    <div>
      <Search />
      <Catagory />
      <Product />
      <Register />
      <Map />
      <About />
    </div>
  )
}

export default Home
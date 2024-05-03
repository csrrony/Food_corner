import React from 'react'
import Navbar from './component/navbar/Navbar'
import {Outlet} from 'react-router-dom'
import Footer from './component/footer/Footer'


const App = () => {
  return (
    <div className='bg-gradient-to-br from-sky-50 to-blue-50 via-violet-50'>
      <Navbar/>
      <div className='min-h-[70vh]'>
        <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
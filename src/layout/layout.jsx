import React from 'react'
import {Outlet} from 'react-router-dom'
import Footer from './footer/footer'
import HeaderSlider from './headerSlider/HeaderSlider'

const Layout = () => {
  return (
    <div className='relative'>
        <HeaderSlider/>
        <Outlet/>
        <Footer/>
    </div>
    
  )
}

export default Layout
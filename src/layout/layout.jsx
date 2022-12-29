import React from 'react'
import {Outlet} from 'react-router-dom'
import Footer from './footer/footer'
import HeaderSlider from './headerSlider/HeaderSlider'

const Layout = () => {
  return (
    <>
        <HeaderSlider/>
        <Outlet/>
        <Footer/>
    </>
    
  )
}

export default Layout
import React from 'react'
import {Fragment} from 'react'
import {Outlet} from 'react-router-dom'
import Footer from './footer/footer'
import Header from './header/header'
import HeaderSlider from './headerSlider/HeaderSlider'

const Layout = () => {
  return (
    <>
        <HeaderSlider/>
        {/* <Header/> */}
        <Outlet/>
        <Footer/>
    </>
    
  )
}

export default Layout
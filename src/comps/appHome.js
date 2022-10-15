import React from 'react'
import Footer from './footer'
import VodInput from './vodInput'
import VodList from './vodList'
import VodStrip from './vodStrip'

import "./compsCSS/home.css"
export default function AppHome() {
  return (
    <React.Fragment>
        <VodStrip/>
        <VodInput />
        <VodList />
        <Footer />
    </React.Fragment>
  )
}

import React, { useEffect } from 'react'
import Footer from './footer'
import VodInput from './vodInput'
import VodList from './vodList'
import VodStrip from './vodStrip'
import {urlAPI} from '../const.js'

import "./compsCSS/home.css"
export default function AppHome() {

  useEffect(()=>{},[]);
  
  const doAPI=async(_searchQ)=>{
    try{
      const resp= await fetch(urlAPI+_searchQ);
      const data= await resp.json();

      return(data);
    }
    catch(err){
      console.log(err)
    }
  }
  return (
    <React.Fragment>
        <VodStrip/>
        <VodInput doAPI={doAPI} />
        <VodList />
        <Footer />
    </React.Fragment>
  )
}

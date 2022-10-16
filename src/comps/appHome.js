import React, { useEffect, useState } from 'react'
import Footer from './footer'
import VodInput from './vodInput'
import VodList from './vodList'
import VodStrip from './vodStrip'
import {urlAPI} from '../const.js'

import "./compsCSS/home.css"
export default function AppHome() {

  const [movieArr,setMovieArr]=useState([]);

  useEffect(()=>{},[]);
  
  const doAPI=async(_searchQ)=>{
    try{
      const resp= await fetch(urlAPI+_searchQ);
      const data= await resp.json();

      setMovieArr(data.Search);
    }
    catch(err){
      console.log(err)
    }
  }
  return (
    <React.Fragment>
        <VodStrip/>
        <VodInput doAPI={doAPI} />
        <VodList movieArr={movieArr} />
        <Footer />
    </React.Fragment>
  )
}

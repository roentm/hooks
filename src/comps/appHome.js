import React, { useEffect, useState } from 'react'
import {useSearchParams} from 'react-router-dom'
import VodList from './vodList'
import VodStrip from './vodStrip'
import {urlAPI} from '../const.js'

import "./compsCSS/home.css"
export default function AppHome() {

  const [queries] = useSearchParams();
  const [movieArr,setMovieArr]=useState([]);

  useEffect(()=>{
    const searchQ= queries.get("s") || "lego";
    doAPI(searchQ);
  },[queries]);
  
  const doAPI=async(_searchQ)=>{
    try{
      const resp= await fetch(urlAPI+"s="+_searchQ);
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
        <VodList movieArr={movieArr} />
    </React.Fragment>
  )
}

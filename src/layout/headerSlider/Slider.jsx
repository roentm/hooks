import React, { useRef } from 'react'
import { useCallback } from 'react';
import { useEffect } from 'react';
import { useState } from 'react'

const Slider = ({images}) => {
    const [curIndex, setCurIndex] = useState(0);
    const timeRef= useRef(null);

    const goBack=()=>{
      const isFirstSlider= curIndex ===0;
      const newIndext=isFirstSlider?images.length-1:curIndex-1;
      setCurIndex(newIndext)
    }
    const goForward=useCallback(()=>{
      const islastSlider= curIndex===images.length-1;
      const newIndext=islastSlider?0:curIndex+1;
      setCurIndex(newIndext);
    },[curIndex,images.length])
    
  
  

    useEffect(()=>{
      if(timeRef.current){clearTimeout(timeRef.current)}
      timeRef.current=setTimeout(()=>{
        goForward()
      },3000);
      return ()=>{clearTimeout(timeRef.current)};
    },[goForward]);
  return (
    <div className='sliderStyle'>

      <div className='slidesStyle' style={{backgroundImage: `url(${images[curIndex].img})`}}>
        <div className='leftArrowStyle' onClick={goBack} title='Previous Item'>❰</div>
        <div className='rightArrowStyle' onClick={goForward} title='Next Item'>❱</div>
        <div className='container'>
          <h1 className='display-3 text-light demotext'>CinemaHoliK</h1>
        </div>
      </div>
    </div>
  )
}

export default Slider
import React from 'react'
import { useState } from 'react'

const Slider = ({images}) => {
    const [curIndex, setCurIndex] = useState(0);

    const slidesStyle={
        width: "100%",
        height: "100%",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: `url(${images[curIndex].img})`
    };
    const sliderStyle={
        height: "100%",
        position: "relative"

    };
    const leftArrowStyles={
      position: "absolute",
      top: "50%",
      transform: 'translate(0, -50%)',
      left: "32px",
      fontSize: "55px",
      color: "#fff",
      zIndex: 1,
      cursor: "pointer",
    };
    const rightArrowStyles={
      position: "absolute",
      top: "50%",
      transform: 'translate(0, -50%)',
      right: "32px",
      fontSize: "55px",
      color: "#fff",
      zIndex: 1,
      cursor: "pointer",
    };
    const goBack=()=>{
      const isFirstSlider= curIndex ===0;
      const newIndext=isFirstSlider?images.length-1:curIndex-1;
      setCurIndex(newIndext)
    }
    const goForward=()=>{
      const islastSlider= curIndex===images.length-1;
      const newIndext=islastSlider?0:curIndex+1;
      setCurIndex(newIndext);
    };
  return (
    <div style={sliderStyle}>
        <div style={leftArrowStyles} onClick={goBack} title='Previous Item'>❰</div>
        <div style={rightArrowStyles} onClick={goForward} title='Next Item'>❱</div>
        <div style={slidesStyle}>
        </div>
    </div>
  )
}

export default Slider
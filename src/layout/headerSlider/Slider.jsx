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
    }
    const sliderStyle={
        height: "100%",
        position: "relative"

    }
  return (
    <div style={sliderStyle}>
        <div style={slidesStyle}>
        </div>
    </div>
  )
}

export default Slider
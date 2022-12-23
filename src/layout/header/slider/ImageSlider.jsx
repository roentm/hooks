import React from 'react'
import { useState } from 'react'

const ImageSlider = ({images}) => {
    const [currentIndex,setCurrentIndex] =useState(0);
    const slideStyle={
        width: "100%",
        height: "100%",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: `url(${images[currentIndex].img})`
        
    }
  return (
    <div className='container-fluid' style={slideStyle}>

    </div>
  )
}

export default ImageSlider
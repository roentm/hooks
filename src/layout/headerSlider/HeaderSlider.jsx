import React from 'react'
import { images } from '../../consts'
import Slider from './Slider'



const HeaderSlider = () => {
    const slideWrapStyle={
        height: '280px'
    }
  return (
    <div className='strip' style={slideWrapStyle}>
        <Slider images={images} parentWidth={100} />
    </div>
  )
}

export default HeaderSlider
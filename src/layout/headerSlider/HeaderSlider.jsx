import React from 'react'
import { images } from '../../consts'
import Slider from './Slider'



const HeaderSlider = () => {
    const slideWrapStyle={
        height: '280px'
    }
  return (
    <div className='container-fluid' style={slideWrapStyle}>
        <Slider images={images}/>
    </div>
  )
}

export default HeaderSlider
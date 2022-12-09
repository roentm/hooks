import React from 'react'
import { useState } from 'react'
import PageCounter from './movies/pageCounter'

const Movies = () => {
  const [pages,setPages]=useState(49);

  return (
    <>
    <PageCounter pages={pages}/>
    </>
  )
}

export default Movies
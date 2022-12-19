import React from 'react'
import { useState } from 'react'
import PageCounter from './movies/pageCounter'

const Movies = () => {
  const [pages,setPages]=useState(49);
  const [page,setPage] = useState();
  const [year,setYear]=useState();

  return (
    <>
    <PageCounter pages={pages}/>
    </>
  )
}

export default Movies
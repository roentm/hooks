import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

const PageCounter = (props) => {
    const [numbers,setNumbers]= useState([]);
    const {pages,pickPage}=props;
    useEffect(()=>{
      const series=[];
      for (let i=0;i<pages;i++){
        series.push(i+1);
      }
      setNumbers(series);
      },[pages])
  return (
    <>
    <div className="container p-2">
      <label className='me-2 text-light fs-5'>Jump to Page:</label>
      <select onChange={(e)=>{pickPage(e.target.value)}} className='form border-0 rounded-3 text-light bg-dark p-1 btnHover'>
        {numbers.map((num,i)=>(
            <option key={i} value={num}>{num}</option>
          ))
        }
      </select>
    </div>
    </>
  )
}

export default PageCounter
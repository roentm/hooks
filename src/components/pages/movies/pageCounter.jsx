import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

const PageCounter = ({pages,pickPage}) => {
    const [numbers,setNumbers]= useState([]);
    useEffect(()=>{
      const series=[];
      for (let i=0;i<pages;i++){
        series.push(i+1);
      }
      setNumbers(series);
      },[pages])
  return (
    <>
    <div className="container">
        <select onChange={(e)=>{pickPage(e.target.value)}}>
          {numbers.map((num,i)=>(
            <option key={i}>{num}</option>
          ))}
        </select>
    </div>
    </>
  )
}

export default PageCounter
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

const YearPicker = (props) => {
  const thisYear= new Date().getFullYear();
  const [years,setYears]=useState([]);
  const topYears=[1990,1995,2000,2005,2010,2015,2020];
  
  useEffect(()=>{
    const yearPicker=[];
    for (let i=1950;i<=Number(thisYear);i++){
      yearPicker.push(i);
    }
    setYears(yearPicker);
    
  },[])
  
  return (
    <div className='container d-flex flex-wrap'>
      <div className='row d-flex col-md-9 p-2'>
        <label className='text-light fs-5 d-none d-sm-none d-md-block col-2 p-2'>Top Years:</label>
        {topYears.map(year=><button key={year} value={year} className='btn btn-dark col-md-1 col-sm-3 col-3 me-1 p-2  btnHover' onClick={(e)=>props.pickYear(e.target.value)}>{year}</button>)} 
      </div>
      <div className='d-flex col-md-3 p-2'>
        <label className='text-light fs-5 d-none d-sm-none d-md-block p-2'>Pick a Year: </label>
        <select onChange={(e)=>{props.pickYear(e.target.value)}} className='form border-0 rounded-3 text-light bg-dark p-1 btnHover'>
          {years.map((item,i)=>(
            <option key={i} value={item}>{item}</option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default YearPicker
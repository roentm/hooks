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
      <div className='row d-flex col-md-9'>
        <div>
          <label className='me-3 text-light fs-5 d-sm-none'>Top Years:</label>
          {topYears.map(year=><button key={year} value={year} className='btn btn-dark col-md-1 col-sm-12 col-xs-12 me-1 p-2  btnHover' onClick={(e)=>props.pickYear(e.target.value)}>{year}</button>)}
        </div>
      </div>
      <div className='d-flex col-md-3 p-2'>
        <label className='me-3 text-light fs-5 d-sm-none'>Pick a Year: </label>
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
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
    <div className='container'>
      <div className='row d-flex'>
        <div>
          <label className='me-3'>Top Years:</label>
          {topYears.map(year=><button key={year} value={year} className='btn btn-dark col-1' onClick={(e)=>props.pickYear(e.target.value)}>{year}</button>)}
        </div>
      </div>
      <div>
        <label className='me-3'>Pick a Year: </label>
        <select onChange={(e)=>{props.pickYear(e.target.value)}}>
          {years.map((item,i)=>(
            <option key={i} value={item}>{item}</option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default YearPicker
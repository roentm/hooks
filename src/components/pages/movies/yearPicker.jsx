import React from 'react'
import { useEffect } from 'react';

const YearPicker = (props) => {
  const thisYear= new Date().getFullYear();
  const topYears=[1990,1995,2000,2005,2010,2015,2020];
  const yearPicker=[];
  useEffect(()=>{
    for (let i=1950;i<=Number(thisYear);i++){
      yearPicker.push(i);
    }
    console.log(yearPicker);
  })
  
  return (
    <div className='container'>
      <div className='row d-flex'>
        <strong>Top Years:</strong>
        {topYears.map(year=><button key={year} value={year} className='btn btn-dark col-1' onClick={(e)=>props.pickYear(e.target.value)}>{year}</button>)}
      </div>
      <select onChange={(e)=>{props.pickYear(e.target.value)}}>
          {yearPicker.map((item,i)=>(
            <option key={i} value={item}>{item}</option>
          ))}
        </select>

    </div>
  )
}

export default YearPicker
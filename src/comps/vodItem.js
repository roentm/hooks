import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function VodItem(props) {

  const item=props.item;
  const nav=useNavigate();

  const onClickInfo=()=>{
    nav(`/info/${item.imdbID}`)
  }

  return (
    <div className='col-md-4 p-2'>
      <div className='border p-2 h-100 overflow-hidden shadow'>
        <img src={item.Poster} className='float-start me-2 w-25' />
        <h3>{item.Title}</h3>
        <div>Year: {item.Year}</div>
        <button className='btn btn-dark' onClick={onClickInfo} >More Info</button>
      </div>
    </div>
  )
}

import React from 'react'

export default function VodItem(props) {

  const item=props.item;

  return (
    <div className='col-md-4 p-2'>
      <div className='border p-2 h-100 overflow-hidden shadow'>
        <img src={item.Poster} className='float-start me-2 w-25' />
        <h3>{item.Title}</h3>
        <div>Year: {item.Year}</div>
        <button className='btn btn-dark'>More Info</button>
      </div>
    </div>
  )
}

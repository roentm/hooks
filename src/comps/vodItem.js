import React from 'react'

export default function VodItem(props) {

  const item=props.item;

  return (
    <div className='col-md-3 border p-2'>
        <img src={item.Poster} />
        <h3>{item.Title}</h3>
        <div>Year: {item.Year}</div>
        <button className='btn btn-dark'>More Info</button>
    </div>
  )
}

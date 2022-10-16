import React from 'react'
import VodItem from './vodItem'

export default function VodList(props) {
  return (
    <div className='container-fluid vodList py-5'>
        <div className='container'>
            <h2>List of Movies:</h2>
            <div className='row'>
              {props.movieArr.map(item=>{
                return(
                  <VodItem key={item.imdbID} item={item}/>
                )
              })}
            </div>
        </div>
    </div>
  )
}

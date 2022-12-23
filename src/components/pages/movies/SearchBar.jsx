import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const SearchBar = ({searchInput}) => {
    const [input,setInput]= useState('');

    useEffect(()=>{
        searchInput(input);
    },[input])
  return (
    <div className='container'>
        <div className='col-4'>
            <input placeholder='Search Movies and shows...' onChange={(e)=>setInput(e.target.value)} className='form form-control' />
        </div>
        
    </div>
  )
}

export default SearchBar
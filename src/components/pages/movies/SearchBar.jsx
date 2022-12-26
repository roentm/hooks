import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const SearchBar = ({searchInput}) => {
    const [input,setInput]= useState('');

    const handleKeydown = (e) => {
      if (e.key==='enter') {
        e.preventDefault();
        e.target.form(new e('submit',{cancelble: true}))
      }
    }
    const handleSubmit=(e)=>{
      e.preventDefault();
      searchInput(input);
    }

  return (
    <div className='container'>
        <div className='col-4'>
            <form onSubmit={handleSubmit}>
              <input placeholder='Search Movies and shows...' value={input}
              onChange={(e)=>{setInput(e.target.value)}}
              onKeyDown={handleKeydown} 
              className='form form-control' />
              <button type='submit'>send</button>
            </form>
            
        </div>
        
    </div>
  )
}

export default SearchBar
import React from 'react'
import { useState } from 'react'

const SearchBar = ({searchInput,resetSearch}) => {
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
    <div className='container-fluid bg-dark'>
        <div className='container p-2 d-flex'>
          <form onSubmit={handleSubmit} className='d-flex justify-self-start'>
            <input placeholder='Search Movies and shows...' value={input}
              onChange={(e)=>{setInput(e.target.value)}}
              onKeyDown={handleKeydown} 
              className='form form-control' />
            <button type='submit' className='btn btn-info ms-2 infohover fs-6'>Search</button>
            <button className='btn btn-danger ms-2 fs-6' onClick={resetSearch}>Reset</button>
          </form>
            
        </div>
        
    </div>
  )
}

export default SearchBar
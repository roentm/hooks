import React, {useRef} from 'react'
import {useNavigate} from 'react-router-dom'

export default function VodInput(props) {
    const inputRef=useRef();
    const nav=useNavigate();
    
    const onSearchClick=()=>{
        const input_val=inputRef.current.value;
        nav(`?s=${input_val}`)
    }

  return (
    <header className='container-fluid bg-dark p-2'>
        <div className='container'>
            <div className='row'>
                <div className='logo col-auto'>
                    <h2 className='text-white'>My VoD</h2>
                </div>
                <nav className='d-flex col-md-4'>
                    <input ref={inputRef} placeholder='Search...' type='search' className='form-control'/>
                    <button className='btn btn-warning ms-1' onClick={onSearchClick}>Search</button>
                </nav>
            </div>

        </div>

    </header>
  )
}

import React, { useRef } from 'react'

export default function VodInput() {
    const inputRef=useRef();

    const searchAPI= ()=>{
        props.doAPI('s='+useRef.current.value);
    }

  return (
    <header className='container-fluid bg-dark p-2'>
        <div className='container'>
            <div className='row'>
                <div className='logo col-auto'>
                    <h2 className='text-white'>My VoD</h2>
                </div>
                <nav className='d-flex col-md-4'>
                    <input ref={inputRef} placeholder='Search...' type='search' className='form-control' />
                    <button className='btn btn-warning ms-1' onClick={searchAPI}>Search</button>
                </nav>
            </div>

        </div>

    </header>
  )
}

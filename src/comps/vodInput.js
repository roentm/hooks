import React from 'react'

export default function VodInput() {
  return (
    <header className='container-fluid bg-dark p-2'>
        <div className='container'>
            <div className='row'>
                <div className='logo col-auto'>
                    <h2 className='text-white'>My VoD</h2>
                </div>
                <nav className='d-flex col-md-4'>
                    <input placeholder='Search...' type='search' className='form-control' />
                    <select>
                        
                    </select>
                    <button className='btn btn-warning ms-1'>Search</button>

                </nav>
            </div>

        </div>

    </header>
  )
}

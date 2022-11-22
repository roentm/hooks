import React from 'react'

const Label = ({ value }) => {
    return (
        <div className='py-1'>
            <label className='myLabel'>{value}</label>
        </div>
    )
}

export default Label
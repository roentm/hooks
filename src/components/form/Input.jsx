import React from 'react'
import "./input.css"

const Input = ({ ph, objKey, updateForm }) => {
    
    const setFormValue = (e) => {
        updateForm(e.target.value,objKey)
    }

    return (
        <div>
            <input onChange={setFormValue} placeholder={ph} className='myInput' />
        </div>
    )
}

export default Input
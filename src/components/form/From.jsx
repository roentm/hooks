import { forEach } from 'lodash'
import React, { useEffect, useState } from 'react'
import "./form.css"
import Input from './Input'
import Label from './Label'
const From = () => {
    const [from, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "" })
    const [errors, setErrors] = useState({})
    const [runValid, setRunValid] = useState(false);
    const updateForm = (value, objectKey) => {
        setForm({ ...from, [objectKey]: value })
    }

    useEffect(() => {
        if (runValid) {
            validate();
        }
    }, [from])

    const validate = () => {
        setRunValid(true);
        let errors = {};
        if (!from.firstName.length) errors.firstName = "first name is required";
        else if (from.firstName.length < 3) errors.firstName = "first name must be at least 3 characters";
        if (!from.lastName.length) errors.lastName = "last name is required";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(from.email)) errors.email = "invalid email"



        setErrors(errors);

    }
    return (
        <div className='container'>
            <form className='form'>
                <Label value="first name" />
                <Input objKey="firstName" updateForm={updateForm} ph={"please enter a first name"} />
                {errors.firstName && <small className='error'> {errors.firstName}</small>}
                <Label value="last name" />
                <Input objKey="lastName" updateForm={updateForm} ph="please enter a last name" />
                {errors.lastName && <small className='error'> {errors.lastName}</small>}
                <Label value="email" />
                <Input objKey="email" updateForm={updateForm} ph="please enter a email" />
                {errors.email && <small className='error'> {errors.email}</small>}
                <Label value="phone" />
                <Input objKey="phone" updateForm={updateForm} ph="please enter a phone number" />
                <button onClick={(e) => {
                    e.preventDefault();
                    validate();
                    console.log(errors)
                    if (errors == {})
                        console.log(from)

                }} style={{ fontSize: '17px' }} className='btn btn-info badge p-2 mt-3'>Submit</button>
            </form>
        </div>
    )
}

export default From
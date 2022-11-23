import React, { useEffect } from 'react'
import { useForm } from "react-hook-form";
const FormHook = () => {
    const { register, getValues, handleSubmit, formState: { errors } } = useForm();
    const onSub = (data) => {
        delete data.confirmPassword
        console.log(data);
    }
    const ageCheck=(value) => {
        const selected = new Date(value).getFullYear();
        const now = new Date().getFullYear();
        return now - selected >= 5;
    }

    console.log(errors)
    return (
        <div className='d-flex flex-column align-items-center '>
            <h1 className='display-3 text-center text-light'>Login</h1>

            <form onSubmit={handleSubmit(onSub)} className='col-7 col-md-5 col-lg-3 mt-5 form-dark bg-dark text-light'>
                <div>
                    <input {...register('userName', { required: { value: true, message: 'first name is requried' }, minLength: { value: 3, message: "first name must be at least 3 characters" } })} className='myInput mt-4' placeholder='Enter your desired Username...'/>
                    {errors.userName && errors.userName.type == 'required' && <small className='error'>{errors?.userName?.message}</small>}
                    {errors.userName && errors.userName.type == 'minLength' && <small className='error'>{errors?.userName?.message}</small>}
                </div>
                <div>
                    <input {...register('characterName', { required: true, minLength: 2 })} className='myInput mt-3' placeholder="Enter your character's name..."/>
                    {errors.characterName && <small className='error'>invalid last name...</small>}

                </div>
                <div>
                    <input {...register('email', { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })} className='myInput mt-3' placeholder="Enter your email..."/>
                    {errors.email && <small className='error'>Please enter a valid email!</small>}
                </div>
                <div>
                    <input type={'password'}  {...register('password', { required: { value: true, message: 'password is requried' }, minLength: { value: 6, message: "invalid password" } })} className='myInput mt-3' placeholder="Choose a password"/>
                    {errors.password && errors.password.type == 'required' && <small className='error'>{errors?.password?.message}</small>}
                    {errors.password && errors.password.type == 'minLength' && <small className='error'>{errors?.password?.message}</small>}
                </div>
                <div>
                    <input type={'password'} {...register('confirmPassword', { required: { value: true, message: 'Confirm password required...' }, validate: { validate:( (value) => value === getValues('password')) } })} className='myInput mt-3' placeholder="Confirm your password"/>
                    {errors.confirmPassword && errors.confirmPassword.type == 'required' && <small className='error'>{errors?.confirmPassword?.message}</small>}
                    {errors.confirmPassword && errors.confirmPassword.type == 'validate' && <small className='error'>The passwords don't match!</small>}
                </div>
                <div>
                    <label className='myLabel'>Date of Birth:</label>
                    <input type={'date'} {...register('dob', {required: {value: true, message: 'Your date of birth is required!'}, validate: ageCheck})} className='myInput'/>
                    {errors.dob && errors.dob.type=='required' && <small className='error'>{errors?.dob?.message}</small>}
                    {errors.dob && errors.dob.type== 'validate' && <small className='error'>You must be 18 years old or older to sign up!</small>}
                </div>
                <button className='btn btn-info badge p-2 mt-3'>Submit</button>
            </form>

        </div>
    )
}

export default FormHook
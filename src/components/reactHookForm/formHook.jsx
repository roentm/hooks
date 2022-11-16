import React, { useEffect } from 'react'
import { useForm } from "react-hook-form";

const FormHook = () => {
    const { register, getValues, handleSubmit, formState: { errors } } = useForm();
    const onSub = (data) => {
        console.log(data);
    }

    console.log(errors)
    return (
        <div className='d-flex flex-column align-items-center '>

            <form onSubmit={handleSubmit(onSub)} className='col-7 col-md-5 col-lg-3 mt-5'>
                <div>
                    <label className='myLabel'>First Name:</label>
                    <input {...register('firstName', { required: { value: true, message: 'first name is requried' }, minLength: { value: 3, message: "first name must be at least 3 characters" } })} className='myInput' />
                    {errors.firstName && errors.firstName.type == 'required' && <small className='error'>{errors?.firstName?.message}</small>}
                    {errors.firstName && errors.firstName.type == 'minLength' && <small className='error'>{errors?.firstName?.message}</small>}
                </div>
                <div>
                    <label className='myLabel'>Last Name:</label>
                    <input {...register('lastName', { required: true, minLength: 2 })} className='myInput' />
                    {errors.lastName && <small className='error'>invalid last name...</small>}

                </div>
                <div>
                    <label className='myLabel'>Email:</label>
                    <input {...register('email', { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })} className='myInput' />
                    {errors.email && <small className='error'>invalid email...</small>}
                </div>
                <div>
                    <label className='myLabel'>Password:</label>
                    <input type={'password'}  {...register('password', { required: { value: true, message: 'password is requried' }, minLength: { value: 6, message: "invalid password" } })} className='myInput' />
                    {errors.password && errors.password.type == 'required' && <small className='error'>{errors?.password?.message}</small>}
                    {errors.password && errors.password.type == 'minLength' && <small className='error'>{errors?.password?.message}</small>}
                </div>
                <div>
                    <label className='myLabel'>Confirm Password:</label>
                    <input {...register('confirmPassword', { required:true,validate:(value)=>{return value==getValues('password')} })} className='myInput' />
                    {errors.confirmPassword && errors.confirmPassword.type == 'required' && <small className='error'>{errors?.confirmPassword?.message}</small>}
                </div>
                <div>
                    <label className='myLabel'>Phone:</label>
                    <input {...register('phone')} className='myInput' />
                </div>
                <button className='btn btn-info badge p-2 mt-3'>Submit</button>
            </form>

        </div>
    )
}

export default FormHook
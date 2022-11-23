import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';



const AppForm = () => {
    const schema = yup.object().shape({
        firstName: yup.string().required(),
        characterName: yup.string().required(),
        email: yup.string().email().required(),
        birthDate: yup.date().required(),
        password: yup.string().min(6).max(15).required(),
        cPassword: yup.string().oneOf([yup.ref("password"), null]).required()
    })
    const { register, handleSubmit, errors } = useForm({ resolver: yupResolver(schema) });

    const submitForm = (data) => {
        console.log(data);
    };

    return (
        <div className="form">
            <div className="title">Sign Up</div>
            <div className="inputs">
                <form onSubmit={handleSubmit(submitForm)}>
                    <input type="text" name="firstName" placeholder="Enter your desired firstName..." ref={register}/>
                    <small className='text-warning'>{errors.firstName.message}</small>
                    <input type="text" name="characterName" placeholder="Enter your Character's name..." ref={register}/>
                    <small className='text-warning' >{errors.characterName.message}</small>
                    <input type="text" name="email" placeholder="Enter your email..." ref={register}/>
                    <small className='text-warning'>{errors.email.message}</small>
                    <input type="date" name="birthDate" placeholder="01/01/1900" ref={register}/>
                    <small className='text-warning'>{errors.date.message}</small>
                    <input type="text" name="password" placeholder="Enter your password..." ref={register}/>
                    <small className='text-warning'>{errors.password.message}</small>
                    <input type="text" name="cPassword" placeholder="Confirm your password..." ref={register}/>
                    <small className='text-warning'>{errors.cPassword && "The passwords don't match!"}</small>
                    <input type="submit" id='submit' />
                </form>


            </div>
        </div>
    )
}

export default AppForm
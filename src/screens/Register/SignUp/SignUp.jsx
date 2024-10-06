import React, { useEffect, useState } from 'react'
import MOVIES from './../../../Context/MoviesApi';
import './SignUp.css'
import { NavLink } from 'react-router-dom';

function SignUp() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setCPassword] = useState('');
    const [error, setError] = useState('');

    const nameInputHandler = (e) => {
        setName(e.target.value)
    }
    const emailInputHandler = (e) => {
        setEmail(e.target.value)
    }
    const passInputHandler = (e) => {
        setPassword(e.target.value)
    }
    const cPassInputHandler = (e) => {
        setCPassword(e.target.value)
    }

    const FormSubmitEventHAndler = async (event) => {
        event.preventDefault();

        let user = {
            name,
            email,
            password,
            confirmPassword
        }

        try {
            if (password === confirmPassword) {
                const responce = await fetch(`${MOVIES}/auth/signup`,
                    {
                        method: 'POST',
                        headers: new Headers({
                            "Content-Type": "application/json",
                        }),
                        body: JSON.stringify(user)
                    }
                )
                const data = await responce.json()
                if (data.status === 'success') {
                    document.cookie = `Bearer ${data.token}`;
                    console.log(data)
                    location.href = '/cineflix'
                }
                setError('')

            } else {
                setError('Passwords do not match')
            }
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <section className="register">
            <form onSubmit={FormSubmitEventHAndler}>
                <legend>SignUp</legend>
                <label>Name:</label>
                <input type="text" name="name" id='name' placeholder='Full Name' onChange={nameInputHandler} required />
                <br />
                <label>Email:</label>
                <input type="email" name="email" id='email' placeholder='Email' onChange={emailInputHandler} required />
                <br />
                <label>Password:</label>
                <input type="password" name="password" id='password' placeholder='Password' onChange={passInputHandler} required />
                <br />
                <label>Confirm Password:</label>
                <input type="password" name="confirm_password" id='confirmPassword' placeholder='Confirm Password' onChange={cPassInputHandler} required />
                <br />
                <div className="formBtn">
                    <button type="submit">SignUp</button>
                </div>
                <div className="SignIn">
                    <span>Already have an Account ?</span><NavLink to='/' >Sign In</NavLink>
                </div>
            </form>
            <h3>{error}</h3>
        </section>
    )
}

export default SignUp
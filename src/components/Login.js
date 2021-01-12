import React, { useState } from 'react'
import '../styles/Login.css'
import { Link, useHistory } from 'react-router-dom'
import { auth } from '../firebase'

const Login = () => {

    const history = useHistory()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const login = (event) => {
        event.preventDefault() //prevents page from reloading(refreshing)
        //register logic here
        auth.signInWithEmailAndPassword(email, password) //returns a promise objects
        .then((auth) => {
            //logged in successfully, redirect to home page
            history.push('/')
        })
        .catch((e) => {
            alert(e.message)
        })
    }

    const register = (event) => {
        event.preventDefault() //prevents page from refreshing
        //register logic here
        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            //created a user and logged in, redirect to home page
            history.push('/')
        })
        .catch ((e) => {
            alert(e.message)
        })
    }

    return (
        <div className = 'login'>
            <Link to = '/'>
                <div className = 'login__image'>
                    <img 
                        src = 'https://i.pinimg.com/originals/27/6f/27/276f273d11f8b9dbc0a9c55bb38ea8c6.gif'
                        alt = ''
                    />
                </div>
            </Link>

            <div className = 'login__text'>
                Login to continue.
            </div>

            <div className = 'login__container'>
                <form className = 'login__input'>
                    <input value = {email} onChange = {event => setEmail(event.target.value)} type = 'text' placeholder = 'Email'/> <br></br>
                    <input value = {password} onChange = {event => setPassword(event.target.value)} type = 'password' placeholder = 'Password' />
                </form>

                <button onClick = {login} className = 'login__button'>LOG IN</button>
                <button onClick = {register} className = 'register__button'>REGISTER</button>
            </div>
        </div>
    )
}

export default Login
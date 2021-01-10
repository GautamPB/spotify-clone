import React from 'react'
import '../styles/Login.css'

const Login = () => {
    return (
        <div className = 'login'>
            <div className = 'login__image'>
                <img 
                    src = 'https://i.pinimg.com/originals/27/6f/27/276f273d11f8b9dbc0a9c55bb38ea8c6.gif'
                    alt = ''
                />
            </div>

            <div className = 'login__text'>
                Millions of songs,<br></br>
                free on Spotify
            </div>

            <div className = 'login__container'>
                <button className = 'signUp__button'>SIGN UP FOR FREE</button>
                <br></br>
                <button className = 'login__button'>LOG IN</button>
            </div>
        </div>
    )
}

export default Login
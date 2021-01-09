import React from 'react'
import '../styles/Login.css'

const Login = () => {
    return (
        <div className = 'login'>
            <div className = 'login__image'>
                <img 
                    src = 'https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png'
                    alt = ''
                />
            </div>
            <div className = 'login__stuff'>
                <h1>Millions of songs,</h1>
                <h1>free on Spotify</h1>
            </div>
        </div>
    )
}

export default Login
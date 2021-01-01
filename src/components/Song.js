import React from 'react'
import '../styles/Song.css'

const Song = () => {
    return (
        <div className = 'song'>
            <div className = 'song__image'>
                <img
                    src = 'https://pbs.twimg.com/media/Dr-L6ixWoAAU9k0.jpg'
                    alt = ''
                />
            </div>
            <h3>Queen Greatest Hits</h3>
        </div>
    )
}

export default Song
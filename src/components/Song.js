import React from 'react'
import '../styles/Song.css'

const Song = ({song_image, song_title}) => {
    return (
        <div className = 'song'>
            <div className = 'song__image'>
                <img
                    src = {song_image}
                    alt = ''
                />
            </div>
            <h3>{song_title}</h3>
        </div>
    )
}

export default Song
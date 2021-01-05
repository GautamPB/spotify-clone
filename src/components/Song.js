import React from 'react'
import '../styles/Song.css'

const Song = ({song_image, song_title, key, url, artist}) => {
    return (
        <div className = 'song'>
            <div className = 'song__image'>
                <img
                    src = { song_image }
                    alt = ''
                />
            </div>
            <h6>{ artist }</h6>
            <h3>{ song_title }</h3>
            <audio src = { url } controls></audio>
        </div>
    )
}

export default Song
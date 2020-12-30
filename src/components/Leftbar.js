import React from 'react'
import '../styles/Leftbar.css'

const Leftbar = () => {
    return (
        <div className='leftBar'>
            <div className='leftBar__mainNav'>
                <h5>Home</h5>
                <h5>Browse</h5>
                <h5>Radio</h5>
            </div>

            <div className='leftBar__library'>
                <p>YOUR LIBRARY</p>
                <h5>Made For You</h5>
                <h5>Recently Played</h5>
                <h5>Liked Songs</h5>
                <h5>Albums</h5>
                <h5>Artists</h5>
                <h5>Podcasts</h5>
            </div>

            <div className='leftBar__playlists'>
                <p>PLAYLISTS</p>
                <h5>Your Top Songs</h5>
                <h5>Metal Ballads</h5>
                <h5>Thumbs Up</h5>
                <h5>Liked from Radio</h5>
            </div>
        </div>
    )
}

export default Leftbar

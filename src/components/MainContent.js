import React, { useEffect, useState } from 'react'
import '../styles/MainContent.css'
import Song from './Song'

const MainContent = () => {

    const [songs, setSongs] = useState([])

    async function getData() {
            fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=queen", {
	        "method": "GET",
	        "headers": {
		        "x-rapidapi-key": "b545cc0c9fmsh99eb19dad714458p1d851bjsn1078d70b3e88",
		        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
            }
            })
            .then(response => {
                return response.json()
            })
            .then((songs) => {
                setSongs(songs.data)
                console.log(songs.data)
            })
            .catch(err => {
                console.error(err);
            });
        }

    useEffect(() => {
        getData()
    }, []) //useState is called only once before the songs are set.

    return (
        <div className='mainContent'>
            <div className='mainContent__top'>
                <input type='text' name='search' className='mainContent__search' placeholder='Search' />
                <div className='mainContent__topRight'>
                    <button type='button'>UPGRADE</button>
                    <div className='mainContent__userInfo'>
                        <img
                            className='mainContent__profilePic'
                            src='https://www.computerhope.com/jargon/g/guest-user.jpg'
                            alt=''
                        />
                        <p>Username</p>
                    </div>
                </div>
            </div>
            <h1>Home</h1>
            <div className = 'mainContent__songRow'>
                {songs.map((song) => {
                    return (
                        <Song
                        key = {song.id}
                        song_image = {song.album.cover_xl}
                        song_title = {song.album.title}
                        artist = {song.artist.name}
                        url = {song.preview}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default MainContent
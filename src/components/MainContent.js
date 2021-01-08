import React, { useEffect, useState } from 'react'
// import Navbar from './Navbar'
import '../styles/MainContent.css'
import Song from './Song'

const MainContent = ({search, setSearch}) => {

    const [songs, setSongs] = useState([])

    async function getData() {
            fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=" + search, {
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
                // console.log(songs.data)
            })
            .catch(err => {
                console.error(err);
            });
        }

    useEffect(() => {
        let tempSearch
        if (search === '') {
            search = 'queen'
        }
        getData()
    }, [search]) //useState is called only once before the songs are set.

    return (
        <div className='mainContent'>
            <input type = 'text' name = 'search' className = 'mainContent__search'
            value = {search}
            onChange = {setSearch}
            />
            {/* <Navbar className = 'mainContent__navbar' /> */}
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
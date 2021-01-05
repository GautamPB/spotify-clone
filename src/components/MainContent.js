import React, { useEffect, useState } from 'react'
import '../styles/MainContent.css'

const MainContent = () => {

    const [songs, setSongs] = useState([])

    async function getData() {
        await fetch("../api/getSongs")
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            setSongs(data.data)
            console.log(data.data)
        })
    }

    useEffect(() => {
        getData()
    }, [])

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
        </div>
    )
}

export default MainContent
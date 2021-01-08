import React, { useState } from 'react'
import MainContent from './MainContent'
import '../styles/Navbar.css'

const Navbar = () => {

    const [search, setSearch] = useState('queen')

    function changeSearch(e){
        console.log(e)
        setSearch(e.target.value)
    }

    return (
        <div className = 'navbar'>
            <div className='navbar__top'>
                <input type='text' name='search' id = 'searchValue' className='navbar__search' value = {search}
                onChange = {changeSearch}
                />
                <div className='navbar__topRight'>
                    <button type='button'>UPGRADE</button>
                    <div className='navbar__userInfo'>
                        <img
                            className='navbar__profilePic'
                            src='https://www.computerhope.com/jargon/g/guest-user.jpg'
                            alt=''
                        />
                        <p>Username</p>
                    </div>
                </div>
            </div>
            <h1 className = 'navbar__header'>Home</h1>
            <MainContent 
            search = {search}
            setSearch = {changeSearch}
            />
        </div>
    )
}

export default Navbar
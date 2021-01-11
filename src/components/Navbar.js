import React, { useState } from 'react'
import MainContent from './MainContent'
import '../styles/Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [search, setSearch] = useState('recommended')

    function changeSearch(e){
        setSearch(e.target.value)
    }
 
    return (
        <div className = 'navbar'>
            <div className = 'navbar__content'>
                <div className='navbar__top'>
                    <input type='text' name='search' id = 'searchValue' className='navbar__search' value = {search}
                    onChange = {changeSearch}
                    placeholder = 'Search'
                    />
                    <div className='navbar__topRight'>
                        <button type='button'>UPGRADE</button>
                        <Link to = '/login'>
                            <div className='navbar__userInfo'>
                                <img
                                    className='navbar__profilePic'
                                    src='https://www.computerhope.com/jargon/g/guest-user.jpg'
                                    alt=''
                                />
                                <p>Login</p>
                            </div>
                        </Link>
                    </div>
                </div>
                <h1 className = 'navbar__header'>Home</h1>
            </div>
            <MainContent 
            search = {search}
            setSearch = {changeSearch}
            className = 'mainContent'
            />
        </div>
    )
}

export default Navbar
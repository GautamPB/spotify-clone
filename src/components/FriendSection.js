import React from 'react'
import '../styles/FriendSection.css'

const FriendSection = () => {
    return (
        <div className='friendSection'>
            <h5>Friend Activity</h5>
            <div className = 'friendSection__info'>
                <p>Connect with Facebook to see what your friends are playing.</p>
                <div className = 'friendSection__facebook'>
                    <button type = 'button' className = 'facebook__button'>CONNECT WITH FACEBOOK</button>
                </div>
                <p>We'll never post anything without your permission. Show and hide Friend Activity from Settings.</p>
            </div>
        </div>
    )
}

export default FriendSection
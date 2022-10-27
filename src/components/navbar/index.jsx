import React from 'react'
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import './index.css'

const NavBar = ({ setState, state }) => {

    const navigate = useNavigate()

    const localStorageData = JSON.parse(localStorage.getItem("profileData"));

    return (
        <div className='navbar-container'>
            <nav className='navbar'>
                <div className='navbar-user-section'>
                    <div>
                        <img src={localStorageData.image} alt="user" onClick={() => navigate('/profile')} />
                    </div>
                    <div className='nick-container'>
                        <h2>{localStorageData.nick}</h2>
                    </div>
                </div>
                <div className='navbar-buttons'>
                    <Link className='home-button-container' to={'/home'}>
                        Home
                    </Link>
                    <Link className='log-out-button-container' to={'/registration'} onClick={() => {
                        localStorage.clear()
                        setState(!state)
                    }}>
                        Log out
                    </Link>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
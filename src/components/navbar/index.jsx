import React from 'react'
import { useNavigate } from 'react-router';
import './index.css'

const NavBar = () => {

    const navigate = useNavigate()
    const localStorageData = JSON.parse(localStorage.getItem("profileData"));

    return (
        <div className='navbar-container'>
            <nav className='navbar'>
                <div className='navbar-user-section'>
                    <div>
                        <img src={localStorageData.image} alt="user" />
                    </div>
                    <div className='nick-container'>
                        <h2>{localStorageData.nick}</h2>
                    </div>
                </div>
                <div className='navbar-buttons'>
                    <div className='home-button-container'>
                        Home
                    </div>
                    <div className='log-out-button-container' onClick={() => {
                            localStorage.clear()
                            navigate('/registration')
                        }}>
                        Log out
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
import React from 'react'
import { useEffect } from 'react'
import NavBar from '../navbar'
import './index.css'


const Profile = ({ setState, state }) => {

  useEffect(() => {
    setState(true)
  }, [state, setState])

  const localStorageData = JSON.parse(localStorage.getItem("profileData"));

  return (
    <div>
      <NavBar state={state} setState={setState} />
      <div className='profile-body'>
        <section className='main-info-section'>
          <div className='circle-photo-container'>
            <img src={localStorageData.image} alt='user' />
          </div>
          <div className='main-info-container'>
            <h1>{localStorageData.firstName} {localStorageData.lastName}</h1>
            <h2>{localStorageData.nick}</h2>
          </div>
        </section>
        <section className='details-section'>
          <div className='details-container'>
            <div className='info-keys'>
              <h1>Information</h1>
              <h3>Gender</h3>
              <h3>Date of birth</h3>
            </div>
            <div className='details-data'>
              <h3>{localStorageData.gender}</h3>
              <h3>{localStorageData.dateOfBirth}</h3>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Profile
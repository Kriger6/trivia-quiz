import React from 'react'
// import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router';

const Registration = () => {

  // useEffect(() => {
  //   if () {
      
  //   }
  // }, [])

  const [localData, setLocalData] = useState({
    firstName: "",
    lastName: "",
    nick: "",
    dateOfBirth: "",
    gender: "",
    image: ""
  })

  const handleChange = (e) => {
    setLocalData({
      ...localData, [e.target.name]: e.target.value
    })
  }

  let navigate = useNavigate()

  const signUp = (e) => {
    if (Object.values(localData).includes("")) {
      return
    } else {
      localStorage.setItem("profileData", JSON.stringify(localData))
      navigate("/home")
    }

  }

  return (
    <div>
      <div className='section-container'>
        <div className='left-side-container'>
          <h1>trivia</h1>
          <div className='logo-photo-container'>
            <img src={require('../../assets/quiz.png')} alt='quiz logo' className='img' />
          </div>
        </div>
        <div className='right-side-container'>
          <div className='reg-card-container'>
            <div className='reg-card-header'>
              <h1>
                Sign up
              </h1>
              <p>Fast and simple</p>
            </div>
            <div className='reg-card'>
              <form>
                <input type='text' placeholder='Name' name='firstName' onChange={handleChange}></input>
                <input type='text' placeholder='Last Name' name='lastName' onChange={handleChange}></input>
                <input type='text' placeholder='Nick' name='nick' onChange={handleChange}></input>
                <label htmlFor='date'>Date of Birth</label>
                <input id='date' type='date' name='dateOfBirth' onChange={handleChange}></input>
                <div className='radio-input'>
                  <label htmlFor='male'>
                  Male
                    <input id='male' name='gender' value='male' type='radio' onChange={handleChange} />
                  </label>
                </div>
                <div className='radio-input'>
                  <label htmlFor='female'>Female</label>
                  <input id='female' name='gender' value='female' type='radio' onChange={handleChange}></input>
                </div>
                <div className='radio-input'>
                  <label htmlFor='Other'>Other</label>
                  <input id='other' name='gender' value='other' type='radio' onChange={handleChange}></input>
                </div>
                <input type='url' alt='input image button' name='image' onChange={handleChange}></input>
                <div className='button-container'>
                <button type='button' onClick={signUp}>Sign up</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Registration
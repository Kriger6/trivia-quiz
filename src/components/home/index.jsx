import React from 'react'
import NavBar from '../navbar'
import './index.css'

const Home = () => {

  const localStorageData = localStorage.getItem("profileData")

  return (
    <div>
      <NavBar />
      <div className='home-body'>
        <div className='body-container'>
          <div className='header-text'>
            <h1>Select topic and click <span style={{color: "white"}}>play</span> button</h1>
          </div>
          <div className='topic-card'>
            <div className='topic-button-container'>
              <div className='topic-button'>
                Entertainment: Video Games
              </div>
              <div className='topic-button'>
                Science: Computers
              </div>
              <div className='topic-button'>
                General Knowledge
              </div>
              <div className='topic-button'>
                History
              </div>
            </div>
            <button className='play-button'>Play</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
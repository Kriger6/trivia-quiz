import React from 'react'
import NavBar from '../navbar'
import './index.css'

const Home = () => {
  return (
    <div>
      <NavBar />
      <div className='home-body'>
        <div className='body-container'>
          <div className='header-text'>
            <h1>Select topic and click <span style={{color: "white"}}>play</span> button</h1>
          </div>
          <div className='topic-card'>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
import React from 'react'

const Registration = () => {
  return (
    <div>
      <div className='section-container'>
        <div className='left-side-container'>
          <h1>trivia</h1>
          <div className='photo-container'>
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
                <input type='text' placeholder='Name'></input>
                <input type='text' placeholder='Last Name'></input>
                <input type='text' placeholder='Nick'></input>
                <input type='text' placeholder=''></input>
                <input type='radio'></input>
                <input type='radio'></input>
                <input type='radio'></input>
                <button>Sign up</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Registration
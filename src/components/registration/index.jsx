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
                <label htmlFor='date'>Date of Birth</label>
                <input id='date' type='date'></input>
                <div className='radio-input'>
                  <label htmlFor='male'>
                  Male
                  <input id='male' name='male' value='male' type='radio' />
                  </label>
                </div>
                <div className='radio-input'>
                  <label htmlFor='female'>Female</label>
                  <input id='female' name='female' value='female' type='radio'></input>
                </div>
                <div className='radio-input'>
                  <label htmlFor='Other'>Other</label>
                  <input id='other' name='other' value='other' type='radio'></input>
                </div>
                <input type='image' alt='input image button'></input>
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
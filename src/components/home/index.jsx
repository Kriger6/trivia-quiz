import React, { useEffect } from 'react'
import { useState } from 'react'
import NavBar from '../navbar'
import './index.css'
import axios from 'axios'
import { useRef } from 'react'

const Home = ({ setState, state }) => {

  useEffect(() => {
    setState(true)
  }, [state, setState])

  const [buttonVisibility, setButtonVisibility] = useState(true)
  const [moveButtonGroup, setMoveButtonGroup] = useState(false)
  const [questionContainer, setQuestionContainer] = useState(false)
  const [selectedTopic, setSelectedTopic] = useState()

  const topicList = useRef()
  


  return (
    <div>
      <NavBar state={state} setState={setState} />
      <div className='home-body'>
        <div className='body-container'>
          <div className='header-text'>
            <h1>Select topic and click <span style={{ color: "white" }}>play</span> button</h1>
          </div>
          <div className='topic-card'>
            {questionContainer && <div className={questionContainer ? 'question-container' : ''}></div>}
            <div ref={topicList} className={moveButtonGroup === true ? 'topic-button-container topic-button-container-animation' : 'topic-button-container'}>
              <div className='topic-button' onClick={(e) => console.log(topicList.current.children)}>
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
            <button className={buttonVisibility === true ? 'play-button' : 'play-button play-button-animation'} onClick={() => {
              if (!selectedTopic) {
                return
              }
              setButtonVisibility(false)
              setTimeout(() => {
                setMoveButtonGroup(true)
                setQuestionContainer(true)
              }, 1500)
            }}>Play</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
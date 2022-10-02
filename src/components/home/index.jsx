import React, { useEffect } from 'react'
import { useState } from 'react'
import NavBar from '../navbar'
import './index.css'
import axios from 'axios'
import { useRef } from 'react'
import { useCallback } from 'react'

const Home = ({ setState, state }) => {

  useEffect(() => {
    setState(true)
  }, [state, setState])
  
  
  const [buttonVisibility, setButtonVisibility] = useState(true)
  const [moveButtonGroup, setMoveButtonGroup] = useState(false)
  const [questionContainer, setQuestionContainer] = useState(false)
  const [topics, setTopics] = useState(['Entertainment: Video Games', 'Science: Computers', 'General Knowledge', 'History'])
  const [selectedTopic, setSelectedTopic] = useState()
  const [topicsVanish, setTopicsVanish] = useState(false)
  
  const fetchQuestions = useCallback(() => {
    axios.get(`https://opentdb.com/api.php?amount=20&category=${selectedTopic}&difficulty=medium&type=multiple`)
    .then((response) => console.log(response))
  }, [selectedTopic])


  useEffect(() => {
    fetchQuestions()
  }, [buttonVisibility, fetchQuestions])


  const topicList = useRef()
  
  const toggleButton = e => {
    setSelectedTopic(e)
  }

  const clearSelectedTopic = () => {
      switch (selectedTopic) {
        case 1:
          setSelectedTopic(15)
          break;
        case 2:
          setSelectedTopic(prevState => 18)
          break;
        case 3:
          setSelectedTopic(prevState => 9)
          break;
        case 4:
          setSelectedTopic(prevState => 23)
          break;
        default:
          break;
      }
  }

  const deleteTopics = () => {
    setTopics(null)
  }


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
              <div className={
                `topic-button ${selectedTopic === 1 ? 'selected' : ''} ${topicsVanish === true ? 'topics-fade-away' : ''}`} onClick={() => toggleButton(1)}>
                {topics && topics[0]}
              </div>
              <div className={
                `topic-button ${selectedTopic === 2 ? 'selected' : ''} ${topicsVanish === true ? 'topics-fade-away' : ''}`
              } onClick={() => toggleButton(2)}>
                {topics && topics[1]}
              </div>
              <div className={
                `topic-button ${selectedTopic === 3 ? 'selected' : ''} ${topicsVanish === true ? 'topics-fade-away' : ''}`
              } onClick={() => toggleButton(3)}>
                {topics && topics[2]}
              </div>
              <div className={
                `topic-button ${selectedTopic === 4 ? 'selected' : ''} ${topicsVanish === true ? 'topics-fade-away' : ''}`
              } onClick={() => toggleButton(4)}>
                {topics && topics[3]}
              </div>
            </div>
            <button className={buttonVisibility === true ? 'play-button' : 'play-button play-button-animation'} onClick={() => {
              if (!selectedTopic) {
                return
              }
              setButtonVisibility(false)
              clearSelectedTopic()
              setTopicsVanish(true)
              fetchQuestions()
              setTimeout(() => {
                deleteTopics()
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
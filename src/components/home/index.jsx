import React, { useEffect } from 'react'
import { useState } from 'react'
import NavBar from '../navbar'
import './index.css'
import axios from 'axios'
import { useRef } from 'react'
import { useCallback } from 'react'
import { decode } from 'html-entities'

const Home = ({ setState, state }) => {

  useEffect(() => {
    setState(true)
  }, [state, setState])


  const topicList = useRef()

  const [buttonVisibility, setButtonVisibility] = useState(true)
  const [moveButtonGroup, setMoveButtonGroup] = useState(false)
  const [questionContainer, setQuestionContainer] = useState(false)
  const [topics, setTopics] = useState(['Entertainment: Video Games', 'Science: Computers', 'General Knowledge', 'History'])
  const [selectedTopic, setSelectedTopic] = useState()
  const [selectedAnswer, setSelectedAnswer] = useState()
  const [topicsVanish, setTopicsVanish] = useState(false)
  const [fetchResults, setFetchResults] = useState()
  const [level, setLevel] = useState(1)
  const [shuffleAnswer, setShuffleAnswer] = useState()
  const [renderAnswer, setRenderAnswer] = useState(false)
  const [points, setPoints] = useState(0)
  const [startTimer, setStartTimer] = useState(false)
  const [timer, setTimer] = useState(0)
  const [buttonClickable, setButtonClickable] = useState(true)

  useEffect(() => {
    if (startTimer === true) {
      const timerID = setInterval(() => setTimer(prevState => prevState + 1), 1000)

      return () => {
        clearInterval(timerID)
      }
    }

  }, [startTimer, timer])

  const fetchQuestions = useCallback(() => {
    axios.get(`https://opentdb.com/api.php?amount=20&category=${selectedTopic}&difficulty=medium&type=multiple`)
      .then((response) => {
        if (response.data.results.length !== 0) {
          setFetchResults(response.data.results)
        }
      })
  }, [selectedTopic])


  useEffect(() => {
    if (buttonVisibility === false && !fetchResults) {
      fetchQuestions()
    }
  }, [buttonVisibility, fetchResults, fetchQuestions])

  
  

  const toggleButton = e => {
    if (buttonClickable === false) {
      return
    }
    setSelectedTopic(e)
    setSelectedAnswer(e)
  }

  const clearSelectedTopic = () => {
    switch (selectedTopic) {
      case 1:
        setSelectedTopic(15)
        break;
        case 2:
        setSelectedTopic(18)
        break;
      case 3:
        setSelectedTopic(9)
        break;
        case 4:
        setSelectedTopic(23)
        break;
      default:
        break;
    }
  }

  const deleteTopics = () => {
    setTopics(null)
  }
  
  const shuffleArray = useCallback((array, phase) => {
    if (buttonClickable === false) {
      return
    }
    let combinedArray = [...array[phase - 1].incorrect_answers]
    combinedArray.push(array[phase - 1].correct_answer)
    
    for (let i = combinedArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [combinedArray[i], combinedArray[j]] = [combinedArray[j], combinedArray[i]];
    }
    
    setShuffleAnswer(combinedArray)
  }, [buttonClickable])
  
  useEffect(() => {
    if (fetchResults === undefined) {
      return
    }

    let timer1 = setTimeout(() => {
      shuffleArray(fetchResults, level)
      deleteTopics()
      setTopicsVanish(false)
      setRenderAnswer(true)
    }, 100)

    return () => clearTimeout(timer1)
  }, [fetchResults, buttonVisibility, level, shuffleArray])

  const answerSubmit = useCallback(() => {
    if (!shuffleAnswer) {
      return
    }
    if (shuffleAnswer[selectedAnswer - 1] === fetchResults[level - 1].correct_answer) {
      setPoints(prevState => prevState + 1)
    } else {
    }
    setLevel(prevState => prevState + 1)
  }, [fetchResults, level, selectedAnswer, shuffleAnswer])

  useEffect(() => {
    if (!fetchResults || selectedTopic === null) {
      return
    } else {
      answerSubmit()
      setSelectedTopic(null)
    }
  }, [selectedTopic, answerSubmit, fetchResults])

  useEffect(() => {
    if (level > 10) {
      setButtonClickable(false)
      setStartTimer(false)
      if (points >= 5) {
      }
    }
  }, [points, level])


  return (
    <div>
      <NavBar state={state} setState={setState} />
      <div className='home-body'>
        <div className='body-container'>
          <div className='header-text'>
            <h1>Select topic and click <span style={{ color: "white" }}>play</span> button</h1>
          </div>
          <div className='topic-card'>
            {questionContainer && <div className={questionContainer ? 'question-container' : ''}>
              {fetchResults !== undefined ? decode(fetchResults[level - 1].question) : ''}
            </div>}
            <div ref={topicList} className={moveButtonGroup === true ? 'topic-button-container topic-button-container-animation' : 'topic-button-container'}>
              <div className={
                `topic-button 
                ${selectedTopic === 1 ? 'selected' : ''} 
                ${topicsVanish === true ? 'topics-fade-away' : ''}
                ${renderAnswer === true ? 'render-answer' : ''}
                `} onClick={() => toggleButton(1)}>
                {topics ? topics[0] : decode(shuffleAnswer[0])}
              </div>
              <div className={
                `topic-button 
                ${selectedTopic === 2 ? 'selected' : ''} 
                ${topicsVanish === true ? 'topics-fade-away' : ''}
                ${renderAnswer === true ? 'render-answer' : ''}
                `
              } onClick={() => toggleButton(2)}>
                {topics ? topics[1] : decode(shuffleAnswer[1])}
              </div>
              <div className={
                `topic-button 
                ${selectedTopic === 3 ? 'selected' : ''} 
                ${topicsVanish === true ? 'topics-fade-away' : ''}
                ${renderAnswer === true ? 'render-answer' : ''}
                `
              } onClick={() => toggleButton(3)}>
                {topics ? topics[2] : decode(shuffleAnswer[2])}
              </div>
              <div className={
                `topic-button 
                ${selectedTopic === 4 ? 'selected' : ''} 
                ${topicsVanish === true ? 'topics-fade-away' : ''}
                ${renderAnswer === true ? 'render-answer' : ''}
                `
              } onClick={() => toggleButton(4)}>
                {topics ? topics[3] : decode(shuffleAnswer[3])}
              </div>
            </div>
            <button className={buttonVisibility === true ? 'play-button' : 'play-button play-button-animation'} onClick={() => {
              if (!selectedTopic) {
                return
              }
              setStartTimer(true)
              setButtonVisibility(false)
              clearSelectedTopic()
              setTopicsVanish(true)
              fetchQuestions()
              const timer1 = setTimeout(() => {
                setMoveButtonGroup(true)
                setQuestionContainer(true)
              }, 1500)
              return () => clearTimeout(timer1)
            }}>Play</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
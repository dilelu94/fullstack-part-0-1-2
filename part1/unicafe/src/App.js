import { useState } from 'react'

const App = () => {
      const [good, setGood] = useState(0)
      const [neutral, setNeutral] = useState(0)
      const [bad, setBad] = useState(0)
      const sumFeedback = good + neutral + bad
      const averageFeedback = (good - bad) / (sumFeedback)
      const positiveFeedback = (good / sumFeedback) * 100
 
  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={ () => setGood(good + 1)} text="good" />
      <Button handleClick={ () => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={ () => setBad(bad + 1)} text="bad" />
      <h1>statistics</h1> 
      <p>good: {good}</p>
      <p>neutral: {neutral}</p>
      <p>bad: {bad}</p>
      <p>all: {sumFeedback}</p>
      <p>average: {averageFeedback}</p>
      <p>positive: {positiveFeedback} %</p>
    </div>
  )
}

const Button = (props) => (
  <button onClick={props.handleClick}> 
    {props.text}
  </button>
)

export default App
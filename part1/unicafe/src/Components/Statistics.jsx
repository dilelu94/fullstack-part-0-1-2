const Statistics = ({ good, neutral, bad }) => {
    const sumFeedback = good + neutral + bad
    const averageFeedback = (good - bad) / (sumFeedback)
    const positiveFeedback = (good / sumFeedback) * 100
    
    return (
      <div>
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

  export default Statistics
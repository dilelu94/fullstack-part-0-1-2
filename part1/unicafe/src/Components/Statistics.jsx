import StatisticLine from "./StatisticLine"

const Statistics = ({ good, neutral, bad }) => {
  const sumFeedback = good + neutral + bad
  const averageFeedback = (good - bad) / (sumFeedback)
  const positiveFeedback = (good / sumFeedback) * 100

  if (sumFeedback === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  return (
    <div>
      <h1>statistics</h1>
      <table>
        <tr>
          <td> <StatisticLine text="good" /> </td>
          <td> <StatisticLine value={good} /> </td>
        </tr>
        <tr>
          <td> <StatisticLine text="neutral" /> </td> 
          <td> <StatisticLine value={neutral} /> </td>
        </tr>
        <tr>
          <td> <StatisticLine text="bad" /> </td>
          <td> <StatisticLine value={bad} /> </td>
        </tr>
        <tr>
          <td> <StatisticLine text="all" /> </td>
          <td> <StatisticLine value={sumFeedback} /> </td>
        </tr>
        <tr>
          <td> <StatisticLine text="average" /> </td>
          <td> <StatisticLine value={averageFeedback} /> </td>
        </tr>
        <tr>
          <td> <StatisticLine text="positive" /> </td> 
          <td> <StatisticLine value={positiveFeedback} /> </td> <p>%</p>
        </tr>
      </table>
    </div>
  )
}

export default Statistics
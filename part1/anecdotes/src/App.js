import { useState } from 'react'
import Button from './Components/Button'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]

  const [selectedIndex, setSelectedIndex] = useState(0)
  const [votes, setVotes] = useState([0, 0, 0, 0, 0, 0, 0])

  const handleVoteClick = () => {
    const voteCopies = [...votes]
    voteCopies[selectedIndex] += 1
    setVotes(voteCopies)
  }

  const handleRandomClick = () => setSelectedIndex(getRandomInt(7))
  const getRandomInt = (max) => Math.floor(Math.random() * max)
  
  const highestVoteAmount = Math.max(...votes)

  const mostVotedIndex = votes.indexOf(highestVoteAmount);
  const mostVotedAnecdote = anecdotes[mostVotedIndex]
  
  return (
    <div>
      <p>{anecdotes[selectedIndex]}</p>
      <p>Has {votes[selectedIndex]}</p>

      <Button handleClick={handleVoteClick} text="Vote" />
      <Button handleClick={handleRandomClick} text="Random Anecdote" />

      <h1>Anecdote with most votes</h1>

      {highestVoteAmount ? (
        <>
          <p>{mostVotedAnecdote}</p>
          <p>Has {highestVoteAmount} votes</p>
        </>
      ) : <p>Start voting to see it!</p>}
    </div>
  )
}

export default App
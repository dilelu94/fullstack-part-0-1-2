import { useState } from 'react'

const App = () => {
  const [value, setValue] = useState(10)
  
  const setToValue = (newValue) => {
    console.log('value now', newValue)
    setValue(newValue)
  }
  
  return (
    <div>
      {value}
      <Button handleClick={ () => setToValue(1000)} text="thousand" />
      <Button handleClick={ () => setToValue(0)} text="reset" />
      <Button handleClick={ () => setToValue(value + 1)} text="increment" />
    </div>
  )
}

const Button = (props) => (
  <button onClick={props.handleClick}> 
    {props.text}
  </button>
)
//hola mati
export default App

/* ($env:REACT_APP_API_KEY="51a4aea1fe95cd704d805df447cb823a") -and (npm start)*/
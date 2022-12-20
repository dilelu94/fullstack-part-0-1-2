const App = () => {
  const course = 'Half Stack application development';
  const part1 = 'Fundamentals of React'
  const part2 = 'Using props to pass data'
  const part3 = 'State of a component'
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14
  const total = exercises1 + exercises2 + exercises3
  return (
    <div>
      <Header course={course} />
      <Content
        part1={part1}
        part2={part2}
        part3={part3}
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3}
      />
      <Total total={total} />
    </div>
  )
}

const Header = (props) => {
  console.log(props)
  return <h1>{props.course}</h1>
}

const Content = (props) => {
  console.log(props)
  return (
    <div>
      <p>{props.part1}, Ejercicios: {props.exercises1}</p>
      <p>{props.part2}, Ejercicios: {props.exercises2}</p>
      <p>{props.part3}, Ejercicios: {props.exercises3}</p>
    </div>
  )
}

const Total = (props) => {
  console.log(props)
  return (
    <div>
      <p>Number of exercises {props.total}</p>
    </div>
  )
}

export default App
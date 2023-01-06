props = {
    name: 'Arto Hellas',
    age: 35,
  }

const Hello = (props) => {
    const { name, age } = props
    const bornYear = () => new Date().getFullYear() - age
  
    return (
      <div>
        <p>Hello {name}, you are {age} years old</p>
        <p>So you were probably born in {bornYear()}</p>
      </div>
    )
  }
import React, { useState } from 'react';
import SubmitForm from './Components/SubmitForm';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();
    if (persons.find((person) => person.name === newName)) {
      alert(`${newName} is already in the phonebook`);
      setNewName('');
      return;
    }
    setPersons([...persons, { name: newName, number: newNumber }]);
    setNewName('');
    setNewNumber('');
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <SubmitForm 
        onChangeName={handleNameChange} valueName={newName} 
        onChangeNumber={handleNumberChange} valueNumber={newNumber}
        />
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map((person) => (
          <div key={person.name}>{person.name} {person.number}</div>
        ))}
      </div>
    </div>
  )
}

export default App
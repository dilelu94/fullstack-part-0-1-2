import React, { useState, useEffect } from 'react';
import axios from 'axios'
import SubmitForm from './Components/SubmitForm';
import PersonList from './Components/PersonList';
import Filter from './Components/Filter';

const App = () => {
  const [persons, setPersons] = useState([])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newId, setNewId] = useState(5)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()
    if (persons.find((person) => person.name === newName && person.number === newNumber)) {
      alert(`${newName} is already in the phonebook`)
      setNewName('')
      return
    }
    setPersons([...persons, { name: newName, number: newNumber, id: newId }]);
    setNewName('')
    setNewNumber('')
    setNewId(newId + 1)
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value)
  }

  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        valueFilter={searchQuery} onChangeFilter={handleSearchChange}
      />
      <form onSubmit={handleSubmit}>
        <SubmitForm
          onChangeName={handleNameChange} valueName={newName}
          onChangeNumber={handleNumberChange} valueNumber={newNumber}
        />
      </form>
      <h2>Numbers</h2>
      <PersonList
        persons={filteredPersons}
      />
    </div>
  )
}

export default App
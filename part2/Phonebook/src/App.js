import React, { useState, useEffect } from 'react';
import SubmitForm from './Components/SubmitForm';
import PersonList from './Components/PersonList';
import Filter from './Components/Filter';
import personService from './services/person';

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState(
    'add name...'
  )
  const [newNumber, setNewNumber] = useState(
    'add number...'
  )
  const [searchQuery, setSearchQuery] = useState(
    ''
  )

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()
    const personToUpdate = persons.find(person => person.name === newName)
    if (personToUpdate) {
      if (window.confirm(`${newName} is already in the phonebook, replace the old number with a new one?`)) {
        const changedNumber = { ...personToUpdate, number: newNumber }
        personService
          .update(personToUpdate.id, changedNumber).then(returnedPerson => {
            setPersons(persons.map(person => person.id !== personToUpdate.id ? person : returnedPerson))
            return
          })
      } else {
        setNewName('add name...')
        return
      }
    } else {

      event.preventDefault()
      const personObject = {
        name: newName,
        number: newNumber,
      }
      personService
        .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
        })
    }
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
        setPersons={setPersons}
      />
    </div>
  )
}

export default App
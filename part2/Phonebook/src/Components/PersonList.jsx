import personService from '../services/person';

const PersonList = ({ persons, setPersons, setErrorMessage }) => {
    return (
        <div>
            {persons.map((person) => (
                <div key={person.id}>
                    {person.name}, {person.number}
                    <button onClick={(event) => {
                        event.preventDefault()
                        if (window.confirm(`Delete ${person.name} ?`)) {
                            personService.deletePerson(person.id)
                                .then(() => {
                                    setPersons(persons.filter(p => p.id !== person.id))
                                })
                                .catch(error => {
                                    setErrorMessage(
                                        `Information of '${person.name}' has already been removed from server`
                                    )
                                    setTimeout(() => {
                                        console.log('personListTimeout')
                                        setErrorMessage(null)
                                    }, 5000)
                                })
                        }
                    }}>Delete</button>
                </div>
            ))}
        </div>
    )
}

export default PersonList
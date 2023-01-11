import personService from '../services/person';

const PersonList = ({ persons, setPersons }) => {
    return (
        <div>
            {persons.map((person) => (
                <div key={person.id}>
                    {person.name}, {person.number}
                    <button onClick={(event) => {
                        event.preventDefault()
                        personService.deletePerson(person.id)
                            .then(() => {
                                setPersons(persons.filter(p => p.id !== person.id))
                            })
                            .catch(error => {
                                alert(
                                    `the note '${person.name}' was already deleted from server`
                                )
                                setPersons(persons.filter(p => p.id !== person.id))
                            })
                    }}>Delete</button>
                </div>
            ))}
        </div>
    )
}

export default PersonList
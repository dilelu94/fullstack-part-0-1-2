const PersonList = ({ persons }) => {
    return (
        <div>
            {persons.map((person) => (
                <div key={person.id}> {person.name}, {person.number}, {person.id}</div>
            ))}
        </div>
    );
}

export default PersonList
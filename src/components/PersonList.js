import Person from "./Person"

const PersonList = ({ persons, handleDelete }) => {
    return (
      <ul>
        {persons.map(person => 
          <Person key={person.id} name={person.name} number={person.number}handleDelete={() => handleDelete(person)}/>)}
      </ul>
    )
}

export default PersonList
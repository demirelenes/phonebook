import { useState, useEffect } from 'react'
import Form from './components/Form'
import PersonList from './components/PersonList'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(response => {
        setPersons(response)
      })
  }, [])

  const handleNewName = (e) => {
    setNewName(e.target.value)
  }

  const handleNewNumber = (e) => {
    setNewNumber(e.target.value)
  }

  const checkDuplicate = () => {
    for (let i = 0; i < persons.length; i++) {
      if (persons[i].name === newName) {
        alert(`${newName} is already added.`)
        return false
      }
      if (persons[i].number === newNumber) {
        alert(`${newNumber} is already added.`)
        return false
      }
    }
    return true
  }

  const addNewPerson = (e) => {
    e.preventDefault()
    if (checkDuplicate()) {
      const personObject = {
        name: newName,
        number: newNumber
      }
      personService
        .create(personObject)
        .then(response =>
          setPersons(persons.concat(response)))
    }
    
    setNewName('')
    setNewNumber('')
  }

  const handleDelete = (delPerson) => {
    if (window.confirm(`Delete ${delPerson.name}?`)) {
      personService
        .deletePerson(delPerson.id)
        .then(
          setPersons(persons.filter(person => person.id !== delPerson.id))
        )
    }
  }

  return (
    <div>
      <h2>numberbook</h2>
      <Form newName={newName} handleNewName={handleNewName} newNumber={newNumber} handleNewNumber={handleNewNumber}
            addNewPerson={addNewPerson}/>
      <h2>Numbers</h2>
      <PersonList persons={persons} handleDelete={handleDelete}/>
    </div>
  )
}

export default App
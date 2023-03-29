const Form = ({ newName, handleNewName, newNumber, handleNewNumber, addNewPerson }) => {
  return (
    <form>
      <div>
        name: <input value={newName} onChange={handleNewName}/>
      </div>
      <div>
        phone: <input value={newNumber} onChange={handleNewNumber}/>
      </div>
      <div>
        <button type="submit" onClick={addNewPerson}>add</button>
      </div>
    </form>
  )
}

export default Form
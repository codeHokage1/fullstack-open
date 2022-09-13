import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleAdd = (e) => {
    e.preventDefault();
    const newContact = {
      name: newName
    }
    
    setPersons(persons.concat(newContact));
    setNewName('');

  }

  return (
    <div>
      <h2>Phonebook</h2>

      <form onSubmit={handleAdd}>
        <div>
          Name: <input type="text" onChange={e => setNewName(e.target.value)} />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      {
        persons.map(person => <p key={person.name}>{person.name}</p>)
      }
      
    </div>
  )
}

export default App
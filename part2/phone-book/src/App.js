import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { 
      name: 'Arto Hellas', 
      number: "040-1234567"
    }
  ]) 
  const [newName, setNewName] = useState('')
  const [number, setNumber] = useState('')


  const handleAdd = (e) => {
    e.preventDefault();
    let foundItem = persons.find(item => item.name === newName);
    if(!foundItem){
      const newContact = {
        name: newName,
        number: number
      }    
      setPersons(persons.concat(newContact));
    } else {
      alert(`${newName} is already added to the phonebook`);
    }
    setNewName('');
    setNumber('');
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <form onSubmit={handleAdd}>
        <div>
          Name: <input type="text" value={newName} onChange={e => setNewName(e.target.value)} />
        </div>
        <div>
          Number: <input type="text" value={number} onChange={e => setNumber(e.target.value)} />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      {
        persons.map(person => <p key={person.name}>{person.name} {person.number}</p>)
      }
      
    </div>
  )
}

export default App
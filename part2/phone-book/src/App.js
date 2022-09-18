import { useEffect, useState } from 'react'
import AddContact from './components/AddContact'
import AllContacts from './components/AllContacts'
import Search from './components/Search'

import personService from './services/persons';

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [number, setNumber] = useState('')

  const [search, setSearch] = useState('')

  const handleAdd = (e) => {
    e.preventDefault();
    let foundItem = persons.find(item => item.name === newName);
    if(!foundItem){
      const newContact = {
        name: newName,
        number: number
      } 
      personService.create(newContact)
            .then(newPerson => {
              setPersons(persons.concat(newPerson));
            })
    } else {
      if(window.confirm(`${foundItem.name} is already added to the phonebook, replace the old number with a new one?`)){
        const updatedPerson = {...foundItem, number: number}
        personService.update(foundItem.id, updatedPerson)
            .then(newPerson => {
              setPersons(persons.map(person => person.id === newPerson.id ? newPerson : person))
            })
      }

    }
    setNewName('');
    setNumber('');
  }


  const handleDelete = personToDelete => {
    if(window.confirm(`Delete ${personToDelete.name} ?`)){
      personService.deleteContact(personToDelete.id)
      .then(deletedPerson => {
        setPersons(persons.filter(person => person.id !== personToDelete.id));
      })
    }
  }


  useEffect(() => {
    personService.getAll()
          .then(persons => {
            setPersons(persons);
          })
  }, [])
  return (
    <div>
      <h2>Phonebook</h2>
      <Search 
        search={search}
        setSearch={setSearch}
      />
      <AddContact 
        handleAdd = {handleAdd}
        newName={newName} 
        setNewName={setNewName} 
        number={number}
        setNumber={setNumber}
      />
      <h2>Numbers</h2>
      <AllContacts 
        persons={persons.filter(person => person.name.toLowerCase().includes(search.toLowerCase()))}
        handleDelete={handleDelete}
      />      
    </div>
  )
}

export default App
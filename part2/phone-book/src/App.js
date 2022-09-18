import { useEffect, useState } from 'react'
import AddContact from './components/AddContact'
import AllContacts from './components/AllContacts'
import Search from './components/Search'

import axios from 'axios';

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
      axios.post("http://localhost:3050/persons", newContact)
            .then(res => {
              setPersons(persons.concat(res.data));
            })   
    } else {
      alert(`${newName} is already added to the phonebook`);
    }
    setNewName('');
    setNumber('');
  }

  useEffect(() => {
    axios.get('http://localhost:3050/persons')
          .then((res) => {
            setPersons(res.data);
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
      />      
    </div>
  )
}

export default App
import React from 'react'

const AllContacts = ({persons, handleDelete}) => {
 
  return (
    <>
        {
            persons.map(person => (
                <div key={person.id}>
                  <p>{person.name} {person.number}</p>
                  <button onClick={() => handleDelete(person)}>delete</button>
                </div>
              ))
        }
    </>
  )
}

export default AllContacts
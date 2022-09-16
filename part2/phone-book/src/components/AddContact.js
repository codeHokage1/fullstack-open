import React from 'react'

const AddContact = ({handleAdd, newName, setNewName, number, setNumber}) => {
  return (
    <form onSubmit={handleAdd}>
        <h3>Add a New Contact</h3>
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

  )
}

export default AddContact
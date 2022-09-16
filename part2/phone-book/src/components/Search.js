import React from 'react'

const Search = ({search, setSearch}) => {
  return (
    <>
        <p>
            <strong>Search: </strong>
            <input type="text" placeholder="Search for a person" value={search} 
                onChange={e => {
                setSearch(e.target.value); 
                }}
            />
        </p>

    </>
  )
}

export default Search
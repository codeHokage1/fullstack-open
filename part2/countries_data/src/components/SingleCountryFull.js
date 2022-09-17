import React from 'react'

const SingleCountryFull = ({country}) => {
  return (
    <div>
        <h2>{country.name.common}</h2>
        <p>Capital: {country.capital[0]}</p>
        <p>Area: {country.area} KMs </p>
        <h4>Languages:</h4>
        <ul>
            {
                Object.keys(country.languages)
                        .map(key => 
                                <li key={key}>{country.languages[key]}</li>
                        )
            }
        </ul>
        <img src={country.flags.png} alt={`${country.name.common}'s flag`} />
    </div>
  )
}

export default SingleCountryFull
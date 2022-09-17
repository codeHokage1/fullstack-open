import React from 'react'

const CountriesDisplay = ({countries}) => {
  return (
    <div>
        {
            countries.length > 10 && <p>There are a lot countries. Input a search feature more specific</p>
        }
        {
            (countries.length > 1 && countries.length <= 10) && countries.map((country) => <p key={country.name.official}>{country.name.common}</p>)
        }
        {
            countries.length === 1 && countries.map((country) => (
                <div key={country.name.official}>
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
            ))
        }
    </div>
  )
}

export default CountriesDisplay
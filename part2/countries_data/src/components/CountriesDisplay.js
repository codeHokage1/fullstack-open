import React from 'react'
import SingleCountry from './SingleCountry'
import SingleCountryFull from './SingleCountryFull'

const CountriesDisplay = ({countries}) => {
  return (
    <div>
        {
            countries.length > 10 && <p>There are a lot countries. Input a search feature more specific</p>
        }
        {
            (countries.length > 1 && countries.length <= 10) && countries.map((country) => <SingleCountry key={country.name.official} country={country} />)
        }
        {
            countries.length === 1 && countries.map((country) => <SingleCountryFull key={country.name.official} country={country} />)
        }
    </div>
  )
}

export default CountriesDisplay
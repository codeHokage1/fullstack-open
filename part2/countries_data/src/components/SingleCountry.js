import React, { useState } from 'react';
import SingleCountryFull from './SingleCountryFull';

const SingleCountry = ({country}) => {
    const [showDetails, setShowDetails] = useState(false);
  return (
    <>
        <p>{country.name.common} <button onClick={() => setShowDetails(!showDetails)}>Show</button></p>
        {
            showDetails && <SingleCountryFull country={country} />
        }
    </>
  )
}

export default SingleCountry
import React, {useState, useEffect} from 'react';
import axios from 'axios';

const SingleCountryFull = ({country}) => {
  const [weather, setWeather] = useState({});
  const api_key = process.env.REACT_APP_API_KEY
  
  useEffect(() => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${country.capitalInfo.latlng[0]}&lon=${country.capitalInfo.latlng[1]}&appid=${api_key}`)
          .then((response) => {
            setWeather(response.data)
          });
  }, [country])
  return (
    <div>
        <h2>{country.name.common}</h2>
        <p>Capital: {country.capital[0]}</p>
        <p>Area: {country.area} KMs </p>
        <h4>Languages:</h4>
        <ul>
            {
                Object.keys(country.languages)
                        .map(key => <li key={key}>{country.languages[key]}</li>)
            }
        </ul>
        <img src={country.flags.png} alt={`${country.name.common}'s flag`} />
        <h3>Weather in {country.capital[0]}</h3>
        {
          weather.main ? (
                      <>
                        <p>Temperature: {weather.main.temp ? weather.main.temp : 'Loading Value...'} </p>
                        <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="" />
                        <p>Wind: {weather.wind.speed ? weather.wind.speed : 'Loading Value...'}m/s</p>
                      </>
                    ) 
                    : (<p>Loading weather details ...</p>)
        }
        {
          console.log(weather)
        }
    </div>
  )
}

export default SingleCountryFull
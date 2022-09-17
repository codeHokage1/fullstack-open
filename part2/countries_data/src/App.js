import axios from 'axios';
import {useState, useEffect} from 'react';
import CountriesDisplay from './components/CountriesDisplay';

function App() {
  const [countriesData, setCountriesData] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    console.log("USe effect here")
    axios.get('https://restcountries.com/v3.1/all')
          .then(res => {
            console.log("Got into the promise respose")
            setCountriesData(res.data);            
          })
  }, [])

  return (
    <div>
      <p>
        <strong>Find Countries:</strong>
        <input type="text" value={search} onChange={e => setSearch(e.target.value)} />
      </p>
      {
        search 
              ? <CountriesDisplay countries={countriesData.filter(country => country.name.common.toLowerCase().includes(search.toLowerCase()))} />
              : <p># Use the input above to search for countries</p>
      }
      
    </div>
  );
}

export default App;

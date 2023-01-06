import { useState, useEffect } from 'react'
import axios from 'axios'
import CountryComponent from "./Components/CountryComponent"
import Filter from './Components/Filter'

const App = () => {
  const [countries, setCountries] = useState([])
  const [searchQuery, setSearchQuery] = useState('')

  const hook = () => {
    console.log('effect')
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })
  }
  useEffect(hook, [])

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value)
  }
  const filteredCounty = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
  )

  if (filteredCounty.length === 1) {
    return (
      <div>
        <h1>Countries</h1>
        <Filter
          valueFilter={searchQuery} onChangeFilter={handleSearchChange} countryArray={filteredCounty}
        />
        {filteredCounty.map(map =>
          <>
            <h2><CountryComponent key={map.flag} countryArray={map} /></h2>
              <p key={map.capital}>capital: {map.capital}</p>
              <p key={map.area}>area: {map.area}</p>
              <p key={map.region}>region: {map.region}</p>
              <p key={map.subregion}>subregion: {map.subregion}</p>
              <p key={map.population}>population: {map.population}</p>
            <h4>languages:</h4>
            <ul>
              {Object.values(map.languages).map(language =>
                <li key={language}>{language}</li>
              )}
            </ul>
            <img src={map.flags.svg} alt={`Flag of ${map.name.common}`} 
            style={{ width: '150px', height: '150px' }} />
          </>
        )}
      </div>
    )
  } else if (filteredCounty.length <= 10) {
    return (
      <div>
        <h1>Countries</h1>
        <Filter
          valueFilter={searchQuery} onChangeFilter={handleSearchChange} countryArray={filteredCounty}
        />
        <ul>
          {filteredCounty.map(map =>
            <CountryComponent key={map.flag} countryArray={map} />
          )}
        </ul>
      </div>
    )
  } else {
    return (
      <div>
        <h1>Countries</h1>
        <Filter
          valueFilter={searchQuery} onChangeFilter={handleSearchChange} countryArray={filteredCounty}
        />
        <p>Too many matches, specify another filter</p>
      </div>
    )
  }
}

export default App

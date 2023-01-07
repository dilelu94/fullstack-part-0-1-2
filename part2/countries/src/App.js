import { useState, useEffect } from 'react'
import axios from 'axios'
import CountryComponent from "./Components/CountryComponent"
import Filter from './Components/Filter'
import DetailView from './Components/DetailView'

const App = () => {
  const [countries, setCountries] = useState([])
  const [searchQuery, setSearchQuery] = useState('')

  const hook = () => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
      })
  }
  useEffect(hook, [])


  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value)
  }
  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const setSearchToCountry = (countryName) => {
    setSearchQuery(countryName)
  }

  if (filteredCountries.length === 1) {
    return (
      <DetailView filteredCountry={filteredCountries[0]}
        searchQuery={searchQuery}
        handleSearchChange={handleSearchChange}
      />
    )
  } else if (filteredCountries.length <= 10) {
    return (
      <div>
        <h1>Countries</h1>
        <Filter
          valueFilter={searchQuery} onChangeFilter={handleSearchChange} countryArray={filteredCountries}
        />
        <ul>
          {filteredCountries.map(map =>
            <CountryComponent 
              key={map.flag} 
              countryArray={map} 
              setSearchToCountry={setSearchToCountry}
            />
          )}
        </ul>
      </div>
    )
  } else {
    return (
      <div>
        <h1>Countries</h1>
        <Filter
          valueFilter={searchQuery} onChangeFilter={handleSearchChange} countryArray={filteredCountries}
        />
        <p>Too many matches, specify another filter</p>
      </div>
    )
  }
}

export default App
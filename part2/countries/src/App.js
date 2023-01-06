import { useState, useEffect } from 'react'
import axios from 'axios'
import CountryComponent from "./Components/CountryComponent"
import Filter from './Components/Filter'
import DetailView from './Components/DetailView'

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
  const filteredCountry = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
  )

  if (filteredCountry.length === 1) {
    return (
      <DetailView filteredCountry={filteredCountry}
        searchQuery={searchQuery}
        handleSearchChange={handleSearchChange}
      />
    )
  } else if (filteredCountry.length <= 10) {
    return (
      <div>
        <h1>Countries</h1>
        <Filter
          valueFilter={searchQuery} onChangeFilter={handleSearchChange} countryArray={filteredCountry}
        />
        <ul>
          {filteredCountry.map(map =>
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
          valueFilter={searchQuery} onChangeFilter={handleSearchChange} countryArray={filteredCountry}
        />
        <p>Too many matches, specify another filter</p>
      </div>
    )
  }
}

export default App

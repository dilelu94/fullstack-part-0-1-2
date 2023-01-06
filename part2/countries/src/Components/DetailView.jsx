import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from "./Filter"

const DetailView = (props) => {
    const { filteredCountry, searchQuery, handleSearchChange } = props
    const [weather, setWeather] = useState(false)

    const hook = () => {
        const city = encodeURIComponent(filteredCountry.capital)
        const apiKey = process.env.REACT_APP_API_KEY
        const weatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}`;
        axios
            .get(weatherUrl)
            .then(response => {
                setWeather(response.data)
            })
    }
    useEffect(hook, [filteredCountry])

    return (
        <div>
            <h1>Countries</h1>
            <Filter
                valueFilter={searchQuery} onChangeFilter={handleSearchChange} countryArray={filteredCountry}
            />
            <h2>{filteredCountry.name.common}</h2>
            <p>capital: {filteredCountry.capital}</p>
            <p>area: {filteredCountry.area}</p>
            <p>region: {filteredCountry.region}</p>
            <p>subregion: {filteredCountry.subregion}</p>
            <p>population: {filteredCountry.population}</p>
            <h4>languages:</h4>
            <ul>
                {Object.values(filteredCountry.languages).map(language =>
                    <li key={language}>{language}</li>
                )} {/* para convertir un diccionario en una lista sin keys */}
            </ul>
            <img src={filteredCountry.flags.svg} alt={`Flag of ${filteredCountry.name.common}`}
                style={{ width: '200px', height: '150px' }} />
            <h4>Weather in {filteredCountry.capital}</h4>
            <>
                {!weather && <p>loading</p>}
                {weather &&
                    <>
                        <p>Temperature: {(weather.main.temp - 273.15).toFixed(2)}°C </p>
                        <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt={`icon of ${weather.weather[0].main}`}
                            style={{ width: '100px', height: '100px' }} />
                        {/* <li key={condition.id}>{condition.main}</li> */}
                        <p>Wind speed: {weather.wind.speed} m/s</p>
                    </>
                }
            </>
        </div>
    )
}

export default DetailView 
import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from "./Filter"

const DetailView = (props) => {
    const { filteredCountry, searchQuery, handleSearchChange } = props
    const [weather, setWeather] = useState([])

    const hook = () => {
        console.log('effect')
        const city = encodeURIComponent(filteredCountry[0].capital)
        const apiKey = '51a4aea1fe95cd704d805df447cb823a';
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
            {filteredCountry.map(map =>
            
                <>
                    <h2>{map.name.common}</h2>
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
                        style={{ width: '200px', height: '150px' }} />
                    <h4>Weather in {map.capital}</h4>
                </>
            )}
            <ul>
                {weather.main && <li key={weather.main.temp}>Temperature: {(weather.main.temp - 273.15).toFixed(2)}°C </li>}
                {weather.weather && weather.weather.map(condition =>
                    <>
                        <img src={`https://openweathermap.org/img/wn/${condition.icon}.png`} alt={`icon of ${condition.main}`}
                            style={{ width: '100px', height: '100px' }} />
                        {/* <li key={condition.id}>{condition.main}</li> */}
                    </>
                )}
                {weather.main && <li key={weather.wind.speed}>Wind speed: {weather.wind.speed} m/s</li>}
            </ul>
        </div>
    )
}


export default DetailView
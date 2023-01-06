const CountryComponent = ({ countryArray, setSearchToCountry }) => {
    return (
        <li>
            {countryArray.name.common}
            <button onClick={() => setSearchToCountry(countryArray.name.common)}>
                Show
            </button>
        </li>
    )
}


export default CountryComponent
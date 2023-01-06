const CountryComponent = ({ countryArray }) => {
    return (
        <p key={countryArray.flag}>{countryArray.name.common}</p>
    )
}

export default CountryComponent
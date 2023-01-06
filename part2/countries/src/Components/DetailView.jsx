import Filter from "./Filter"
import CountryComponent from "./CountryComponent"

const DetailView = (props) => {
    const { filteredCountry, searchQuery, handleSearchChange } = props;
    return (
        <div>
            <h1>Countries</h1>
            <Filter
                valueFilter={searchQuery} onChangeFilter={handleSearchChange} countryArray={filteredCountry}
            />
            {filteredCountry.map(map =>
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
}


export default DetailView
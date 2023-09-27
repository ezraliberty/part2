import { useState, useEffect } from "react";
import handlers from "./services/handler";

const ErrorModal = ({ message }) => {
  if (message === null) {
    return null;
  }

  return <div>{message}</div>;
};

const App = () => {
  const [entry, setEntry] = useState("");
  const [countries, setCountries] = useState([]);
  const [weatherData, setWeatherData] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [errorData, setErrorData] = useState(null);

  const handleChange = (event) => {
    setEntry(event.target.value.toLowerCase());
  };

  useEffect(() => {
    if (entry) {
      setSelectedCountry(null);
      setWeatherData(null);

      handlers.countries().then((response) => {
        const matchingCountries = response.filter((element) =>
          element.name.common.toLowerCase().includes(entry)
        );
        if (matchingCountries.length === 1) {
          setCountries([matchingCountries[0]]);
          handlers
            .weatherDetails(matchingCountries[0].capital[0])
            .then((reply) => setWeatherData(reply));
        } else if (matchingCountries.length < 11) {
          setCountries([...matchingCountries]);
        } else {
          setErrorData(`Too many matches, specify another filter`);
          setTimeout(() => {
            setErrorData(null);
          }, 5000);
        }
      });
    }
  }, [entry]);

  const handleClick = (name) => {
    const country = countries.find((country) => country.name.common === name);
    setSelectedCountry(country);
    handlers
      .weatherDetails(country.capital[0])
      .then((reply) => setWeatherData(reply));
  };

  const countryToRender =
    selectedCountry || countries.length === 1 ? countries[0] : null;

  return (
    <div>
      <div>
        find countries <input value={entry} onChange={handleChange}></input>
        <ErrorModal message={errorData} />
      </div>
      <div>
        {countryToRender ? (
          <div key={countryToRender.ccn3}>
            <h1>{countryToRender.name.common}</h1>
            <p>Capital: {countryToRender.capital}</p>
            <p>Area: {countryToRender.area}</p>
            <h2>languages:</h2>
            <ul>
              {Object.entries(countryToRender.languages).map(
                ([code, language], index) => (
                  <li key={index}>
                    {language} ({code})
                  </li>
                )
              )}
            </ul>
            <img
              src={countryToRender.flags.svg}
              style={{ width: 200, height: 200 }}
              alt="Country Flag"
            />
            {weatherData && (
              <div>
                <h2>Weather in {weatherData.name}</h2>
                <p>temperature {weatherData.main.temp} Celcius</p>
                <img
                  src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                  alt="Weather icon"
                />
                <p>Wind: {weatherData.wind.speed} m/s</p>
              </div>
            )}
          </div>
        ) : (
          countries.map((country) => (
            <div key={country.ccn3}>
              {country.name.common}
              <button onClick={() => handleClick(country.name.common)}>
                show
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default App;

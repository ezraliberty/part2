import axios from "axios";
const baseURL = "https://studies.cs.helsinki.fi/restcountries/api";
const api_key = import.meta.env.VITE_OPEN_WEATHER_API;

const countries = () => {
  const request = axios.get(`${baseURL}/all`);
  return request.then((response) => response.data);
};

const findCountry = (name) => {
  const request = axios.get(`${baseURL}/name/${name}`);
  return request.then((response) => response.data);
};

const weatherDetails = (name) => {
  const request = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${api_key}&units=metric`);
  return request.then(response => response.data)
};

export default { countries, findCountry, weatherDetails };

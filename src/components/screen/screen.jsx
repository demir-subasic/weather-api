import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './screen.scss'
import { useQuery } from 'react-query'
import Search from '../search-bar/search'


const WeatherComponent = () => {
  const [search, setSearch] = useState('');
  const [searchedCity, setSearchedCity] = useState('');


  const handleSubmit = () => {
    setSearchedCity(search);
  };

  const updateData = (e) => {
    setSearch(e.target.value);
  };

  const fetchWeatherData = async () => {
    const response = await axios.get(
      `http://api.weatherapi.com/v1/current.json?key=e1510e6c8db44a4b899165247232106&q=${searchedCity}&aqi=no`
    );
    return response.data;
  };

  const { data: weatherData, isLoading } = useQuery(['weather', searchedCity], fetchWeatherData);

  return (
  
      <div className='full-screen-page'>
        <div className='content-container'>
          <h1>Weather in </h1>
          {/* <Search handleSubmit={handleSubmit} handleSearch={updateData}/> */}
          <div className="search">
          <input type='text' value={search} onChange={updateData} />
          <button onClick={handleSubmit}>Search</button>
          </div>

          {isLoading ? (
            <p className='loading'>Loading...</p>
          ) : (
            <div className='card-wrapper'>
              <h2>Current Weather in {weatherData?.location?.name}</h2>
              <p>Temperature: {weatherData?.current?.temp_c}°C</p>
              <p>Humidity: {weatherData?.current?.humidity}%</p>
              <p>Weather: {weatherData?.current?.condition?.text}</p>
            </div>
          )}
        </div>
      </div>
  );
};

export default WeatherComponent;

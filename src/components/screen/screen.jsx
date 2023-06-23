import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import video from '../assets/bg.mp4'
import './screen.scss'
import { useQuery } from 'react-query'
import Search from '../search-bar/search'





const Screen = () => {

  
  const fetchWeatherData = async () => {
    console.log(searchedCity,"test")
    try {
      const response = await axios.get(
        `http://api.weatherapi.com/v1/current.json?key=e1510e6c8db44a4b899165247232106&q=${searchedCity}&aqi=no
        `
        );

      setWeatherData(response.data);
    
    } catch (error) {

    }
  };

  const [search, setSearch] = useState('')
  // const {data, isLoading, isError, error} = useQuery('city', fetchWeatherData)
  const [searchedCity, setSearchedCity] = useState('')
  const [weatherData, setWeatherData] = useState([]);

  console.log(weatherData)
  console.log(searchedCity,"searchedCity")

  //error 
  //loading

  // const fetchData = async () => {
  //   const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=e1510e6c8db44a4b899165247232106=${searchedCity}`)
  //   // const response = await axios.get("https://fakestoreapi.com/products")
  //   const data = response.data
  //   return data
  // }

 

  // if(isLoading) {
  //   return <div>Loading ...</div>
  // }
  // if(isError){
  //   return <div>Error : {error.message}</div>
  // }
  const handleSubmit = () => {
    setSearchedCity(search)
    fetchWeatherData(search).then(res => console.log(res))
  }

  useEffect(() => {
    fetchWeatherData('Belgrade')
  }, [handleSubmit])

  const updateData = (e) => {
    setSearch(e)
  }

  // const filterData = data?.filter((city) => 
  //     city.title.toLowerCase().includes(search.toLowerCase())
  //   )


   
  
  return (
    <div className='full-screen-page'>
      
      <div className='content-container'>
      <h1>Weather in </h1>
      <Search handleSubmit={handleSubmit} handleSearch={updateData}/>
      
        <div className='card-wrapper'>
        <h2>Current Weather in {weatherData?.location?.name}</h2>
        <p>Temperature: {weatherData?.current?.temp_c}°C</p>
        <p>Humidity: {weatherData?.current?.humidity}%</p>
        <p>Weather: {weatherData?.current?.condition.text}</p>
        </div>
        

      </div>
    </div>
  )
}

export default Screen

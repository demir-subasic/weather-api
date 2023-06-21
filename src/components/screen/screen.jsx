import React, { useState } from 'react'
import axios from 'axios'
// import video from '../assets/bg.mp4'
import './screen.scss'
import { useQuery } from 'react-query'
import Search from '../search-bar/search'

const fetchData = async () => {
  const response = await axios.get("https://fakestoreapi.com/products")
  const data = response.data
  return data
}


const Screen = () => {

  const [search, setSearch] = useState('')
  const {data, isLoading, isError, error} = useQuery('city', fetchData)

  if(isLoading) {
    return <div>Loading ...</div>
  }
  if(isError){
    return <div>Error : {error.message}</div>
  }

  const updateData = (e) => {
    setSearch(e)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      filterData()
    }
  }
  
  const filterData = data.filter((city) => 
      city.title.toLowerCase().includes(search.toLowerCase())
    )
  
  return (
    <div className='full-screen-page'>
      
      <div className='content-container'>
      <h2>Weather in </h2>
      <Search handleSearch={updateData}/>
      {filterData.map((item) => (
        <div>{item.title}</div>
      ))}

      </div>
    </div>
  )
}

export default Screen

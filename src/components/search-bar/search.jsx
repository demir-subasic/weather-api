import React from 'react'
import './search.scss'

const Search = ({handleSearch}) => {

    const inputHandler = (e) => {
        let data = e.target.value;
        handleSearch(data);
    }
  return (
    <div className='search'>
        <input className='search-input' type="text" onChange={inputHandler}  placeholder='Select town'/>
      
    </div>
  )
}

export default Search

import React from 'react'
import './search.scss'

const Search = ({handleSearch,handleSubmit}) => {

    const inputHandler = (e) => {
        let data = e.target.value;
        handleSearch(data);
    }
  return (
    <div className='search'>
        <input className='search-input' type="text" onChange={inputHandler}  placeholder='Select town'/>
        <button onClick={()=> {handleSubmit}}>Search</button>
      
    </div>
  )
}

export default Search

import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";

const SearchBar = (props) => {
    
    const [query, setQuery] = useState('')
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`search/${query}`)
    }

    return (
        <form onSubmit={handleClick}>
            <label>Search For Videos: </label>
            <input type="text" value={query} onChange={(event)=>setQuery(event.target.value)}>
            </input>
            <button type='submit'>
                    <i className="fa-solid fa-magnifying-glass"></i>
            </button>
        </form>
      );
}
 
export default SearchBar;
import React from 'react';
import './SearchBar.css';
const SearchBar = (props) => {
    
    let [queryString, setQueryString] = React.useState("");
    const handleChange = (e) => {
        setQueryString(e.target.value);
      }

    const onSearch = () => {
        props.onSearch(queryString);
    }  
    return(
        <div className="search-toolbar">
            <input className="search-input" type="text" value={queryString} onChange={handleChange} placeholder="Search..."/>
            <button className="search-button" onClick={onSearch}>Go</button>
        </div>
    )
}

export default SearchBar;
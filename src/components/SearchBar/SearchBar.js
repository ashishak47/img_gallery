import React from 'react';
import './SearchBar.css';
import PropTypes from 'prop-types';

const SearchBar = (props) => {
    
    let [queryString, setQueryString] = React.useState("");
    const handleChange = (e) => {
        setQueryString(e.target.value);
      }

    const onSearch = () => {
        props.onSearch(queryString);
    }  
    return(
        <>
        <div className="header">
            <h2>IMAGE GALLERY</h2>
        </div>
        <div className="search-toolbar">
            <input className="search-input" type="text" value={queryString} onChange={handleChange} placeholder="Search..."/>
            <button className="search-button" onClick={onSearch}>Go</button>
        </div>
        </>
    )
}

SearchBar.propTypes = {
    onSearch: PropTypes.func.isRequired
}

export default SearchBar;
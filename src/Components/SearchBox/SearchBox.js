import React from "react";
import './SearchBox.css'

const SearchBox = ({placeholder , handleChange}) => (
  <input
    className=""
    type='search' 
    placeholder={placeholder}
    onChange={handleChange} 
  />
)
export default SearchBox;
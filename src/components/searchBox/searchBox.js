import React from 'react'

import './searchBox.css';

 const SearchBox=({ placeholder,handleChange })=>{
     return(
    <input type='search' className="search"
    placeholder ={ placeholder } onChange={handleChange}/>
     );
}

export default SearchBox;
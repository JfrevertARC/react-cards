import React from 'react';

const SearchBox =({searchChange}) => {
  return (
    <div className="pa2">
    <input type="search" className="pa3 ba br2 b--blue bg-lightest-blue" placeholder="Search" onChange={searchChange} />
    </div>
  )
}

export default SearchBox;

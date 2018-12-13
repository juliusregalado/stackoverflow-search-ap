import React from 'react';

const SearchBox = (props) => {
  const onSubmit = (e) => {
    e.preventDefault();
    props.handleSubmit();
  }
  return (
    <div className="text-center">
      <form onSubmit={onSubmit}>
        <input 
          className="pa2 ba b--black bg-lightest-blue grow text-center  w-100"
          type="search" 
          placeholder="Search here"
          value={props.data.searchQuery}
          name="search"
          onChange={props.handleSearch}
        />
      </form>
    </div>
  )
}

export default SearchBox;

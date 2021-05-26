import React, { useState, useEffect } from 'react'
import SearchBar from './SearchBar'
import MovieCardDisplayed from './UI/MovieCardDisplayed'
import movieDb from '../../../movieDb'

const SearchPage = () => {
    const [filter, setFilter] = React.useState("");

    const filteredData = React.useMemo(() => { 
       if (filter == "") return movieDb;
       return movieDb.filter(
         (item) =>
           item.title.toLowerCase().includes(filter) 
         );
    }, [movieDb, filter]);
  
    return (
      <>
        <SearchBar onSearch={(searchTerm) => setFilter(searchTerm)}/>
        <div className="d-flex flex-wrap sp-body">
          <MovieCardDisplayed movieDb={filteredData} />
        </div>
      </>
    );
  }

export default SearchPage

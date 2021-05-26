import React, { useState, useEffect } from 'react'
import SearchBar from './SearchBar'
import MovieCardDisplayed from './UI/MovieCardDisplayed'
import { useDispatch, useSelector } from "react-redux";

const SearchPage = () => {
    const [filter, setFilter] = React.useState("");

    const movies = useSelector(state => state.movies);
     
    const filteredData = React.useMemo(() => { 
       if (filter ==="") return movies;
       return movies.filter(
         (item) =>
         console.log(item.Title) 
        //   item.Title.toLowerCase().includes(filter) 
         );
    }, [movies, filter]);
  
    return (
      <>
        <SearchBar onSearch={(searchTerm) => setFilter(searchTerm)}/>
        <div className="d-flex flex-wrap sp-body">
          <MovieCardDisplayed movies={filteredData} />
        </div>
      </>
    );
  }

export default SearchPage

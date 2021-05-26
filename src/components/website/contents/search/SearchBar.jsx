import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { replaceSearchTerm } from "../../../../features/searchTerm";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      console.log('enter pressed'); 
      handleSave();
      setSearchTerm("");
    }
  };

  const handleSave = () => {
    dispatch(replaceSearchTerm(searchTerm));
  };

  return (
    <section className="d-block">
      <form>
        <input
          onChange={(event) => {
            setSearchTerm(event.target.value.toLowerCase());
          }}
          className="search-input"
          placeholder="Search movies"
          name="search"
          value={searchTerm}
          onKeyPress={handleKeyPress}
        />
      </form>
    </section>
  );
};

export default SearchBar;

/*  )

      let items = []
  
      if (query !== "" ) {
        items = result.data.filter(movie => movie.t.toLowerCase().includes(query.toLowerCase())
        ||
        movie.i.toLowerCase().includes(query.toLowerCase()))
   
      } else {
       items = result.data
   
      } 
      */

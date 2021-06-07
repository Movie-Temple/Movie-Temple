import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { replaceSearchTerm } from "../../../../features/searchTerm";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSave();
      setSearchTerm("");
    }
  };

  const handleSave = () => {
    dispatch(replaceSearchTerm(searchTerm));
    history.push('/Search');
  };

  return (
    <section className="search-container">
      <form>
        <input
          onChange={(event) => {
            setSearchTerm(event.target.value.toLowerCase());
          }}
          className="search"
          id="searchleft"
          placeholder="Search movies"
          name="q"
          value={searchTerm}
          onKeyPress={handleKeyPress} />
          <label class="button searchbutton" 
          for="searchleft">
            <span class="mglass">&#9906;
          </span></label>
          
      </form>
    </section>
  );
};

export default SearchBar;

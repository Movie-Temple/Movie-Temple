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

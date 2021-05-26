import React from 'react'
import { useState } from "react";


 
 const SearchBar = ({ onSearch }) => {
 const [searchTerm, setSearchTerm] = useState("");
  
   return (
    <section className="d-block">
    <form>
          <input
           
            onChange={event => {setSearchTerm(event.target.value.toLowerCase())}}
            className="search-input"
            placeholder="Search movies"
            name="search"
            value={searchTerm}
          />

             
    </form>
  </section>
   )
   }

 export default SearchBar


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
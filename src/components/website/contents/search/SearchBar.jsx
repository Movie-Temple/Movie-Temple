import React from 'react'


 
 const SearchBar = ({ onSearch }) => {
  const onSub = (e) => {
    onSearch(e.target.value.toLowerCase());
  };
   return (
    <section className="d-block">
    <form>
          <input
           
            onChange={onSub}
            className="search-input"
            placeholder="Search movies"
            name="search"
           
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
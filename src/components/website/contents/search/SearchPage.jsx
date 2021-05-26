import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import { replaceMovie } from "../../../../features/currentMovie";
import './searchPage.css'

const SearchPage = () => {
  //const [filter, setFilter] = React.useState("");

  const movies = useSelector((state) => state.movies);
  const searchTerm = useSelector(state => state.searchTerm);
  const dispatch = useDispatch();
  const history = useHistory();

  
  // const filteredData = React.useMemo(() => {
  //   //if (searchTerm === "") return movies;
  //   return movies.filter((item) => 
  //     //console.log(item.Title)
  //     item.Title.toLowerCase().includes(searchTerm)
  //   );
  // }, [movies, searchTerm]);


  const handleCLick = (movie) => {
    return (
        dispatch(replaceMovie(movie)),
        history.push('/moviedetails')
    )
}

  return (
    <>
      
      <div className="searchBody">
                {movies.map((movie) => {
                    return ((movie.Title.toLowerCase().indexOf(searchTerm) !== -1) ?

                        <div className='searchItem' onClick={() => {handleCLick(movie)}} key={movie.imdbID}>
                            <img className='searchImg' src={movie.Poster} alt={movie.Title} />
                            {/* <p className='scrollerTitle'>{movie.Genre}</p> */}
                        </div>

                        : null
                    );
                })}  
            </div> 



    </>
  );
};

export default SearchPage;

import { useEffect, useState } from "react";
import getMovie from './api'


const ApiTemplates = ({title}) => {
    const [movie, setMovie] = useState({});
    useEffect(() => {
        async function fetchData() {
          let data = await getMovie(title);
          setMovie(data);
        }
        fetchData();
    }, [title])
    
    
    
    
    return (
        <div>
            <h1>{movie.Title}</h1>
            <img src={movie.Poster} alt="" />
            <p>Plot: {movie.Plot}</p>
            <p>Actors: {movie.Actors}</p>
            <p>Runtime: {movie.Runtime}</p>
            <p>Release year: {movie.Year}</p>
            <p>Metascore: {movie.Metascore}</p>
            <p>Genre: {movie.Genre}</p>

        </div>
    )
}

export default ApiTemplates;
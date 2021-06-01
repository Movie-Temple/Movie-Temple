import './movieDetails.css';
import { useSelector } from 'react-redux';
import {db} from '../../../../firebase';
import Popup from '../../../popup/Popup'
import React, { useState } from "react";
import {buyMovie} from '../account/profile/personalMovieLists';
import {rentMovie} from '../account/profile/personalMovieLists';
import {addToWatchlist} from '../account/profile/personalMovieLists';


const MovieDetails = () => {
    
    const [isOpen, setIsOpen] = useState(false);
 
    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    //const currentUserUid = useSelector(state => state.currentUserUid);

    const movie = useSelector(state => state.currentMovie);
    // CHANGE BUTTONS ACCORDING TO PROFILE. Already bought? Already rented? Already added to watchlist?

   

    if (movie == null) {
        return (
            <div className='movie-details'>Something went wrong. Nothing to show..</div>
        )

    } else {
        return (
            <div className='movie-details'>
                <img className='movie-details-image' src={movie.Poster} alt="Poster" />
                
                <div className='movie-details-information'>
                    <h2 className='movie-details-title'>{movie.Title}</h2>
                    <p className='movie-details-description'>{movie.Plot}</p>
                    <p className='movie-details-actors'> Actors: {movie.Actors}</p>
                    <p className='movie-details-runtime'>Runtime: {movie.Runtime}</p>
                    <p className='movie-details-year'>Release year: {movie.Year}</p>
                    <p className='movie-details-metascore'>Metascore: {movie.Metascore}</p>
                    <p className='movie-details-genre'>Genre: {movie.Genre}</p>
                    <div className='movie-details-buttons'>
     
    {isOpen && <Popup
      content={<>
        <b>Confirm Purchase</b>
        <button onClick={() => rentMovie(movie.imdbID)} className='rent-button'>Rent</button>
      </>}
      handleClose={togglePopup}
    />}
                        <button className='rent-button' onClick={togglePopup}>Rent</button>
                        <button onClick={() => buyMovie(movie.imdbID)} className='buy-button'>Buy</button>
                        <button onClick={() => addToWatchlist(movie.imdbID)} className='watchlist-button'>Add to Watchlist</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieDetails;

 /* <button onClick={rentMovie} className='rent-button'>Rent</button> */
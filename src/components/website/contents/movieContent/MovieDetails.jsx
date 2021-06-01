import './movieDetails.css';
import { useSelector } from 'react-redux';
import {db} from '../../../../firebase';
import Popup from '../../../popup/Popup'
import React, { useState } from "react";

const MovieDetails = () => {
    
    const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

    const currentUserUid = useSelector(state => state.currentUserUid);

    const movie = useSelector(state => state.currentMovie);
    // CHANGE BUTTONS ACCORDING TO PROFILE. Already bought? Already rented? Already added to watchlist?

    // BUY MOVIE
    const buyMovie = () => {
        if (currentUserUid) {
            // HERE WE HAVE TO CHECK IF USER HAS ADDED PAYMENT DETAILS
            db.collection("PURCHASED").doc(currentUserUid).set({
                //MUST CHANGE TO MAP OR ARRAY IN ORDER TO STORE SEVERAL MOVIES
                movieID: movie.Title,
                timeStamp: new Date()
            })
            .then(() => {
                console.log("buuuyyy Document successfully written!");
            })
            .catch((error) => {
                console.error("buuuyyy Error writing document: ", error);
            }); 
        } else {
            console.log('no useruid, one have to log in to buy a movie...')
        }
    }

    // RENT A MOVIE
    const rentMovie = () => {
        if (currentUserUid) {
            // HERE WE HAVE TO CHECK IF USER HAS ADDED PAYMENT DETAILS
            db.collection("RENTED").doc(currentUserUid).set({
                //MUST CHANGE TO MAP OR ARRAY IN ORDER TO STORE SEVERAL MOVIES
                movieID: movie.Title,
                timeStamp: new Date()
            })
            .then(() => {
                console.log("movie rented");
            })
            .catch((error) => {
                console.error("error renting movie", error);
            }); 
        } else {
            console.log('no useruid, one have to log in to rent a movie...')
        }
    }

    // ADD TO WATCHLIST
    const addToWatchlist = () => {
        if (currentUserUid) {
            db.collection("WATCHLIST").doc(currentUserUid).set({
                //MUST CHANGE TO ARRAY IN ORDER TO STORE SEVERAL MOVIES
                movieID: [movie.Title]
            })
            .then(() => {
                console.log("added to watchlist");
            })
            .catch((error) => {
                console.error("error adding to watchlist ", error);
            }); 
        } else {
            console.log('no useruid, one have to log in to add to watchlist...')
        }
    }

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
        <button onClick={rentMovie} className='rent-button'>Rent </button>
        <button onClick={buyMovie} className='buy-button'>Buy</button>
        
      </>}
      handleClose={togglePopup}
    />}
                        <button className='rent-button' onClick={togglePopup}>Rent</button>
                        <button className='rent-button' onClick={togglePopup}>Buy</button>
                        <button onClick={addToWatchlist} className='watchlist-button'>Add to Watchlist</button>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieDetails;

 /* <button onClick={rentMovie} className='rent-button'>Rent</button> */
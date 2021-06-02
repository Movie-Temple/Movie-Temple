import './movieDetails.css';
import { useSelector } from 'react-redux';
import {db} from '../../../../firebase';
import Popup from '../../../popup/Popup'
import React, { useState } from "react";


const MovieDetails = () => {
    
    const userID = useSelector(state => state.currentUserUid);

    const [isOpen, setIsOpen] = useState(false);
 
    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    //const currentUserUid = useSelector(state => state.currentUserUid);

    const movie = useSelector(state => state.currentMovie);
    // CHANGE BUTTONS ACCORDING TO PROFILE. Already bought? Already rented? Already added to watchlist?

   

    const rentMovie = ((movieID) => {
        db.collection("CUSTOMERS").doc(userID).get().then((doc) =>{
            if (doc.exists) {
                const rented = doc.data().rented;
                const timestamp = Date.now();
                rented[movieID] = timestamp;
                db.collection("CUSTOMERS").doc(userID).update({
                  rented
                })
                .then(() => {
                })
            } else {
                console.log("no such document")
            }
            }).catch((error) => {
            console.log("error: ", error)
        })
    });
    
    const buyMovie = ((movieID) => {
        db.collection("CUSTOMERS").doc(userID).get().then((doc) =>{
            if (doc.exists) {
                const purchased = doc.data().purchased;
                const timestamp = Date.now();
                purchased[movieID] = timestamp;
                db.collection("CUSTOMERS").doc(userID).update({
                  purchased
                })
                .then(() => {
                    console.log('Movie added to purchased in firestore')
                })
            } else {
                console.log("no such document")
            }
            }).catch((error) => {
            console.log("error: ", error)
        })
    });
    
    const addToWatchlist = ((movieID) => {
        db.collection("CUSTOMERS").doc(userID).get().then((doc) =>{
            if (doc.exists) {
                const watchlist = doc.data().watchlist;
                const timestamp = Date.now();
                watchlist[movieID] = timestamp;
                db.collection("CUSTOMERS").doc(userID).update({
                  watchlist
                })
                .then(() => {
                })
            } else {
                console.log("no such document")
            }
            }).catch((error) => {
            console.log("error: ", error)
        })
    });





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
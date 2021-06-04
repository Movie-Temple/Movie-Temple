import './movieDetails.css';
import { useSelector, useDispatch } from 'react-redux';
import {db} from '../../../../firebase';
import Popup from '../../../popup/Popup'
import React, { useState } from "react";
import MovieComments from './MovieComments';
import { addComments } from '../../../../features/currentMovieComments';
import { useEffect } from 'react';

const MovieDetails = () => {
    
    const movieComments = useSelector(state => state.movieComments);
    const userID = useSelector(state => state.currentUserUid);
    const dispatch = useDispatch();

    //rent popup
    const [rentIsOpen, setRentIsOpen] = useState(false);
    const toggleRentPopup = () => {
        setRentIsOpen(!rentIsOpen);
    }

    //buy popup
    const [buyIsOpen, setBuyIsOpen] = useState(false);
    const toggleBuyPopup = () => {
        setBuyIsOpen(!buyIsOpen);
    }

    const movie = useSelector(state => state.currentMovie);

    // Toggle comments
    const [showingComments, setShowingComments] = useState(false);
    const toggleComments = () => {
        setShowingComments(!showingComments);
        console.log("showing comments?");
        
            //getComments();
        
    }

    useEffect( () => {
        db.collection("COMMENTS").doc("aa")
        .onSnapshot((doc) => {
            
            const comments = doc.data().comments;
            let commentList = [];
            Object.keys(comments).forEach(key => {
                //const movie = movies.filter(movie => movie.imdbID === key)
                commentList.push(comments[key])
                console.log(comments); // working
                console.log();
            })
            
            dispatch(addComments(commentList));
            console.log("got comments from fb");
            console.log(commentList); // working
            //console.log(currentMovieComments);

        });
         console.log(movieComments);
     }, [])



    /*const getComments = () =>{
        
        db.collection("COMMENTS").doc("aa")
        .onSnapshot((doc) => {
            
            const comments = doc.data().comments;
            let commentList = [];
            Object.keys(comments).forEach(key => {
                //const movie = movies.filter(movie => movie.imdbID === key)
                commentList.push(comments[key])
                console.log(comments); // working
                console.log();
            })
            
            dispatch(addComments(commentList));
            console.log("got comments from fb");
            console.log(commentList); // working
            //console.log(currentMovieComments);

        });
    };*/

    const rentMovie = ((movieID) => {
        if (userID) {
            let rented = {};
            rented[movieID] = Date.now();
            db.collection('CUSTOMERS').doc(userID).set({rented}, {merge: true})
        } else {
            console.log('not logged in')
        }
    });
    
    const buyMovie = ((movieID) => {
        if (userID) {
            let purchased = {};
            purchased[movieID] = Date.now();
            db.collection('CUSTOMERS').doc(userID).set({purchased}, {merge: true})
        } else {
            console.log('not logged in')
        }
    });
    
    const addToWatchlist = ((movieID) => {
        if (userID) {
            let watchlist = {};
            watchlist[movieID] = Date.now();
            db.collection('CUSTOMERS').doc(userID).set({watchlist}, {merge: true})
        } else {
            console.log('not logged in')
        }
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
     
    {rentIsOpen && <Popup
        content={<>
        <b>Confirm Purchase</b>

        <button onClick={() => rentMovie(movie.imdbID)} className='rent-button'>Rent</button>

        </>}
        handleClose={toggleRentPopup}
    />}

    {buyIsOpen && <Popup
        content={<>
        <b>Confirm Purchase</b>

        <button onClick={() => buyMovie(movie.imdbID)} className='buy-button'>Buy</button>

        </>}
        handleClose={toggleBuyPopup}
    />}
                        <button className='rent-button' onClick={toggleRentPopup}>Rent</button>
                        <button className='buy-button' onClick={toggleBuyPopup}>Buy</button>

                        <button onClick={() => addToWatchlist(movie.imdbID)} className='watchlist-button'>Add to Watchlist</button>
                        <button onClick={() => toggleComments()}>View Comments</button>
                    </div>
                        
                    <div>
                        {showingComments ? <MovieComments /> : null}
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieDetails;
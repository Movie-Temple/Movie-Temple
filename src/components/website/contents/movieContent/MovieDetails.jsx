import './movieDetails.css';
import { useSelector, useDispatch } from 'react-redux';
import { db } from '../../../../firebase';
import Popup from '../../../popup/Popup'
import React, { useState } from "react";
import MovieComments from './MovieComments';
import { addComments } from '../../../../features/currentMovieComments';
import { useEffect } from 'react';
import { addRating } from '../../../../features/rating';
import firebase from 'firebase/app';

const MovieDetails = () => {

    // state to change text in popup to confirm purchase when rent or buy movie
    const [confirmedPurchase, setConfirmedPurchase] = useState(false);

    //const movieComments = useSelector(state => state.movieComments);
    const dispatch = useDispatch();

    const movie = useSelector(state => state.currentMovie);
    const userID = useSelector(state => state.currentUserUid);
    const rentedMovies = useSelector(state => state.rentedMovies);
    const purchasedMovies = useSelector(state => state.purchasedMovies);
    const watchlistMovies = useSelector(state => state.watchlistMovies);

    //checks if movie already exists in rented, purchased or watchlist. Sets buttons accordingly.
    const foundInRented = rentedMovies.find(findmovie => findmovie.imdbID === movie.imdbID);
    const foundInPurchased = purchasedMovies.find(findmovie => findmovie.imdbID === movie.imdbID);
    const foundInWatchlist = watchlistMovies.find(findmovie => findmovie.imdbID === movie.imdbID);


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


    // Toggle comments
    const [showingComments, setShowingComments] = useState(false);
    const toggleComments = () => {
        setShowingComments(!showingComments);
        console.log("showing comments?");
    }

    // Loading comments
    useEffect(() => {
        db.collection("COMMENTS").doc(movie.imdbID)
            .onSnapshot((doc) => {

                const comments = doc.data().comments;
                const rating = doc.data().rating;
                const total = doc.data().total;

                let ratingList = [rating, total];
                dispatch(addRating(ratingList));
                console.log(ratingList);

                let commentList = [];
                Object.keys(comments).forEach(key => {

                    commentList.push(comments[key])

                })

                dispatch(addComments(commentList));
                console.log("got comments from fb");
            });

    }, [])

    const rentMovie = ((movieID) => {
        if (userID) {
            let rented = {};
            rented[movieID] = Date.now();
            db.collection('CUSTOMERS').doc(userID).set({ rented }, { merge: true });
            setConfirmedPurchase(true);
        } else {
            console.log('not logged in')
        }
    });

    const buyMovie = ((movieID) => {
        if (userID) {
            let purchased = {};
            purchased[movieID] = Date.now();
            db.collection('CUSTOMERS').doc(userID).set({ purchased }, { merge: true })
            setConfirmedPurchase(true);
        } else {
            console.log('not logged in')
        }
    });

    const changeWatchlist = ((movieID) => {
        if (foundInWatchlist) {
            if (userID) {
                db.collection("CUSTOMERS")
                .doc(userID)
                .set({
                    watchlist: {
                        [movieID]: firebase.firestore.FieldValue.delete()
                    }
                }, { merge: true });
            }
        } else {
            if (userID) {
                let watchlist = {};
                watchlist[movieID] = Date.now();
                db.collection('CUSTOMERS').doc(userID).set({ watchlist }, { merge: true })
            } else {
                console.log('not logged in')
            }
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
                            content={
                                confirmedPurchase ?
                                    <>
                                        <b>Purchase completed!</b>
                                    </>
                                    :
                                    <>
                                        <b>Confirm Purchase</b>
                                        <button onClick={() => rentMovie(movie.imdbID)} className='rent-button'>Rent</button>
                                    </>
                            }
                            handleClose={toggleRentPopup}
                        />}

                        {buyIsOpen && <Popup
                            content={
                                confirmedPurchase ?
                                    <>
                                        <b>Purchase completed!</b>
                                    </>
                                    :
                                    <>
                                        <b>Confirm Purchase</b>
                                        <button onClick={() => buyMovie(movie.imdbID)} className='buy-button'>Buy</button>
                                    </>
                            }
                            handleClose={toggleBuyPopup}
                        />}
                        <button
                            disabled={foundInRented}
                            className={foundInRented ? 'rent-button disabled' : 'rent-button'}
                            onClick={toggleRentPopup}>{foundInRented ? 'Already rented' : 'Rent'}
                        </button>

                        <button
                            disabled={foundInPurchased}
                            className={foundInPurchased ? 'buy-button disabled' : 'buy-button'}
                            onClick={toggleBuyPopup}>{foundInPurchased ? 'Already bought' : 'Buy'}
                        </button>

                        <button
                            onClick={() => changeWatchlist(movie.imdbID)}
                            className='watchlist-button'>{foundInWatchlist ? 'Remove from Watchlist' : 'Add to Watchlist'}
                        </button>
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
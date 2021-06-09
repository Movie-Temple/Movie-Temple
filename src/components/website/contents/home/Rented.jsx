import './rented.css';
import { useDispatch, useSelector } from 'react-redux';
import PlayMovie from '../playMovie/PlayMovie';
import { useState } from 'react';
import { useHistory } from 'react-router';
import { replaceMovie } from '../../../../features/currentMovie';

const Rented = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const rentedMovies = useSelector(state => state.rentedMovies);
    

    // play movie
    const [playMovieIsOpen, setPlayMovieIsOpen] = useState(false);
    const toggleplayMovieIsOpen = () => {
        setPlayMovieIsOpen(!playMovieIsOpen);
    }

    const onPosterClick = (movie) => {
        return (
            dispatch(replaceMovie(movie)),
            history.push('/moviedetails')
        )
    }

    return (
        <div className='rented'>
            
            {rentedMovies.map((movie) => {
                const timeLeft = () => {
                    let sum = movie.rentExpires - Date.now();
                    let hours = Math.floor(sum / 3600000);
                    return (
                        hours
                    )
                }
                    return ( rentedMovies ?
                        <div className='rented-scrollerItem' key={movie.imdbID}>
                            <div>
                                <img className='rented-scrollerImg' onClick={() => {onPosterClick(movie)}} src={movie.Poster} alt={movie.Title} />
                                <button className='rented-play-button' onClick={toggleplayMovieIsOpen}>Play</button>
                                <p>{timeLeft()} hours left</p>
                            </div>

                            {playMovieIsOpen && <PlayMovie
                                handleClose={toggleplayMovieIsOpen}
                            />}
                            
                        </div>
                        : null
                    );
                })}  

        </div>
    );
}

export default Rented;
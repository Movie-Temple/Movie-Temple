import './rented.css';
import { useSelector } from 'react-redux';
import PlayMovie from '../playMovie/PlayMovie';
import { useState } from 'react';

const Rented = () => {

    const rentedMovies = useSelector(state => state.rentedMovies);

    // play movie
    const [playMovieIsOpen, setPlayMovieIsOpen] = useState(false);
    const toggleplayMovieIsOpen = () => {
        setPlayMovieIsOpen(!playMovieIsOpen);
    }

    return (
        <div className='rented'>
            
            {rentedMovies.map((movie) => {
                    return ( rentedMovies ?
                        <div className='rented-scrollerItem' key={movie.imdbID}>
                            <div>
                                <img className='rented-scrollerImg' src={movie.Poster} alt={movie.Title} />
                                <button className='rented-play-button' onClick={toggleplayMovieIsOpen}>Play</button>
                                <p>Remaining time: XX:XX</p>
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
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
                        <div >
                            <div className='rented-scrollerItem' key={movie.imdbID}>
                                <img className='rented-scrollerImg' src={movie.Poster} alt={movie.Title} />
                            </div>
                                
                            <button className='rented-play-button' onClick={toggleplayMovieIsOpen}>Play</button>
                            <p>Remaining time: XX:XX</p>


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
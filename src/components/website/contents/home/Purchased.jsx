import './purchased.css'
import { useSelector } from 'react-redux';
import PlayMovie from '../playMovie/PlayMovie';
import { useState } from 'react';

const Purchased = () => {

    const purchasedMovies = useSelector(state => state.purchasedMovies);

    // play movie
    const [playMovieIsOpen, setPlayMovieIsOpen] = useState(false);
    const toggleplayMovieIsOpen = () => {
        setPlayMovieIsOpen(!playMovieIsOpen);
    }

    return (
        <div className='purchased'>
            {purchasedMovies.map((movie) => {
                    return ( purchasedMovies ?
                        <div>
                            <div className='purchased-scrollerItem' key={movie.imdbID}>
                            <img className='purchased-scrollerImg' src={movie.Poster} alt={movie.Title} />
                            </div>
                            <button className='purchased-play-button' onClick={toggleplayMovieIsOpen}>Play</button>
                            
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

export default Purchased;


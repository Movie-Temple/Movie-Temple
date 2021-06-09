import './purchased.css'
import { useDispatch, useSelector } from 'react-redux';
import PlayMovie from '../playMovie/PlayMovie';
import { useState } from 'react';
import { replaceMovie } from '../../../../features/currentMovie';
import { useHistory } from 'react-router';

const Purchased = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const purchasedMovies = useSelector(state => state.purchasedMovies);

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
        <div className='purchased'>
            {purchasedMovies.map((movie) => {
                    return ( purchasedMovies ?
                        <div>
                            <div className='purchased-scrollerItem' key={movie.imdbID}>
                            <img className='purchased-scrollerImg' onClick={() => {onPosterClick(movie)}} src={movie.Poster} alt={movie.Title} />
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


import './watchlist.css';
import { useDispatch, useSelector } from 'react-redux';
import { replaceMovie } from "../../../../features/currentMovie";
import { useHistory } from 'react-router';

const Watchlist = () => {

    const watchlistMovies = useSelector(state => state.watchlistMovies);
    const dispatch = useDispatch();
    const history = useHistory()

    const handleClick = (movie) => {
        return (
            dispatch(replaceMovie(movie)),
            history.push('/moviedetails')
        )
    }

    return (
        <div className='watchlist'>
            {watchlistMovies.map((movie) => {
                    return ( watchlistMovies ?
                        <div className='scrollerItem' key={movie.imdbID} onClick={() => {handleClick(movie)}}>
                            <img className='scrollerImg' src={movie.Poster} alt={movie.Title} />
                        </div>
                        : null
                    );
                })}  
        </div>
    );
}

export default Watchlist;

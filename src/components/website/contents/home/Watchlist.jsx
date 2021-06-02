import { useSelector } from 'react-redux';
import './watchlist.css'

const Watchlist = () => {

    const watchlistMovies = useSelector(state => state.watchlistMovies);

    return (
        <div className='watchlist'>
            {watchlistMovies.map((movie) => {
                    return ( watchlistMovies ?
                        <div className='scrollerItem' key={movie.imdbID}>
                            <img className='scrollerImg' src={movie.Poster} alt={movie.Title} />
                        </div>
                        : null
                    );
                })}  
        </div>
    );
}

export default Watchlist;

import { useSelector } from 'react-redux';
import './watchlist.css'

const Watchlist = () => {

    const watchlistMovies = useSelector(state => state.watchlistMovies);

    return (
        <div className='watchlst'>
            
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

/*
return (
        <div className='watchlist'>
            <div className='watchlist-category-container'>
                <h3 className='watchlist-category-header'>Watch List</h3>
                <hr className='watchlist-category-breakline'/>
                <div className='watchlist-category-browser'>
                    <img className='watchlist-image' src="" alt="" />
                    <img className='watchlist-image' src="" alt="" />
                    <img className='watchlist-image' src="" alt="" />
                    <img className='watchlist-image' src="" alt="" />
                    <img className='watchlist-image' src="" alt="" />
                    <img className='watchlist-image' src="" alt="" />
                    <img className='watchlist-image' src="" alt="" />
                    <img className='watchlist-image' src="" alt="" />
                </div> 
            </div>
        </div>
    ) */
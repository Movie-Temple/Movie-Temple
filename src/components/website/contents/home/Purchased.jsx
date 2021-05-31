import './purchased.css'
import { useSelector } from 'react-redux';




const Purchased = () => {

    //const currentUserUid = useSelector(state => state.currentUserUid);
    const purchasedMovies = useSelector(state => state.purchasedMovies);
    const movies = useSelector((state) => state.movies);
    
    const lowerCase = purchasedMovies.toLowerCase;

    return (
        <div className='purchased'>
            
            {movies.map((movie) => {
                    return ((movie.Title.indexOf(purchasedMovies) !== -1) ?
                        <div className='scrollerItem' key={movie.imdbID}>
                        
                            <img className='scrollerImg' src={movie.Poster} alt={movie.Title} />
                            
                            
                        </div>
                        : null
                    );
                })}  




            

            
        </div>
    )
}

export default Purchased;


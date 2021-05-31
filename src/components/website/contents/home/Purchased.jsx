import './purchased.css'
import { useSelector } from 'react-redux';




const Purchased = () => {

    //const currentUserUid = useSelector(state => state.currentUserUid);
    const purchasedMovies = useSelector(state => state.purchasedMovies);
    const movies = useSelector((state) => state.movies);
    
    
    console.log(purchasedMovies);
    console.log(movies);
    const lowerCase = purchasedMovies.toLowerCase;

    return (
        <div className='purchased'>
            
            {movies.map((movie) => {
                    return ( movies ?
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


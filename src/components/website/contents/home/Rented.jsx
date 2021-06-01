import './rented.css';
import { useSelector } from 'react-redux';

const Rented = () => {

    const rentedMovies = useSelector(state => state.rentedMovies);
    //const movies = useSelector((state) => state.movies);

    return (
        <div className='rented'>
            
            {rentedMovies.map((movie) => {
                    return ( rentedMovies ?
                        <div className='scrollerItem' key={movie.imdbID}>
                        
                            <img className='scrollerImg' src={movie.Poster} alt={movie.Title} />
                            
                            
                        </div>
                        : null
                    );
                })}  

        </div>
    );
    
}

export default Rented;

/*
return (
        <div className='rented'>
            <div className='rented-browser'>
                RENTED COMPONENT.
                <br/>Component for side scroll goes here instead of image placeholders
                <img className='rented-image' src="" alt="" />
                <img className='rented-image' src="" alt="" />
                <img className='rented-image' src="" alt="" />
                <img className='rented-image' src="" alt="" />
            </div> 
        </div>
    )
*/
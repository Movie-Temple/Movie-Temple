import './scroller.css';
import { useHistory } from 'react-router-dom';

//import { Router, Route, Link, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { replaceMovie } from "../../../../features/currentMovie";
import { useState } from 'react';



const PersonalScroller = ({scrollerName, category}) => {

    // const movies = useSelector(state => state.movies);
    // const history = useHistory();
    // const dispatch = useDispatch();
    // const [selectedMovies, setSelectedMovies] = useState([{Poster: '', Title: 'asdf'}, {Poster: '', Title: 'fdsafs'}]);
    // const [user, setUser] = useState({purchased: ["tt0067927", "tt0113855"], rented: ["tt5109280", "tt0017136"], watchList: ["tt0133093", "tt0092890"]});
    
    // const getMoviefromID = (id) => {
    //     return (
    //         movies.filter((movie) => movie.imdbID === id)
    //     )
    // }

    // switch (category) {
    //     case "rented": {
    //         user.rented.forEach((id) => {
    //             const movieToAdd = getMoviefromID(id);
    //             setSelectedMovies(...selectedMovies + {movieToAdd})
    //         })
    //     }
    // }

    // const handleCLick = (movie) => {
    //     return (
    //         dispatch(replaceMovie(movie)),
    //         history.push('/moviedetails')
    //     )
    // }

    return ( 
        <div className='scroller'>
            <h3 className='scrollerName'>{scrollerName}</h3>
            
            <div className='scrollerWrapper'>
                 
            </div>
             
        </div>
    )
}

export default PersonalScroller;

// {selectedMovies.map((movie) => {
//     return (
//         <div className='scrollerItem' onClick={() => {handleCLick(movie)}} key={movie.imdbID}>
//             <img className='scrollerImg' src={movie.Poster} alt={movie.Title} />
//             {/* <p className='scrollerTitle'>{movie.Genre}</p> */}
//         </div>
//     );
// })} 
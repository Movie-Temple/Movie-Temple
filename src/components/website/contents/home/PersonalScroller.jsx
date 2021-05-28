import './scroller.css';
import { useHistory } from 'react-router-dom';

//import { Router, Route, Link, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { replaceMovie } from "../../../../features/currentMovie";



const PersonalScroller = ({scrollerName, movies}) => {
    const history = useHistory();
    const dispatch = useDispatch();
  
    const handleCLick = (movie) => {
        return (
            dispatch(replaceMovie(movie)),
            history.push('/moviedetails')
        )
    }

    

    return ( 
        <div className='scroller'>
            <h3 className='scrollerName'>{scrollerName}</h3>
            
            <div className='scrollerWrapper'>
                {movies.map((movie) => {
                    return (
                        <div className='scrollerItem' onClick={() => {handleCLick(movie)}} key={movie.imdbID}>
                            <img className='scrollerImg' src={movie.Poster} alt={movie.Title} />
                            {/* <p className='scrollerTitle'>{movie.Genre}</p> */}
                        </div>
                    );
                })}  
            </div>
             
        </div>
    )
}

export default PersonalScroller;
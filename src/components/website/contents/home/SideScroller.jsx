import { useEffect, useState } from "react"
import getMovie from "../../../api";
import './sideScroller.css';
import { useHistory } from 'react-router-dom';

//import { Router, Route, Link, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { replaceMovie } from "../../../../features/currentMovie";



const SideScroller = ({scrollerName, genre}) => {
    const history = useHistory();
    const movies = useSelector(state => state.movies);
    const dispatch = useDispatch();
  
  
    const handleCLick = (movie) => {
        return (
            dispatch(replaceMovie(movie)),
            history.push('/moviedetails')
        )
    }


    return ( 
        <div className='sideScroller'>
            <h3 className='scrollerName'>{scrollerName}</h3>
            
            <div className='scrollerWrapper'>
                {movies.map((movie) => {
                    return ((movie.Genre.toLowerCase().indexOf(genre) !== -1) ?
                        <div className='scrollerItem' onClick={() => {handleCLick(movie)}}>
                            <img className='scrollerImg' src={movie.Poster} alt={movie.Title} />
                            {/* <p className='scrollerTitle'>{movie.Genre}</p> */}
                        </div>
                        : null
                    );
                })}  
            </div>
             
        </div>
    )
}

export default SideScroller;
import { useEffect, useState } from "react"
import getMovie from "./api";
import './sideScroller.css';
import { useHistory } from 'react-router-dom';
import { Router, Route, Link, Switch } from 'react-router-dom';



const SideScroller = ({scrollerName, titles}) => {
    const history = useHistory();
    const [movies, setMovies] = useState([]);
    


    useEffect(() => {
        const fetchAll = async () => setMovies(
            await Promise.all(titles.map(getMovie))
        );
        fetchAll();
    }, [titles])


    return (
        <div className='sideScroller'>
            <h3 className='scrollerName'>{scrollerName}</h3>
            <div className='scrollerWrapper'>
                {movies.map((movie) => {
                    return (
                        <div className='scrollerItem' onClick={() => history.push('/moviedetails')}>
                            <img className='scrollerImg' src={movie.Poster} alt={movie.Title} />
                            {/* <p className='scrollerTitle'>{movie.Title}</p> */}
                        </div>
                    );
                    })

                }  
            </div>
             
        </div>
    )
}

export default SideScroller;
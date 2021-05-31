import './scroller.css';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { replaceMovie } from "../../../../features/currentMovie";


const PersonalScroller = ({scrollerName, category}) => {
    const history = useHistory();
    const dispatch = useDispatch();
    let content = [];

    // switch (category) {
    //     case "rented":      {content = useSelector(state => state.rentedMovies)}
    //     case "purchased":   {content = useSelector(state => state.purchasedMovies)}
    //     case "watchList":   {content = useSelector(state => state.watchList)}
    //     default:            {[]}
    // }
    content = useSelector(state => state.purchasedMovies)

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
                {content.map((movie) => {
                    return (
                    <div className='scrollerItem' onClick={() => {handleCLick(movie)}} key={movie.imdbID}>
                    <img className='scrollerImg' src={movie.Poster} alt={movie.Title} />
                    <p className='scrollerTitle'>{movie.Title}</p>
                    </div>
                );
                })} 
            </div>
        </div>
    )
}

export default PersonalScroller;


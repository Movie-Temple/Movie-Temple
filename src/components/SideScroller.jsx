import { useEffect, useState } from "react"
import getMovie from "./api";
import './sideScroller.css';



const SideScroller = ({scrollerName, titles}) => {
    const [movies, setMovies] = useState([]);
    


    useEffect(() => {
        const fetchAll = async () => setMovies(
            await Promise.all(titles.map(getMovie))
        );
        fetchAll();
    }, [titles])


    return (
        <div className='sideScroller'>{scrollerName}
            {movies.map((movie) => {
                return (
                    <div className='scrollerWrapper'>
                        <img className='scrollerImg' src={movie.Poster} alt={movie.Title} />
                        {/* <p className='scrollerTitle'>{movie.Title}</p> */}
                    </div>
                );
                })

            }   
        </div>
    )
}

export default SideScroller;
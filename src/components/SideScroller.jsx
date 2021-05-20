import { useEffect, useState } from "react"
import getMovie from "./api";




const SideScroller = ({scrollerName, titles}) => {
    const [movies, setMovies] = useState([]);
    


    useEffect(() => {
        const fetchAll = async () => setMovies(
            await Promise.all(titles.map(getMovie))
        );
        fetchAll();
    }, [titles])


    return (
        <div className='sideScroller'>
            {movies.map((movie) => {
                return (
                    <div className='scrollerItem'>
                        <img src={movie.Poster} alt={movie.Title} />
                        <p>{movie.Title}</p>
                    </div>
                );
                })

            }   
        </div>
    )
}

export default SideScroller;
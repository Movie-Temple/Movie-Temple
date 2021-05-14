import { useEffect, useState } from "react"
import getMovie from "./api";




const SideScroller = ({titles}) => {

    
    const [movies, setMovies] = useState([]);
    let content = null;

    useEffect(() => {
        let moviesTemp = [];
        
        titles.forEach(title => {
            async function fetchData() {
                const movie = await getMovie(title);
                moviesTemp.push(movie);
            }
        });
        setMovies(moviesTemp);
    }, [])

    useEffect(() => {
        content = movies.map((movie) => {
            return (
                <div className='scrollerItem'>
                    <img src={movie.Poster} alt="" />
                    <p>{movie.Title}</p>
                </div>
            )
        })
    },[movies])

   

    const scrollerItem = (movie) => {
        return (
            <div className='scrollerItem'>
                <img className='scrollerImg' src="" alt="" />
            </div>
        )
    }



    return (
        <div id='scroller'>
            
            {content}

        </div>


    )
}

export default SideScroller;
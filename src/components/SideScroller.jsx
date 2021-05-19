import { useEffect, useState } from "react"
import getMovie from "./api";




const SideScroller = ({scrollerName, titles}) => {
    const [movies, setMovies] = useState([]);
    const [content, setContent] = useState();

    useEffect(() => {
        let moviesTemp = [];
        
        titles.forEach(title => {
            async function fetchData() {
                const movie = await getMovie(title);
                moviesTemp.push(movie);
            }
            return fetchData();
        });
        setMovies(moviesTemp);
    }, [titles])
   

    useEffect(() => {
        setContent(() => {
            movies.map((movie) =>{
                return (
                    <div>
                        <img src={movie.Poster} alt="" />
                        <p>{movie.Title}</p>
                    </div>
                );
            })
        })
    })


    // useEffect(() => {
    //     console.log(movies)
    //     setContent(() => {
    //         return (
    //             movies.map((movie) => {
    //                 console.log(movie);
    //                 return (
    //                     <div className='scrollerItem'>
    //                         <img src={movie.Poster} alt={movie.Title}  />
    //                         <p>{movie.Title}</p>
    //                     </div>
    //                 );
    //             })
    //         );
    //     });
    // }, [movies])

    return (
        <div className='sideScroller'>
            {content}
        </div>
    )
}

export default SideScroller;
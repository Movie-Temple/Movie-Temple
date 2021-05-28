import './movies.css';
import GenreScroller from './GenreScroller';
import PersonalScroller from './PersonalScroller';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const Movies = () => {

    const movies = useSelector(state => state.movies);
    //const userID = useSelector(state => state.currentUserUid);
    const [user, setUser] = useState({purchased: ["tt0067927", "tt0113855"], rented: ["tt5109280", "tt0017136"], watchList: ["tt0133093", "tt0092890"]});
    
    const getMoviefromID = (id) => {
        return (
            movies.filter((movie) => {movie.imdbID === id})
        )
    }

    const getPosters = ([idList]) => {


        const movieCollection = movies.map((movie) => {
            return ((movie.imdbID === "any of ids in array") ?
                movie.Poster
                : null
            )
        })
    }

    

    return (
        <div className='categories'>
            <PersonalScroller scrollerName='Purchased' movies={user.purchased} />
            <GenreScroller scrollerName='Comedy' genre={'comedy'}/>
            <GenreScroller scrollerName='Action' genre= {'action'}/>
            <GenreScroller scrollerName='Drama' genre= {'drama'}/>
            <GenreScroller scrollerName='Adventure' genre= {'adventure'}/>
            <GenreScroller scrollerName='Sport' genre= {'sport'}/>
            <GenreScroller scrollerName='Thriller' genre= {'thriller'}/>
            
        </div>
    )

}

export default Movies;
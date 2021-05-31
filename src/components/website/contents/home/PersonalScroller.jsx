import './scroller.css';
import { useHistory } from 'react-router-dom';

//import { Router, Route, Link, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { replaceMovie } from "../../../../features/currentMovie";
import { useState } from 'react';

import { db } from '../../../../firebase'


const PersonalScroller = ({scrollerName, category}) => {
    //const uuid = useSelector(state => state.currentUserUid);
    const uuid = 'vSwz4kNz0gPxZbhD8ugqToGLwyx1';
    const movies = useSelector(state => state.movies);
    const history = useHistory();
    const dispatch = useDispatch();
    const [selectedMovies, setSelectedMovies] = useState([]);
    const [user, setUser] = useState();

    
    //console.log(movies)

    db.collection("CUSTOMERS").doc(uuid)
        .onSnapshot((doc) => {
            let purchased = doc.data().purchased;
            console.log(purchased); 


            console.log(movies)
            // Object.keys(purchased).forEach(key => 
            //     {const match = movies.filter(movie => movie.imdbID === key);
            //         setSelectedMovies(...selectedMovies, match);
            //     })
            //console.log(purchased);
            // let ids = Object.keys(purchased);
            // let timestamps = Object.values(purchased);
            // console.log(ids, timestamps);
            // for(i = 0 ; i <= ids.length ; i++ ) {
            //     const obj = {[]}
            // }
            

            // const selected = Object.keys(purchased).map(id =>
            //     movies.filter(movie => movie.imdbID === id)
            // );
            // setSelectedMovies(selected);
            // console.log(selectedMovies);
            // console.log('retrieved data:', doc.data());
    });
    

    // db.collection("CUSTOMERS").doc(uuid).collection('rented')
    // .onSnapshot((snapshot) => {
    //     snapshot.forEach((doc) => console.log(doc.data()))
    
    // });


    const getMoviefromID = (id) => {
        return (
            movies.filter((movie) => movie.imdbID === id)
        )
    }

    // switch (category) {
    //     case "rented": {
    //         user.rented.forEach((id) => {
    //             const movieToAdd = getMoviefromID(id);
    //             setSelectedMovies(...selectedMovies + {movieToAdd})
    //         })
    //     }
    // }

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
                {selectedMovies.map((movie) => {
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


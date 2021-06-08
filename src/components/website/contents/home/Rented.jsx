import './rented.css';
import { useSelector } from 'react-redux';
import PlayMovie from '../playMovie/PlayMovie';
import { useState } from 'react';
//import {db} from '../../../../firebase'

const Rented = () => {
    const userID = useSelector(state => state.currentUserUid);
    const rentedMovies = useSelector(state => state.rentedMovies);
    // let rentalExpires = 0

    // db.collection("CUSTOMERS").doc(userID).get().then((doc) => {
    //     if (doc) {
    //         console.log(doc.data().rented[])
    //     }
        
    // })

    // play movie
    const [playMovieIsOpen, setPlayMovieIsOpen] = useState(false);
    const toggleplayMovieIsOpen = () => {
        setPlayMovieIsOpen(!playMovieIsOpen);
    }

    return (
        <div className='rented'>
            
            {rentedMovies.map((movie) => {
                const timeLeft = () => {

                    return (
                        movie.rentalExpiry - Date.now()
                    )
                }
                    return ( rentedMovies ?
                        <div className='rented-scrollerItem' key={movie.imdbID}>
                            <div>
                                <img className='rented-scrollerImg' src={movie.Poster} alt={movie.Title} />
                                <button className='rented-play-button' onClick={toggleplayMovieIsOpen}>Play</button>
                                <p>Remaining time: {timeLeft()}</p>
                            </div>

                            {playMovieIsOpen && <PlayMovie
                                handleClose={toggleplayMovieIsOpen}
                            />}
                            
                        </div>
                        : null
                    );
                })}  

        </div>
    );
}

export default Rented;
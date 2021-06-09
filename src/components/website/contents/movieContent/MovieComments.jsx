import './movieComments.css';
import { useSelector} from 'react-redux';
import { db } from '../../../../firebase';
import uuid from 'react-uuid';
import { useRef, useState } from 'react';

const MovieComments = () => {
    
    const movieComments = useSelector(state => state.movieComments);
    const rating = useSelector(state => state.rating);
    const movie = useSelector(state => state.currentMovie);

    // used to disable buttons if not signed in
    const currentUserUid = useSelector(state => state.currentUserUid);

    const ratingScore = parseFloat(rating[0]/rating[1]).toFixed(2);
    
    const commentRef = useRef();
    const ratingRef = useRef();

    const [haveRated, setHaveRated] = useState(false);
    const [haveCommented, setHaveCommented] = useState(false);

    // comment func
    const leaveComments = () => {
        let comments = {};
        comments[uuid()] = commentRef.current.value;
        setHaveCommented(true);
        db.collection("COMMENTS").doc(movie.imdbID).set({comments}, {merge: true})
        commentRef.current.value = "You've commented!";
    };

    // rate func
    const leaveRating = () => {
        setHaveRated(true);
        db.collection("COMMENTS").doc(movie.imdbID).update({
            "rating": rating[0] + Number(ratingRef.current.value),
            "total": rating[1] + 1
        })
        ratingRef.current.value = "You've rated!";
    };

    return (
        <div className='movie-comments'>

            <h2>Ratings: {ratingScore} <span role="img" aria-label="star">⭐</span> ({rating[1]} voted)</h2>
            
            <input type='text' id='rating' name='rating' placeholder="0-10" ref={ratingRef} />
            <button className='movie-comment-button' onClick={leaveRating} disabled={haveRated || !currentUserUid}>Rate!</button>
            
            <h2>Comments</h2> 
            
            {movieComments.map((movie) => {
                    return ( 
                        <div>
                            {movieComments ?

                            <div className='movie-comments-comments' key={uuid()}>
                                <p>{movie}</p>
                            </div>
                            :
                            <div className='movie-comments-comments' key={uuid()}>
                                <p>No comments at the moment! Leave one?</p>
                            </div>
                            }
                        </div>
                    );
                })}  
            
                <input className='movie-comment-input' type='text' id='comment' name='comment' ref={commentRef} />
                <button className='movie-comment-button' onClick={leaveComments} disabled={haveCommented || !currentUserUid}>Comment!</button>
        </div>
    )

}

export default MovieComments;


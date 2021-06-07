import { useSelector} from 'react-redux';
import { db } from '../../../../firebase';
import uuid from 'react-uuid'
import { useRef } from 'react';

const MovieComments = () => {
    
    const movieComments = useSelector(state => state.movieComments);
    const rating = useSelector(state => state.rating);
    const ratingScore = parseFloat(rating[0]/rating[1]).toFixed(2);
    const movie = useSelector(state => state.currentMovie);
    const commentRef = useRef();
    const ratingRef = useRef();

    const leaveComments = () => {
        let comments = {};
        comments[uuid()] = commentRef.current.value;
        db.collection("COMMENTS").doc(movie.imdbID).set({comments}, {merge: true})
        console.log("comment added!");
        commentRef.current.value = "";
    };

    const leaveRating = () => {
        db.collection("COMMENTS").doc(movie.imdbID).update({
            "rating": rating[0] + Number(ratingRef.current.value),
            "total": rating[1] + 1
        })
        .then(() => {
            console.log("Document successfully updated!");
        });
        
    };


    return (
        <div className='sss'>

            <h1>Ratings: {ratingScore} <span role="img" aria-label="star">⭐</span> ({rating[1]} voted)</h1>
            
            <input type='text' id='rating' name='rating' placeholder="0-10" ref={ratingRef} /><br />
            <button onClick={leaveRating} >Leave Rating</button>
            
            <h1>Comments</h1> 
            

            {movieComments.map((movie) => {
                    return ( <div>
                         
                        {movieComments ?
                        
                             
                        <div className='hee' key={uuid()}>
                        
                            <p>- {movie}</p>
                        </div>
                        : <p>No comments at the moment! Leave one?</p>}

                        

                    </div>
                    );
                })}  
            
                <input type='text' id='comment' name='comment' ref={commentRef} /><br />
                <button onClick={leaveComments} >Leave Comment</button>
        </div>
    )

}

export default MovieComments;


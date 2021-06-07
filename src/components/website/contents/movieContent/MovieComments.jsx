import { useSelector} from 'react-redux';
import { db } from '../../../../firebase';
import uuid from 'react-uuid'
import { useRef } from 'react';

const MovieComments = () => {
    
    const movieComments = useSelector(state => state.movieComments);
    const movie = useSelector(state => state.currentMovie);
    const commentRef = useRef();

    const leaveComments = () => {
        let comments = {};
        comments[uuid()] = commentRef.current.value;
        db.collection('COMMENTS').doc(movie.imdbID).set({comments}, {merge: true})
        console.log("comment added!");
        commentRef.current.value = "";
    };



    return (
        <div className='sss'>
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
                <button onClick={leaveComments} >Leave Comments</button>
        </div>
    )

}

export default MovieComments;


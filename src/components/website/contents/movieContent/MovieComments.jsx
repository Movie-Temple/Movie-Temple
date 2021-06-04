import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
//import { db } from '../../../../firebase';
//import { addComments } from '../../../../features/currentMovieComments';
import uuid from 'react-uuid'

const MovieComments = () => {
    
    //const movie = useSelector(state => state.currentMovie);
    const dispatch = useDispatch();
    const movieComments = useSelector(state => state.movieComments);
    //const listItems = movieComments.map((d) => <li key={d.key}>{d.key} </li>);
   


    //useEffect( () => {
       /* db.collection("COMMENTS").doc("aa")
        .onSnapshot((doc) => {
            
            const comments = doc.data().comments;
            let commentList = [];
            Object.keys(comments).forEach(key => {
                //const movie = movies.filter(movie => movie.imdbID === key)
                commentList.push(key[0])
            })
            
            dispatch(addComments(commentList));
            console.log("got comments from fb");
            console.log(commentList);
            //console.log(currentMovieComments);

            

        });*/
        console.log(movieComments);
    //}, [])

    return (
        <div className='sss'>
            <h1>Commentssss</h1>
            
            {movieComments.map((movie) => {
                    return ( movieComments ?
                        <div className='hee' key={uuid()}>
                            <p>- {movie}</p>
                        </div>
                        : null
                    );
                })}  
            
            
            
        </div>
    )

}

export default MovieComments;

/*
<h1>{movieComments[0]}</h1> 
*/
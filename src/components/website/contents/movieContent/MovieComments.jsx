import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { db } from '../../../../firebase';

const MovieComments = () => {
    
    const movie = useSelector(state => state.currentMovie);
    const commentList = [];

    useEffect( () => {
        db.collection("COMMENTS").doc("aa")
        .onSnapshot((doc) => {
            const comment = doc.data().comments;
            Object.keys(comment).forEach(key => {
                //const movie = movies.filter(movie => movie.imdbID === key)
                
                commentList.push(key);
                console.log(key);
                console.log(comment);
            })
            
            console.log("got comments from fb");
            

            /*if (purchased) {
                    Object.keys(purchased).forEach(key => {
                        const movie = movies.filter(movie => movie.imdbID === key)
                        purchasedToAdd.push(movie[0])
                    })
                    dispatch(setPurchasedMovies(purchasedToAdd));
                    console.log("got purchased from fb");
                } else {
                    console.log('nothing purchased')
                } */

        });
        
    }, [])

    return (
        <div className='categories'>
            
            <h1>Commentssss</h1>
            <h1>{commentList}</h1>
            
        </div>
    )

}

export default MovieComments;
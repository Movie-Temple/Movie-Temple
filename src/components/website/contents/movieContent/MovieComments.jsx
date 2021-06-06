import { useSelector} from 'react-redux';

import uuid from 'react-uuid'

const MovieComments = () => {
    
    const movieComments = useSelector(state => state.movieComments);
    const leaveComments = () => {
        console.log("adding comments!");
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
            
            
                <button onClick={leaveComments} >Leave Comments</button>
        </div>
    )

}

export default MovieComments;


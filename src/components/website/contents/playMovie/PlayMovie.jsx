import './playMovie.css';

const PlayMovie = (props) => {

    console.log('inside playmovie')

    return (
        <div className='play-movie'>
            <span className="play-close-icon" onClick={props.handleClose}>x</span>
            <h1 className='play-movie-text'>Playing movie</h1>
        </div>
    )
}

export default PlayMovie;
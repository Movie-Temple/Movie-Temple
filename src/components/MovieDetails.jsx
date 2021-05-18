import '../movieDetails.css'

const MovieDetails = () => {

    return (
        <div className='movie-details'>
            <img className='movie-details-image' src="" alt="" />
            
            <div className='movie-details-information'>
                <h2 className='movie-details-title'>Movie Title</h2>
                <p className='movie-details-description'>Description .....</p>
                <p className='movie-details-actors'>Actors: .....</p>
                <div className='movie-details-buttons'>
                    <button className='rent-button'>Rent</button>
                    <button className='buy-button'>Buy</button>
                    <button className='watchlist-button'>Add to Watchlist</button>
                </div>
            </div>
        </div>
    )

}

export default MovieDetails;
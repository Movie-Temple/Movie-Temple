import '../movieDetails.css'

const MovieDetails = () => {

    return (
        <div className='movie-details'>
            <img className='movie-details-image' src="" alt="" />
            <h2>Movie Title</h2>
            <div className='movie-details-information'>
                <p>Description .....</p>
                <p>Actors: .....</p>
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
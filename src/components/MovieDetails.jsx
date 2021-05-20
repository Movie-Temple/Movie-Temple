import '../movieDetails.css'

const MovieDetails = ({movie}) => {

    // CHANGE BUTTONS ACCORDING TO PROFILE. Already bought? Already rented? Already added to watchlist?

    if (movie == null) {
        return (
            <div className='movie-details'>Something went wrong. Nothing to show..</div>
        )

    } else {
        return (
            <div className='movie-details'>
                <img className='movie-details-image' src={movie.Poster} alt="Poster" />
                
                <div className='movie-details-information'>
                    <h2 className='movie-details-title'>{movie.Title}</h2>
                    <p className='movie-details-description'>{movie.Plot}</p>
                    <p className='movie-details-actors'> Actors: {movie.Actors}</p>
                    <p className='movie-details-runtime'>Runtime: {movie.Runtime}</p>
                    <p className='movie-details-year'>Release year: {movie.Year}</p>
                    <p className='movie-details-metascore'>Metascore: {movie.Metascore}</p>
                    <p className='movie-details-genre'>Genre: {movie.Genre}</p>
                    <div className='movie-details-buttons'>
                        <button className='rent-button'>Rent</button>
                        <button className='buy-button'>Buy</button>
                        <button className='watchlist-button'>Add to Watchlist</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieDetails;

/*  ***** For layout testing purposes ***** /Emelie

            <div className='movie-details'>
                <img className='movie-details-image' src="https://m.media-amazon.com/images/M/MV5BOGE4NzU1YTAtNzA3Mi00ZTA2LTg2YmYtMDJmMThiMjlkYjg2XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg" alt="Poster" />
            
                <div className='movie-details-information'>
                    <h2 className='movie-details-title'>Thor</h2>
                    <p className='movie-details-description'>The warrior Thor (Hemsworth) is cast out of the fantastic realm of Asgard by his father Odin (Hopkins) for his arrogance and sent to Earth to live among humans. Falling in love with scientist Jane Foster (Portman) teaches Thor much-needed lessons, and his new-found strength comes into play as a villain from his homeland sends dark forces toward Earth.</p>
                    <p className='movie-details-actors'><span className='movie-details-subhead'>Actors</span> Chris Hemsworth, Natalie Portman, Tom Hiddleston, Anthony Hopkins</p>
                    <p className='movie-details-runtime'><span className='movie-details-subhead'>Runtime</span> 115 min</p>
                    <p className='movie-details-year'><span className='movie-details-subhead'>Release year</span> 2011</p>
                    <p className='movie-details-metascore'><span className='movie-details-subhead'>Metascore</span> 57</p>
                    <p className='movie-details-genre'><span className='movie-details-subhead'>Genre</span> Action, Adventure, Fantasy</p>
                    <div className='movie-details-buttons'>
                        <button className='rent-button'>Rent</button>
                        <button className='buy-button'>Buy</button>
                        <button className='watchlist-button'>Add to Watchlist</button>
                    </div>
                </div>
            </div>
*/
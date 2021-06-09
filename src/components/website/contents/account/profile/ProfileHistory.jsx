import '../profile/profileHistory.css'
import { useSelector } from 'react-redux';


const ProfileHistory = () => {

    const rentedMovies = useSelector(state => state.rentedMovies)
    const purchasedMovies = useSelector(state => state.purchasedMovies)

    return (
        <div className='profile-history'>
            <div className='profile-history-list'>
                <h4>Rented</h4>
                {rentedMovies.map((movie) => {
                    return ((movie) ?
                        <div key={movie.imdbID} className='profile-history-listitem'>
                            <p>{movie.Title}: {new Date(movie.rented).toLocaleDateString('sv-SE')}</p>
                        </div>
                    : null
                    )
                })}
                <h4>Purchased</h4>
                {purchasedMovies.map((movie) => {
                    return ((movie) ?
                        <div key={movie.imdbID} className='profile-history-listitem'>
                            <p>{movie.Title}: {new Date(movie.purchased).toLocaleDateString('sv-SE')}</p>
                        </div>
                    : null
                    )
                })}
            </div>
        </div>
    )
}

export default ProfileHistory;
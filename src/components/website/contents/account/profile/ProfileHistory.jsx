import '../profile/profileHistory.css'
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';


const ProfileHistory = () => {

    const [rentedData, setRentedData] = useState('');
    const [purchasedData, setPurchasedData] = useState();

    const rentedMovies = useSelector(state => state.rentedMovies)
    const purchasedMovies = useSelector(state => state.purchasedMovies)

    /*useEffect(() => {
        setPurchasedData(purchasedMovies.map(movie => 
            <li key={movie.imdbID} className='profile-history-listitem'>
                {movie.Title}: purchased {new Date(movie.purchased).toLocaleDateString('sv-SE')}
            </li>
        ));
        setRentedData(rentedMovies.map(movie => 
            <li key={movie.imdbID} className='profile-history-listitem'>
                {movie.Title}: rented {new Date(movie.rented).toLocaleDateString('sv-SE')}
            </li>
        ));
    }, [purchasedMovies, rentedMovies]);*/

    return (
        <div className='profile-history'>
            <ul className='profile-history-list'>
                {purchasedData}
                {rentedData}
            </ul>
        </div>
    )
}

export default ProfileHistory;
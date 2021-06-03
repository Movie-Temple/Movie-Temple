import '../profile/profileHistory.css'
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';


const ProfileHistory = () => {

    const [rentedData, setRentedData] = useState('');
    const [purchasedData, setPurchasedData] = useState();

    const rentedMovies = useSelector(state => state.rentedMovies)
    const purchasedMovies = useSelector(state => state.purchasedMovies)

    useEffect(() => {
        setPurchasedData(purchasedMovies.map(movie => 
            <li key={movie.imdbID} className='profile-history-listitem'>
                Purchased: {movie.Title}
            </li>
        ));
        setRentedData(rentedMovies.map(movie => 
            <li key={movie.imdbID} className='profile-history-listitem'>
                Rented: {movie.Title}
            </li>
        ));
    }, []);

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
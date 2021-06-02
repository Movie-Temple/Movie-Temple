import '../profile/profileHistory.css'
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { db } from '../../../../../firebase';


const ProfileHistory = () => {

    const currentUserUid = useSelector(state => state.currentUserUid);
    const movies = useSelector(state => state.movies);
    const [rentedData, setRentedData] = useState('');

    const [historyData, setHistoryData] = useState('');

    useEffect(() => {
        db.collection("CUSTOMERS").doc(currentUserUid)
            .onSnapshot((doc) => {
                setRentedData(doc.data().rented)
            });
    }, [])

    /*useEffect(() => {

        setHistoryData(rentedData.map( item => 
            <div className='test' key={item}>Test</div>
        ));
    }, [rentedData]);*/


    return (
        <div className='profile-history'>
            {historyData}
            history data
        </div>
    )
}

export default ProfileHistory;

/*
            <table className='profile-history-table'>
                <tr className='table-header'>
                    <th>Movie</th>
                    <th>Event</th>
                    <th>Date</th>
                </tr>
                <tr>
                    <td>Movie1</td>
                    <td>Purchased</td>
                    <td>2021-05-16</td>
                </tr>
                <tr>
                    <td>Movie2</td>
                    <td>Rented</td>
                    <td>2021-05-16</td>
                </tr>
            </table>
*/
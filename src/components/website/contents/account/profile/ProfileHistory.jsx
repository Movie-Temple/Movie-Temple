//import './profileHistory.css'

const ProfileHistory = () => {

    

    return (
        <div className='profile-history'>
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
        </div>
    )
}

export default ProfileHistory;
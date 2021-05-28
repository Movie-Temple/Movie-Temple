import './profile.css';
import { useAuth } from '../../../../../contexts/AuthContext';

const Profile = () => {

    const { signout } = useAuth();

    return (
        <div className='profile'>
            <div className='profile-headings-container'>
                <h2 className='profile-heading'>Profile</h2>

                <button onClick={signout}>Sign Out</button>

                <div className='profile-sub-headings-container'>
                    <h3 className='profile-sub-heading'>History</h3>
                    <h3 className='profile-sub-heading'>Settings</h3>
                </div>
            </div>
            <hr className='profile-breakline'/>
            <div className='profile-container'>
                <div className='profile-image-name-container'>
                    <img className='profile-image' src="" alt="profile pic" />
                    <h4 className='profile-name'>Name</h4>
                </div>
                <div className='profile-history-settings-container'>
                    History or settings component goes here
                </div>
            </div>

        </div>
    )
}

export default Profile;
import './profile.css';
import { useAuth } from '../../../../../contexts/AuthContext';
import { useState } from 'react';
import ProfileHistory from './ProfileHistory';
import ProfileSettings from './ProfileSettings';
import Avatar from '../../../../../../src/UserAvatar.png'
import { useSelector } from 'react-redux';

const Profile = () => {

    const { signout } = useAuth();

    const [showSettings, setShowSettings] = useState(true);

    const toggleShowSettings = () => {
        setShowSettings(!showSettings);
        console.log('show settings:', showSettings);
    }

    const currentUserUid = useSelector(state => state.currentUserUid);

    const [userData, setUserData] = useState('');

    /*const getUserData = () => {
        console.log("get user data");

        db.collection("CUSTOMERS").doc(currentUserUid)
            .onSnapshot((doc) => {
                const result = doc.data().purchased;
                let moviesToAdd = [];
                Object.keys(result).forEach(key => {
                    const movie = movies.filter(movie => movie.imdbID === key)
                    moviesToAdd.push(movie[0])
                })
                dispatch(setPurchasedMovies(moviesToAdd));

                console.log(moviesToAdd);
                console.log(result);
                // console.log("Wrote in Firestore for purchased movie");
                // console.log("Purchased Tab Current data: ", doc.data().timeStamp);
            });
    }*/

    return (
        <div className='profile'>
            <div className='profile-headings-container'>
                <h2 className='profile-heading'>Profile</h2>

                

                <div className='profile-sub-headings-container'>
                    <h3 className={showSettings ? 'profile-sub-heading selected' : 'profile-sub-heading'} onClick={toggleShowSettings}>Settings</h3>
                    <h3 className={showSettings ? 'profile-sub-heading' : 'profile-sub-heading selected'} onClick={toggleShowSettings}>History</h3>
                </div>
            </div>
            <hr className='profile-breakline'/>
            <div className='profile-container'>
                <div className='profile-image-name-container'>
                    <img className='profile-image' src={Avatar} alt="profile pic" />
                    <h4 className='profile-name'>Name</h4>
                    <button onClick={signout}>Sign Out</button>
                </div>
                <div className='profile-history-settings-container'>
                    {showSettings ? <ProfileSettings /> : <ProfileHistory />}
                </div>
            </div>

        </div>
    )
}

export default Profile;
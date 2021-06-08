import { useState } from 'react';
import { useHistory } from "react-router-dom";
import { AppBar, Tabs, Tab } from '@material-ui/core';
import Movies from './Movies';
import Purchased from './Purchased';
import Rented from './Rented';
import WatchList from './Watchlist';
import './homeTabs.css';
import { useSelector} from 'react-redux';
import SignIn from '../account/signIn/SignIn';
import SignUp from '../account/signUp/SignUp';
import { AuthProvider } from '../../../../contexts/AuthContext';

const Home = () => {

    const currentUserUid = useSelector(state => state.currentUserUid);
    const history = useHistory();

    //try to sign in/out toggle
    const [showSignIn, setShowSignIn]  = useState(true);
    const toggleShowSignIn = () => {
        setShowSignIn(!showSignIn);
    }

    //try to history push
    const linkToAccount = () => {
        history.push("/Account");
    }

    const tabNameToIndex = {
        0: "Movies",
        1: "Purchased",
        2: "Rented",
        3: "WatchList"
    };

    const [selectedTab, setSelectedTab] = useState(0);
    const handleChange = (event, newValue) => {
        history.push(`/Home/${tabNameToIndex[newValue]}`);
        setSelectedTab(newValue);
    };



    return (
        <div>
            <AppBar position="static">

                <Tabs className='tabs' value={selectedTab} onChange={handleChange} variant='fullWidth'>
                    <Tab className={selectedTab === 0 ? 'selectedTab' : ''} label="Movies" />
                    <Tab className={selectedTab === 1 ? 'selectedTab' : ''} label="Purchased" />
                    <Tab className={selectedTab === 2 ? 'selectedTab' : ''} label="Rented" />
                    <Tab className={selectedTab === 3 ? 'selectedTab' : ''} label="Watchlist" />
                </Tabs>

            </AppBar>
            
            <AuthProvider>
            
            { currentUserUid ? 
                <div>
                    {selectedTab === 0 && <Movies />}
                    {selectedTab === 1 && <Purchased />}
                    {selectedTab === 2 && <Rented />}
                    {selectedTab === 3 && <WatchList />}
                </div> 
                : 
                <div>
                    {selectedTab === 0 && <Movies />}
                    {selectedTab === 1 && <SignIn linkToAccount={linkToAccount}/>}
                    {selectedTab === 2 && <SignIn linkToAccount={linkToAccount}/>}
                    {selectedTab === 3 && <SignIn linkToAccount={linkToAccount}/>}
                </div>}

            </AuthProvider>

        </div>
    )
}

export default Home;

/* 
    const [showSignIn, setShowSignIn]  = useState(true);

    const toggleShowSignIn = () => {
        setShowSignIn(!showSignIn);
    }

toggleShowSignIn={toggleShowSignIn} 

{showSignIn ? <SignIn toggleShowSignIn={toggleShowSignIn}/> : <SignUp toggleShowSignIn={toggleShowSignIn}/>}

*/
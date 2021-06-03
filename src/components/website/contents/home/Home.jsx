import { useState } from 'react';
import { useHistory } from "react-router-dom";
import { AppBar, Tabs, Tab } from '@material-ui/core';
import Movies from './Movies';
import Purchased from './Purchased';
import Rented from './Rented';
import WatchList from './Watchlist';
import './homeTabs.css';
//import { db } from '../../../../firebase';
import { useSelector} from 'react-redux';
//import { setPurchasedMovies } from '../../../../features/purchasedMovies';
//import { setRentedMovies } from '../../../../features/rentedMovies';
//import { setWatchlistMovies } from '../../../../features/watchlistMovies';
import SignIn from '../account/signIn/SignIn';
import { AuthProvider } from '../../../../contexts/AuthContext';

const Home = () => {

    const currentUserUid = useSelector(state => state.currentUserUid);
    //const dispatch = useDispatch();
    const history = useHistory();
    //const movies = useSelector((state) => state.movies);

    //const { match } = props;
    //const { params } = match;
    //const { page } = params;

    const tabNameToIndex = {
        0: "Movies",
        1: "Purchased",
        2: "Rented",
        3: "WatchList"
    };
    /*
    const indexToTabName = {
        Movies: 0,
        Purchased: 1,
        Rented: 2,
        WatchList: 3
    }; */

    const [selectedTab, setSelectedTab] = useState(0);
    const handleChange = (event, newValue) => {
        history.push(`/Home/${tabNameToIndex[newValue]}`);
        setSelectedTab(newValue);
    };


    


    // const getPurchased = () => {
    //     if (currentUserUid) {
    //         db.collection("CUSTOMERS").doc(currentUserUid)
    //         .onSnapshot((doc) => {
    //                 const result = doc.data().purchased;
    //                 let moviesToAdd = [];
    //                 if (result) {
    //                     Object.keys(result).forEach(key => {
    //                         const movie = movies.filter(movie => movie.imdbID === key)
    //                         moviesToAdd.push(movie[0])
    //                     })
    //                     dispatch(setPurchasedMovies(moviesToAdd));
    //                     console.log("got purchased");
    //                 } else {
    //                     console.log('nothing there')
    //                 }
    //         });
    //     }
    // }



    // const getRented = () => {
    //     if (currentUserUid) {
    //         db.collection("CUSTOMERS").doc(currentUserUid)
    //         .onSnapshot((doc) => {
    //             const result = doc.data().rented;
    //             let rentedMoviesToAdd = [];
    //             if (result) {
    //                 Object.keys(result).forEach(key => {
    //                     const movie = movies.filter(movie => movie.imdbID === key)
    //                     rentedMoviesToAdd.push(movie[0])
    //                 })
    //                 dispatch(setRentedMovies(rentedMoviesToAdd));
    //                 console.log("got rented");
    //             } else {
    //                 console.log('nothing there')
    //             }
    //         });
    //     }
    // }

    // const getWatchlist = () => {
    //     if (currentUserUid) {
    //         db.collection("CUSTOMERS").doc(currentUserUid)
    //         .onSnapshot((doc) => {
    //             const result = doc.data().watch;
    //             let watchlistToAdd = [];
    //             if (result) {
    //                 Object.keys(result).forEach(key => {
    //                     const movie = movies.filter(movie => movie.imdbID === key)
    //                     watchlistToAdd.push(movie[0])
    //                 })
    //                 dispatch(setWatchlistMovies(watchlistToAdd));
    //                 console.log("got watchlist");
    //             } else {
    //                 console.log('nothing there')
    //             }
    //         });
    //     }
        
    // }



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
            {selectedTab === 0 && <Movies />}
            
            { currentUserUid ? <div>
            {selectedTab === 1 && <Purchased />}
            {selectedTab === 2 && <Rented />}
            {selectedTab === 3 && <WatchList />}
            </div> : <div> <SignIn /> </div>}
            
            </AuthProvider>

        </div>
    )
}

export default Home;
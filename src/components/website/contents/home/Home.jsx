import { useState } from 'react';
import { useHistory } from "react-router-dom";
import { AppBar, Tabs, Tab } from '@material-ui/core';
import Movies from './Movies';
import Purchased from './Purchased';
import Rented from './Rented';
import WatchList from './Watchlist';
import './homeTabs.css';
import { db } from '../../../../firebase';
import { useSelector, useDispatch } from 'react-redux';
import { setPurchasedMovies } from '../../../../features/purchasedMovies';
import { setRentedMovies } from '../../../../features/rentedMovies';
import { setWatchlistMovies } from '../../../../features/watchlistMovies';

const Home = () => {

    const currentUserUid = useSelector(state => state.currentUserUid);
    const dispatch = useDispatch();
    const history = useHistory();
    const movies = useSelector((state) => state.movies);

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


    const getPurchased = () => {
        console.log("get purchased!");

        db.collection("CUSTOMERS").doc("vSwz4kNz0gPxZbhD8ugqToGLwyx1")
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
        

    }



    const getRented = () => {
        console.log("get rented!");

        db.collection("CUSTOMERS").doc("vSwz4kNz0gPxZbhD8ugqToGLwyx1")
            .onSnapshot((doc) => {
                const result = doc.data().rented;
                let rentedMoviesToAdd = [];
                Object.keys(result).forEach(key => {
                    const movie = movies.filter(movie => movie.imdbID === key)
                    rentedMoviesToAdd.push(movie[0])
                })
                dispatch(setRentedMovies(rentedMoviesToAdd));


                console.log(rentedMoviesToAdd);
                console.log(result);

                
                // console.log("Wrote in Firestore for purchased movie");
                // console.log("Purchased Tab Current data: ", doc.data().timeStamp);
                
            });
        

    }

    const getWatchlist = () => {
        console.log("get watchlist!");

        db.collection("CUSTOMERS").doc("vSwz4kNz0gPxZbhD8ugqToGLwyx1")
            .onSnapshot((doc) => {
                const result = doc.data().watch;
                let watchlistToAdd = [];
                Object.keys(result).forEach(key => {
                    const movie = movies.filter(movie => movie.imdbID === key)
                    watchlistToAdd.push(movie[0])
                })
                dispatch(setWatchlistMovies(watchlistToAdd));


                console.log(watchlistToAdd);
                console.log(result);

            });
        

    }



    return (
        <div>
            <AppBar position="static">

                <Tabs className='tabs' value={selectedTab} onChange={handleChange} variant='fullWidth'>
                    <Tab className={selectedTab === 0 ? 'selectedTab' : ''} label="Movies" />
                    <Tab onClick={getPurchased} className={selectedTab === 1 ? 'selectedTab' : ''} label="Purchased" />
                    <Tab onClick={getRented} className={selectedTab === 2 ? 'selectedTab' : ''} label="Rented" />
                    <Tab onClick={getWatchlist} className={selectedTab === 3 ? 'selectedTab' : ''} label="Watchlist" />
                </Tabs>

            </AppBar>
            {selectedTab === 0 && <Movies />}
            {selectedTab === 1 && <Purchased />}
            {selectedTab === 2 && <Rented />}
            {selectedTab === 3 && <WatchList />}

        </div>
    )
}

export default Home;
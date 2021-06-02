


import { useSelector } from 'react-redux';
import {db} from '../../../../../firebase';


const userID = useSelector(state => state.currentUserUid);

const rentMovie = ((movieID) => {
    db.collection("CUSTOMERS").doc(userID).get().then((doc) =>{
        if (doc.exists) {
            const rented = doc.data().rented;
            const timestamp = Date.now();
            rented[movieID] = timestamp;
            db.collection("CUSTOMERS").doc(userID).update({
              rented
            })
            .then(() => {
            })
        } else {
            console.log("no such document")
        }
        }).catch((error) => {
        console.log("error: ", error)
    });
});

const buyMovie = ((movieID) => {
    db.collection("CUSTOMERS").doc(userID).get().then((doc) =>{
        if (doc.exists) {
            const purchased = doc.data().purchased;
            const timestamp = Date.now();
            purchased[movieID] = timestamp;
            db.collection("CUSTOMERS").doc(userID).update({
              purchased
            })
            .then(() => {
                console.log('Movie added to purchased in firestore')
            })
        } else {
            console.log("no such document")
        }
        }).catch((error) => {
        console.log("error: ", error)
    });
});

const addToWatchlist = ((movieID) => {
    db.collection("CUSTOMERS").doc(userID).get().then((doc) =>{
        if (doc.exists) {
            const watchlist = doc.data().watchlist;
            const timestamp = Date.now();
            watchlist[movieID] = timestamp;
            db.collection("CUSTOMERS").doc(userID).update({
              watchlist
            })
            .then(() => {
            })
        } else {
            console.log("no such document")
        }
        }).catch((error) => {
        console.log("error: ", error)
    });
});


const getRented = () => {
    db.collection("CUSTOMERS").doc(userID)
        .onSnapshot((doc) => {
            const result = doc.data().rented;
            let rentedMoviesToAdd = [];
            if (result) {
                Object.keys(result).forEach(key => {
                    const movie = movies.filter(movie => movie.imdbID === key)
                    rentedMoviesToAdd.push(movie[0])
                })
                dispatch(setRentedMovies(rentedMoviesToAdd));
            }  

            //test, ska bort
            const timestamp = Object.values(result);
            console.log(timestamp[0]);
            const formattedTime = Intl.DateTimeFormat('sv-SE', {dateStyle: 'full', timeStyle: 'short'}).format(timestamp[0])
            console.log(formattedTime);
            
    });
}


const getPurchased = () => {
    db.collection("CUSTOMERS").doc(userID)
        .onSnapshot((doc) => {
            const result = doc.data().purchased;
            let moviesToAdd = [];
            if (result) {
                Object.keys(result).forEach(key => {
                    const movie = movies.filter(movie => movie.imdbID === key)
                    moviesToAdd.push(movie[0])
                })
                dispatch(setPurchasedMovies(moviesToAdd));
            }
    });
}



const getWatchlist = () => {
    db.collection("CUSTOMERS").doc(userID)
        .onSnapshot((doc) => {
            const result = doc.data().watchlist;
            let watchlistToAdd = [];
            if (result) {
                Object.keys(result).forEach(key => {
                    const movie = movies.filter(movie => movie.imdbID === key)
                    watchlistToAdd.push(movie[0])
                })
                dispatch(setWatchlistMovies(watchlistToAdd));
            }
    });
}

///remove
//create a timestamp in unix time format:
const timestamp = Date.now()
//format timestamp to date and time in Sweden corrected for daylight saving changes (to show date/time on screen):
const formattedTime = Intl.DateTimeFormat('sv-SE', {dateStyle: 'full', timeStyle: 'short'}).format(timestamp)



export {rentMovie, buyMovie, addToWatchlist, getPurchased, getRented, getWatchlist};
import './App.css';
import WebsiteRoute from './components/website/WebsiteRoute'
import titles from './components/movieDb';
import { useState, useEffect } from 'react';
import getMovie from './components/api'
import { useDispatch, useSelector} from 'react-redux';
import {addMovies} from './features/movies';
import {db} from './firebase'
import { setPurchasedMovies } from './features/purchasedMovies';
import { setRentedMovies } from './features/rentedMovies';
import { setWatchlistMovies } from './features/watchlistMovies';
import { setBankCard } from './features/bankCard';


function App() {
  const dispatch = useDispatch();
  const [movies, setMovies] = useState([]);
  const currentUserUid = useSelector(state => state.currentUserUid);
  
  useEffect(() => {
    const fetchAll = async () => setMovies(
      await Promise.all(titles.map(getMovie))
        
    );
    fetchAll();
    
  }, [])

  useEffect(() => {
    dispatch(addMovies(movies))
    
  }, [movies, dispatch])


  

  const getMovieLists = () => {
    if (currentUserUid) {
        db.collection("CUSTOMERS").doc(currentUserUid)
        .onSnapshot((doc) => {
                const purchased = doc.data().purchased;
                const rented = doc.data().rented;
                const watchlist = doc.data().watchlist;
                const bankCard = doc.data().bankCard;
                let purchasedToAdd = [];
                let rentedToAdd = [];
                let watchlistToAdd = [];
                let tempMovies = movies.map(movie => ({...movie}));

                if (purchased) {
                    Object.keys(purchased).forEach(key => {
                        const movie = tempMovies.find(movie => movie.imdbID === key)
                        movie.purchased = purchased[key];
                        purchasedToAdd.push(movie)
                    })
                    dispatch(setPurchasedMovies(purchasedToAdd));
                } else {
                    console.log('nothing purchased')
                }

                if (rented) {

                  console.log(tempMovies);
                  Object.keys(rented).forEach(key => {
                    const movie = tempMovies.find(movie => movie.imdbID === key)
                    movie.rented = rented[key];
                    movie.rentExpires = rented[key] + 172800000;
                    if (movie.rentExpires > Date.now()) {
                      rentedToAdd.push(movie)
                    }
                  })
                  dispatch(setRentedMovies(rentedToAdd));

                } else {
                    console.log('no rentals')
                }

                if (watchlist) {
                    Object.keys(watchlist).forEach(key => {
                        const movie = tempMovies.find(movie => movie.imdbID === key)
                        movie.addedToWatchlist = watchlist[key];
                        watchlistToAdd.push(movie)
                    })
                    dispatch(setWatchlistMovies(watchlistToAdd));
                } else {
                    console.log('nothing in watchlist')
                }

                if (bankCard) {
                  dispatch(setBankCard(bankCard));
                }
        });
    }
}

if (currentUserUid) {
    getMovieLists();
} else {
    console.log('not logged in, not getting personal lists')
}

  return (
  
    <div className="App">
      <WebsiteRoute />
    </div>

  );
}

export default App;


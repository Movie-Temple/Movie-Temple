import './App.css';
import WebsiteRoute from './components/website/WebsiteRoute'

//import ApiTemplates from './components/ApiTemplates'
//import Navbar from './components/navigation/Navbar';
//import './components/navigation/navbar.css';
//import ApiTemplates from './components/ApiTemplates';
//import SideScroller from './components/SideScroller';
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

                if (purchased) {
                    Object.keys(purchased).forEach(key => {
                        const movie = movies.filter(movie => movie.imdbID === key)
                        purchasedToAdd.push(movie[0])
                    })
                    dispatch(setPurchasedMovies(purchasedToAdd));
                } else {
                    console.log('nothing purchased')
                }

                if (rented) {
                    Object.keys(rented).forEach(key => {
                        const movie = movies.filter(movie => movie.imdbID === key)
                        console.log(rented[key])
                        if (rented[key] + 172800000 > Date.now()) {
                          rentedToAdd.push(movie[0])
                        }
                    })
                    dispatch(setRentedMovies(rentedToAdd));
                } else {
                    console.log('nothing rented')
                }

                if (watchlist) {
                    Object.keys(watchlist).forEach(key => {
                        const movie = movies.filter(movie => movie.imdbID === key)
                        watchlistToAdd.push(movie[0])
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


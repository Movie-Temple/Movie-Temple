import SignUp from './signUp/SignUp';
import { Container } from 'react-bootstrap';
import {AuthProvider} from '../../../../contexts/AuthContext';
import {useDispatch, useSelector} from 'react-redux';
import Profile from './profile/Profile';
import SignIn from './signIn/SignIn';
import { useEffect, useState } from 'react';
import {db} from '../../../../firebase';
import { setPurchasedMovies } from '../../../../features/purchasedMovies';
import { setRentedMovies } from '../../../../features/rentedMovies';
import { setWatchlistMovies } from '../../../../features/watchlistMovies';

const AccountContainer = () =>  {
    const dispatch = useDispatch();
    const movies = useSelector((state) => state.movies);
    const userID = useSelector(state => state.currentUserUid);
    
    const [showSignIn, setShowSignIn]  = useState(true);

    const toggleShowSignIn = () => {
        setShowSignIn(!showSignIn);
        console.log(showSignIn)
    }


    useEffect(() => {
        if (userID) {
            getRented();
            getPurchased();
            getWatchlist();
        }
    }, [userID])

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
                    console.log('got rented')
                }  
        })
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
                    console.log('got purchased')
                }
        })
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
                console.log('got watchlist')
        }})
    }

    
    return (

    <div>
        {userID ?
        
        <div>
            <AuthProvider>
                <Container >

                    <div >
                        <Profile />
                    </div>

                </Container>
            </AuthProvider>
        </div>
        
        : 
        
        <div>
            <AuthProvider>
                <Container >

                    <div >
                        {showSignIn ? <SignIn toggleShowSignIn={toggleShowSignIn}/> : <SignUp toggleShowSignIn={toggleShowSignIn}/>}
                    </div>

                </Container>
            </AuthProvider>
        </div>
        }
        </div>

        )
}

export default AccountContainer;
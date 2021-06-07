import { combineReducers } from "redux";
import { reducer as moviesReducer} from './movies';
import { reducer as currentMovieReducer} from './currentMovie';
import { reducer as searchTermReducer} from './searchTerm';
import { reducer as currentUserReducer} from './currentUser';
import {reducer as purchasedMoviesReducer} from './purchasedMovies';
import { reducer as rentedMoviesReducer } from './rentedMovies';
import { reducer as watchlistMoviesReducer } from './watchlistMovies';
import { reducer as bankCardReducer } from './bankCard';
import { reducer as currentMovieCommentsReducer } from './currentMovieComments';

const rootReducer = combineReducers({
    movies: moviesReducer,
    currentMovie: currentMovieReducer,
    searchTerm:  searchTermReducer,
    currentUserUid: currentUserReducer,
    purchasedMovies: purchasedMoviesReducer,
    rentedMovies: rentedMoviesReducer,
    watchlistMovies: watchlistMoviesReducer,
    bankCard: bankCardReducer,
    movieComments: currentMovieCommentsReducer
});


export {rootReducer};
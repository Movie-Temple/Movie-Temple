import { combineReducers } from "redux";
import { reducer as moviesReducer} from './movies';
import { reducer as currentMovieReducer} from './currentMovie';
import { reducer as searchTermReducer} from './searchTerm';
import { reducer as currentUserReducer} from './currentUser';
import {reducer as purchasedMoviesReducer} from './purchasedMovies';



const rootReducer = combineReducers({
    movies: moviesReducer,
    currentMovie: currentMovieReducer,
    searchTerm:  searchTermReducer,
    currentUserUid: currentUserReducer,
    purchasedMovies: purchasedMoviesReducer
});


export {rootReducer};
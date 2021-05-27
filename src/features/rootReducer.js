import { combineReducers } from "redux";
import { reducer as moviesReducer} from './movies';
import { reducer as currentMovieReducer} from './currentMovie';
import { reducer as searchTermReducer} from './searchTerm';
import { reducer as currentUserReducer} from './currentUser';




const rootReducer = combineReducers({
    movies: moviesReducer,
    currentMovie: currentMovieReducer,
    searchTerm:  searchTermReducer,
    currentUserUid: currentUserReducer
});


export {rootReducer};
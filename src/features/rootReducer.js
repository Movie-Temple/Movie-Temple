import { combineReducers } from "redux";
import { reducer as moviesReducer} from './movies';
import { reducer as currentMovieReducer} from './currentMovie';
//import counterReducer from './counter/counterSlice';




const rootReducer = combineReducers({
    movies: moviesReducer,
    currentMovie: currentMovieReducer,
    //counter: counterReducer
});


export {rootReducer};
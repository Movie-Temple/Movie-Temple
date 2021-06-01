import { createAction } from "@reduxjs/toolkit";


const setWatchlistMovies = createAction('set watchlist movies')
const initialState = [];

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'set watchlist movies':
            return action.payload;
        default:
            return state;
    }
};

export {reducer, setWatchlistMovies}; 
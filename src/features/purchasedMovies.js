import { createAction } from "@reduxjs/toolkit";


const setPurchasedMovies = createAction('set purchsed movies')
const initialState = '';

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'set purchsed movies':
            return action.payload;
        default:
            return state;
    }
};

export {reducer, setPurchasedMovies};
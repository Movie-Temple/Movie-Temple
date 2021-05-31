import { createAction } from "@reduxjs/toolkit";


const setPurchasedMovies = createAction('set purchased movies')
const initialState = [];

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'set purchased movies':
            return action.payload;
        default:
            return state;
    }
};

export {reducer, setPurchasedMovies};
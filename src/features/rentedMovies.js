import { createAction } from '@reduxjs/toolkit';

const setRentedMovies = createAction('set rented movies');
const initialState = [];

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'set rented movies': return action.payload;
        default: return state;
    }
};

export { reducer, setRentedMovies }; 

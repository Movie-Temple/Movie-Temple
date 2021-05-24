



import { createAction, createReducer } from "@reduxjs/toolkit";



const addMovies = createAction('add movies');

const initialState = [];



const reducer = createReducer(initialState, {
    [addMovies] : (state, action) => (
        action.payload
    )
});


export {addMovies, reducer};
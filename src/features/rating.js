import { createAction, createReducer } from "@reduxjs/toolkit";



const addRating = createAction('add rating');

const initialState = [];



const reducer = createReducer(initialState, {
    [addRating] : (state, action) => (
        action.payload
    )
});


export {addRating, reducer};
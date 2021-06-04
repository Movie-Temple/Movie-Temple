import { createAction, createReducer } from "@reduxjs/toolkit";



const addComments = createAction('add comments');

const initialState = [];



const reducer = createReducer(initialState, {
    [addComments] : (state, action) => (
        action.payload
    )
});


export {addComments, reducer};
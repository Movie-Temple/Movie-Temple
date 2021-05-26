import { createAction, createReducer } from "@reduxjs/toolkit";


const replaceSearchTerm = createAction('replace searchterm');

const inititalState = '';



const reducer = createReducer(inititalState, {
    [replaceSearchTerm] : (state, action) => (
        action.payload
    )
});

export {replaceSearchTerm, reducer};
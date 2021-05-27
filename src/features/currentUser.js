import { createAction } from "@reduxjs/toolkit";


const setCurrentUserUid = createAction('set current user uid')
const initialState = '';

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'set current user uid':
            return action.payload;
        default:
            return state;
    }
};

export {reducer, setCurrentUserUid};
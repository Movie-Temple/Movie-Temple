import { createAction } from "@reduxjs/toolkit";


const signIn = createAction('SIGN_IN')

const reducer = (state = false, action) => {
    switch(action.type) {
        case 'SIGN_IN':
            return !state;
        default:
            return state;
    }
};

export {reducer, signIn};
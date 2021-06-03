import { createAction } from "@reduxjs/toolkit";


const setBankCard = createAction('set bank card')
const initialState = '';

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'set bank card':
            return action.payload;
        default:
            return state;
    }
};

export {reducer, setBankCard};
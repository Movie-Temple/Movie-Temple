import { createAction, createReducer } from "@reduxjs/toolkit";


const replaceMovie = createAction('replace movie');

const inititalState = {
    Title: '',
    Poster: '',
    Plot: '',
    Actors: '',
    Runtime: '',
    Year: '',
    Metascore: '',
    Genre: '',
    imdbID: ''
};



const reducer = createReducer(inititalState, {
    [replaceMovie] : (state, action) => (
        {
            Title: action.payload.Title,
            Poster: action.payload.Poster,
            Plot: action.payload.Plot,
            Actors: action.payload.Actors,
            Runtime: action.payload.Runtime,
            Year: action.payload.Year,
            Metascore: action.payload.Metascore,
            Genre: action.payload.Genre,
            imdbID: action.payload.imdbID
        }
    )
});

export {replaceMovie, reducer};
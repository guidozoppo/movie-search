/**
 * Este archivo son los Slices, es lo mismo que se en el archivo de movies.js de la carpeta reducers, pero 
 * se fusiona todo en uno reducers + slices.
*/

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isFetchingMovieRatings: false,
    isFetchingMovieDetail: false,
    isLoading: true,
    errorFetchingMovieDetail: null,
    errorFetchingMovieRatings: null,
    successFetchingMovieRatings: null,
    successFetchingMovieDetail: null,
    ratings: {},
    movieDetail: {},
};

const moviesSlice = createSlice({
    name: 'movies-slice',
    initialState,
    reducers: {
        startFetchMovieRatings(state, action) {
            state.isLoading = false;
            state.isFetchingMovieRatings = true;
        },
        successFetchMovieRatings(state, action) {
            state.isLoading = false;
            state.isFetchingMovieRatings = false;
            state.ratings = action.payload.data;
            state.successFetchingMovieRatings = true;
            state.errorFetchingMovieRatings = null;
        },
        errorFetchMovieRatings(state, action) {
            state.isLoading = false;
            state.isFetchingMovieRatings = false;
            state.ratings = {};
            state.successFetchingMovieRatings = false;
            state.errorFetchingMovieRatings = action.payload.error;
        },
        startFetchMovieDetail(state, action) {
            state.isFetchingMovieDetail = true;
        },
        successFetchMovieDetail(state, action) {
            state.successFetchingMovieDetail = true;
            state.errorFetchingMovieDetail = null;
            state.movieDetail = action.payload;
            state.isFetchingMovieDetail = false; 
        },
        errorFetchMovieDetail(state, action) {
            state.isFetchingMovieDetail = false;
            state.successFetchingMovieDetail = false;
            state.errorFetchingMovieDetail = action.payload.error;
            state.movieDetail = {}; 
        },
    }
});

const { actions, reducer } = moviesSlice;
const { 
    startFetchMovieRatings,
    successFetchMovieRatings,
    errorFetchMovieRatings,
    startFetchMovieDetail,
    successFetchMovieDetail,
    errorFetchMovieDetail,
 } = actions;

 export {
    startFetchMovieRatings,
    successFetchMovieRatings,
    errorFetchMovieRatings,
    startFetchMovieDetail,
    successFetchMovieDetail,
    errorFetchMovieDetail
 };

 export default reducer;
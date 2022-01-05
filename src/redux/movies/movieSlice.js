import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../../common/apis/MovieApi";
import { API_KEY } from "../../common/apis/MovieApiKey";

export const fetchAsyncMovies = createAsyncThunk(`movies/fetchAsyncMovies`, async (text)=> {

    const response = await axios.get(`${baseUrl}?apikey=${API_KEY}&s=${text}&type=movie`)
    return response.data;
});

export const fetchAsyncShows = createAsyncThunk(`movies/fetchAsyncShows`, async (text)=> {

    const response = await axios.get(`${baseUrl}?apikey=${API_KEY}&s=${text}&type=series`)
    return response.data;
});

export const fetchAsyncDetails = createAsyncThunk(`movies/fetchAsyncDetails`, async (id)=> {
    const response = await axios.get(`${baseUrl}?apikey=${API_KEY}&i=${id}&plot=full`)
    return response.data;
});
const initialState = {
    movies: {},
    shows: {},
    details: {}
};

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        removeDetails: (state) => {
            state.details = {};
        },
    },
    extraReducers: {
        [fetchAsyncMovies.pending] : ()=> {
            console.log("pending");
        },
        [fetchAsyncMovies.fulfilled] : (state, {payload}) => {
            return {...state, movies: payload};
        },
        [fetchAsyncMovies.rejected] : ()=> {
            console.log("rejected");
        },
        [fetchAsyncShows.fulfilled] : (state, {payload}) => {
            return {...state, shows: payload};
        },
        [fetchAsyncDetails.fulfilled] : (state, {payload}) => {
            return {...state, details: payload};
        }
    }
});

export const {removeDetails} = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getDetails = (state) => state.movies.details;

export default movieSlice.reducer;
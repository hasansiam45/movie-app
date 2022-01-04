import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../../common/apis/MovieApi";
import { API_KEY } from "../../common/apis/MovieApiKey";

export const fetchAsyncMovies = createAsyncThunk(`movies/fetchAsyncMovies`, async ()=> {
    const movieText = "Hero";
    const response = await axios.get(`${baseUrl}?apikey=${API_KEY}&s=${movieText}&type=movie`)
    return response.data;
});

export const fetchAsyncShows = createAsyncThunk(`movies/fetchAsyncShows`, async ()=> {
    const seriesText = "friend";
    const response = await axios.get(`${baseUrl}?apikey=${API_KEY}&s=${seriesText}&type=series`)
    return response.data;
});
const initialState = {
    movies: {},
    shows: {},
};

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        addMovies: (state, {payload}) => {
            state.movies = payload;
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
    }
});

export const {addMovies} = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export default movieSlice.reducer;
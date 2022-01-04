import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../../common/apis/MovieApi";
import { API_KEY } from "../../common/apis/MovieApiKey";

const fetchAsyncMovies = createAsyncThunk(`movies/fetchAsyncMovies`, async ()=> {
    const movieText = "Hero";
    const response = axios.get(`${baseUrl}?apikey=${API_KEY}&s=${movieText}&type=movie`)
    return response.data;
});

const initialState = {
    movies: {},
};

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        addMovies: (state, {payload}) => {
            state.movies = payload;
        },
    }
});

export const {addMovies} = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export default movieSlice.reducer;
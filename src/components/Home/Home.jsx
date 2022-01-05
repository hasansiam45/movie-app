import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { baseUrl } from '../../common/apis/MovieApi';
import MovieListing from './../MovieListing/MovieListing';
import { API_KEY } from './../../common/apis/MovieApiKey';
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from './../../redux/movies/movieSlice';

const Home = () => {

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchAsyncMovies("Hero"));
        dispatch(fetchAsyncShows("Love"));
    },[dispatch]);

    return (
        <div>
            <div className="banner-img"></div>
            <MovieListing/>
        </div>
    )
}

export default Home

import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { baseUrl } from '../../common/apis/MovieApi';
import MovieListing from './../MovieListing/MovieListing';
import { API_KEY } from './../../common/apis/MovieApiKey';
import { useDispatch } from 'react-redux';
import { addMovies } from '../../redux/movies/movieSlice';

const Home = () => {

    const [movieText,setMovieText] = useState('Hero');
    const dispatch = useDispatch();

    useEffect(()=>{
        axios.get(`${baseUrl}?apikey=${API_KEY}&s=${movieText}&type="movie"`)
        .then(res => dispatch(addMovies(res.data)))
        .catch(err => console.error(err))
    },[]);

    return (
        <div>
            <div className="banner-img"></div>
            <MovieListing/>
        </div>
    )
}

export default Home

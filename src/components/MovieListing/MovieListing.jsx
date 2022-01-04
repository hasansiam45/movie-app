import React from 'react'
import { useSelector } from 'react-redux'
import { getAllMovies } from '../../redux/movies/movieSlice';
import MovieCard from './../MovieCard/MovieCard';
import './MovieListing.scss';
import { getAllShows } from './../../redux/movies/movieSlice';

const MovieListing = () => {

    // const movies = useSelector(state => state.movies.movies);
    const movies = useSelector(getAllMovies);
    const shows = useSelector(getAllShows);

    let renderMovies = "";
    let renderShows = "";


    renderMovies = movies.Response === 'True' ? (
        movies.Search.map((m,i) => (
            <MovieCard key={i} data={m}/>
        ))
    ) : (<div className="movie-error"><h3>{movies.Error}</h3></div>);

    renderShows = shows.Response === 'True' ? (
        shows.Search.map((m,i) => (
            <MovieCard key={i} data={m}/>
        ))
    ) : (<div className="movie-error"><h3>{movies.Error}</h3></div>)

    return (
        <div className="movie-wrapper">
            <div className="movie-list">
                <h2>Movies</h2>
                <div className="movie-container">
                    {renderMovies}
                </div>
            </div>

            <div className="movie-list">
                <h2>Shows</h2>
                <div className="movie-container">
                    {renderShows}
                </div>
            </div>
        </div>
    )
}

export default MovieListing

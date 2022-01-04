import React from 'react'
import { useSelector } from 'react-redux'
import { getAllMovies } from '../../redux/movies/movieSlice';
import MovieCard from './../MovieCard/MovieCard';
import './MovieListing.scss';

const MovieListing = () => {

    // const movies = useSelector(state => state.movies.movies);
    const movies = useSelector(getAllMovies);
    let renderMovies = "";

    renderMovies = movies.Response === 'True' ? (
        movies.Search.map((m,i) => (
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
        </div>
    )
}

export default MovieListing

import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Movie from './Movie';
import './MoviesContainer.css';

const POPULARMOVIEAPI = 'http://localhost:8081/movie-management/popular/movies';
const SEARCHAPI = 'http://localhost:8081/movie-management/search/movies?input=';

const MoviesContainer = () => {

    const [movies, setMovies] = useState([]);
    const [searchInput, setSearchInput] = useState('');

    useEffect(() => {
        axios.get(POPULARMOVIEAPI)
            .then((response) => setMovies(response.data))
            .catch((error) => 'error occured : ' + error);
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.get(SEARCHAPI + searchInput)
            .then((response) => setMovies(response.data.results))
            .catch((error) => console.log('error occured : ' + error))
        setSearchInput('');
    }

    const handleOnChange = (event) => {
        setSearchInput(event.target.value);
    }

    return (
        <div>
            <header>
                <form onSubmit={handleSubmit}>
                    <input className="search-movies"
                        type="text"
                        placeholder="search"
                        value={searchInput}
                        onChange={handleOnChange}
                    />
                </form>
            </header>
            <div className="movie-container">
                {movies.length > 0 && movies.map((movie) =>
                    <Movie key={movie.id} {...movie} />
                )}
            </div>
        </div>
    )
}

export default MoviesContainer

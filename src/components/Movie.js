import React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import './Movie.css';

const IMAGE_API = 'https://image.tmdb.org/t/p/w1280'

const Movie = ({ title, poster_path, backdrop_path, overview, vote_average, release_date }) => {

    let navigate = useNavigate();

    const bookTickets = () => {
        navigate("/book-tickets",
        {
            state: {
                movie_title: title
            }
        });
    }

    const movieDetails = (event) => {
        navigate(
            "/details",
            {
                state:
                {
                    movie_title: title,
                    movie_overview: overview,
                    movie_release_date: release_date,
                    movie_vote_average: vote_average,
                    movie_image: IMAGE_API + poster_path
                }
            })
    }
    return (
        <div className="movie_details">
            <img src={IMAGE_API + poster_path } alt={title} />
            <div className="title">
                <h5>{title}</h5>
                <h5>{vote_average}</h5>
            </div>
            <div className="movie-overview">
                <h5>overview</h5>
                <p>{overview}</p>
            </div>
            <div className="release-date">
                <h5>Release date</h5>
                <span>{release_date}</span>
            </div>
            <div className="btn-movie">
                <Button variant="contained" onClick={bookTickets}>Book Tickets</Button>
                <Button variant="outlined" onClick={movieDetails}>More Details</Button>
            </div>
        </div>
    )
}

export default Movie

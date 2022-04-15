import React from 'react'
import { useLocation, Link } from 'react-router-dom';
import './MovieDetails.css';

const MovieDetails = props => {

    const location = useLocation();
    const image = location.state.movie_image;
    const title = location.state.movie_title;
    const overview = location.state.movie_overview;
    const releaseDate = location.state.movie_release_date;
    const voteAverage = location.state.movie_vote_average;

    return (
        <div>
            <div className="movie-content">
                <Link to="/">Home</Link>
                <img src={image} alt={title} />
                <div className="movie-details">
                    <div className="title-container">
                        <h4>Movie Title </h4>
                        <h4>{title}</h4>
                    </div>
                    <div className="overview-container">
                        <h4>Overview</h4>
                        <span>{overview}</span>
                    </div>
                    <div className="release-date-container">
                        <h4>Released Date</h4>
                        <h4>{releaseDate}</h4>
                    </div>
                    <div className="rating-container">
                        <h4>Rating</h4>
                        <span>{voteAverage}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieDetails

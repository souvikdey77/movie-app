import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import { useNavigate } from 'react-router-dom';
import './AdminComponent.css';
import SearchComponent from './SearchComponent';
import FilterByDate from './FilterByDate';

const FETCHALLBOOKING = 'http://localhost:8081/admin-management/bookings/view';
const CANCELBOOKING = 'http://localhost:8081/admin-management/bookings/cancel/';

const AdminComponent = () => {

    let navigate = useNavigate();
    const [movies, setMovies] = useState([]);
    const [cancelStatus, setCancelStatus] = useState(false);


    useEffect(() => {
        fetchAllBooking();
    }, [])

    function fetchAllBooking() {
        axios.get(FETCHALLBOOKING)
            .then((response) => setMovies(response.data))
            .catch((error) => console.log(error))
    }

    const updateBooking = (movie) => {
        navigate("/update-details",
            {
                state: {
                    movieDetails: movie
                }
            });
    }

    const cancelBooking = (movie) => {
        axios.get(CANCELBOOKING + `${movie.email}`)
            .then((response) => {
                setCancelStatus(response.data.bookingStatus);
            })
            .catch((error) => console.log(error))
    }

    useEffect(() => {
        if (cancelStatus) {
            fetchAllBooking();
        }
    }, [cancelStatus])

    return (
        <div className="admin-container">
            <h3 className="admin-title">Details of bookings</h3>
            <table>
                <thead>
                    <tr>
                        <th>Email</th>
                        <th>Booking Date</th>
                        <th>Booking Status</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Movie Title</th>
                        <th>No. of Tickets</th>
                        <th>Update</th>
                        <th>Cancel</th>
                    </tr>
                </thead>
                <tbody>
                    {movies.map((movie, index) => {
                        return (
                            <tr key={index}>
                                <td>{movie.email}</td>
                                <td>{movie.bookingDate}</td>
                                <td>{movie.bookingStatus}</td>
                                <td>{movie.firstName}</td>
                                <td>{movie.lastName}</td>
                                <td>{movie.movieTitle}</td>
                                <td>{movie.numberOfTickets}</td>
                                <td><Button variant="contained" endIcon={<SendIcon />} onClick={() => updateBooking(movie)}>Update</Button></td>
                                <td><Button variant="outlined" startIcon={<DeleteIcon />} onClick={() => cancelBooking(movie)}>Cancel</Button></td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <br />
            <br />
            <SearchComponent />
            <FilterByDate />
        </div >
    )
}

export default AdminComponent

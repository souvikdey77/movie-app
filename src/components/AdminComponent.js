import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import './AdminComponent.css';
import SearchComponent from './SearchComponent';
import FilterByDate from './FilterByDate';

const FETCHALLBOOKING = 'http://localhost:8081/admin-management/bookings/view';
const UPDATEBOOKING = 'http://localhost:8081/admin-management/update/bookings/';
const CANCELBOOKING = 'http://localhost:8081/admin-management/bookings/cancel/';

const AdminComponent = () => {

    const activeMovies = [];
    const [movies, setMovies] = useState([]);
    const [cancelStatus, setCancelStatus] = useState(false);
    const [cancelBookingObj, setCancelBookingObj] = useState({
        "bookingDate": "",
        "bookingStatus": "",
        "email": "",
        "firstName": "",
        "lastName": "",
        "movieTitle": "",
        "numberOfTickets": ""
    });


    useEffect(() => {
        fetchAllBooking();
    }, [])

    function fetchAllBooking(){
        axios.get(FETCHALLBOOKING)
            .then((response) => setMovies(response.data))
            .catch((error) => console.log(error))
    }

    const updateBooking = (movie) => {
        console.log(movie);
        const request = {
            "numberOfTickets": 7,
            "emailId": "",
            "firstName": "",
            "lastName": "",
            "bookingDate": "",
        }
        console.log(UPDATEBOOKING + `${movie.email}`)
        // axios.put(UPDATEBOOKING+`${movie.email}`, request)
        //     .then((response) => console.log(response.data))
        //     .catch((error) => console.log(error))
    }

    const cancelBooking = (movie) => {
        axios.get(CANCELBOOKING + `${movie.email}`)
        .then((response) => {
            setCancelStatus(response.data.bookingStatus);
            //setMovies([...movies,response.data])
        })
        .catch((error) => console.log(error))    
    }

    useEffect(() => {
        if(cancelStatus){
            fetchAllBooking();
        }
    },[cancelStatus])

    return (
        <div className="admin-container">
            <h3 className="admin-title">Admin Dashboard</h3>
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

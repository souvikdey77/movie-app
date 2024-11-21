import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';
import './SearchComponent.css';

const SEARCHBOOKING = 'http://localhost:8081/admin-management/bookings/search/?input='

const SearchComponent = () => {

    const [bookings, setBookings] = useState([]);

    const handleSearch = (e) => {
        axios.get(SEARCHBOOKING + e.target.value)
            .then((response) => setBookings(response.data))
            .catch((error) => console.log(error));
    }

    return (
        <div className="search-container">
            <h3>Search Booking</h3>
            <div className="searchbar">
                <input type="text" placeholder="Search..." onChange={handleSearch} />
                <SearchIcon />
            </div>
            <br />
            <div className="booking-details">
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
                    </tr>
                </thead>
                <tbody>
                    {bookings && bookings.map((booking, index) => {
                        return (
                            <tr key={index}>
                                <td>{booking.email}</td>
                                <td>{booking.bookingDate}</td>
                                <td>{booking.bookingStatus}</td>
                                <td>{booking.firstName}</td>
                                <td>{booking.lastName}</td>
                                <td>{booking.movieTitle}</td>
                                <td>{booking.numberOfTickets}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            </div>
        </div>
    )
}

export default SearchComponent

import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import axios from 'axios';

//http://localhost:8081/admin-management/bookings/filter?fromDate=2022-08-06&toDate=2022-08-10
const FILTERBYDATEAPI = 'http://localhost:8081/admin-management/bookings/filter?fromDate=';
const FILTERTODATE = '&toDate='

const FilterByDate = () => {

    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [filterBooking, setFilterBooking] = useState([]);

    const handleStartDate = (e) => {
        setStartDate(e.target.value);
    }

    const handleEndDate = (e) => {
        setEndDate(e.target.value);
    }

    const searchByDate = () => {
        axios.get(FILTERBYDATEAPI + startDate + FILTERTODATE + endDate)
            .then((response) => setFilterBooking(response.data))
            .catch((error) => console.log(error))
    }

    useEffect(() => {
        if (filterBooking) {
            console.log(filterBooking)
        }
    }, [filterBooking])

    return (
        <div className="filterbydate-container">
            <h3>Filter booking by date range</h3>
            <input type="text" placeholder="start date" onChange={handleStartDate} />
            <input type="text" placeholder="end date" onChange={handleEndDate} />
            <Button variant="contained" endIcon={<SendIcon />} onClick={searchByDate}>Search</Button>
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
                    { filterBooking && filterBooking.map((booking, index) => {
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
    )
}

export default FilterByDate

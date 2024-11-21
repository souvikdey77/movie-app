import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import './UpdateBookingComponent.css';

const UPDATEBOOKING = 'http://localhost:8081/admin-management/update/bookings/';

const UpdateBookingComponent = () => {

    const location = useLocation();
    const movieBookingInfo = location.state.movieDetails;
    const [seat, setSeat] = useState('');
    const [updateBooking, setUpdateBooking] = useState({});

    const updateSeats = (e) => {
        setSeat(e.target.value);
    }

    const handleUpdate = () => {
        const request = {
            "numberOfTickets": seat
        }
        axios.put(UPDATEBOOKING + `${movieBookingInfo.email}`, request)
            .then((response) => setUpdateBooking(response.data))
            .catch((error) => console.log(error))
    }

    return (
        <div className="form">
            <div className="title">Update Details</div>
            <div className="input-container ic1">
                <input id="firstname" className="input" type="text" value={movieBookingInfo.firstName} />
                <div className="cut"></div>
                <label htmlFor="firstname" className="placeholder">First name</label>
            </div>
            <div className="input-container ic2">
                <input id="lastname" className="input" type="text" value={movieBookingInfo.lastName} />
                <div className="cut"></div>
                <label htmlFor="lastname" className="placeholder">Last name</label>
            </div>
            <div className="input-container ic2">
                <input id="email" className="input" type="text"  value={movieBookingInfo.email} />
                <div className="cut cut-short"></div>
                <label htmlFor="email" className="placeholder">Email</label>
            </div>
            <div className="input-container ic2">
                <input id="seats" className="input" type="text" placeholder=" " onChange={updateSeats} />
                <div className="cut cut-short"></div>
                <label htmlFor="seats" className="placeholder">Seats</label>
            </div>
            <div className="input-container ic2">
                <input id="date" className="input" type="text" value={movieBookingInfo.bookingDate}/>
                <div className="cut cut-short"></div>
                <label htmlFor="date" className="placeholder">Date</label>
            </div>
            <button type="text" className="submit" onClick={handleUpdate}>update</button>
            {updateBooking.bookingStatus === 'confirmed' ? <span className="confirm-message">Congratulations! Your ticket booking is updated & confirmed</span> : null}
        </div>
    )
}

export default UpdateBookingComponent

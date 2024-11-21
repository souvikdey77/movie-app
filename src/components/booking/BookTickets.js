import React, { useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import './BookTickets.css'


const CREATEBOOKING = 'http://localhost:8081/movie-management/movie/bookTicket';

const BookTickets = props => {

    const location = useLocation();
    const title = location.state.movie_title;

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [seats, setSeats] = useState('');
    const [date, setDate] = useState('');
    const [bookingStatus, setBookingStatus] = useState('');
    const [errorStatus, setErrorStatus] = useState(0);
    const [errorMessage, setErrorMessage] = useState('');


    const handleFirstName = (e) => {
        setFirstName(e.target.value);
    }

    const handleLastname = (e) => {
        setLastName(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleSeats = (e) => {
        setSeats(e.target.value);
    }

    const handleDate = (e) => {
        setDate(e.target.value);
    }

    const handleSubmit = (e) => {
        setErrorStatus(0);
        setBookingStatus('');
        setErrorMessage('');
        const request = {
            "email": email,
            "firstName": firstName,
            "lastName": lastName,
            "bookingDate": date,
            "numberOfTickets": seats,
            "movieTitle": title
        }
        axios.post(CREATEBOOKING, request)
            .then((response) => setBookingStatus(response.data.bookingStatus))
            .catch((error) => {
                setErrorStatus(error.response.status)
                setErrorMessage(error.response.data.message)
            })
    }

    return (
        <div className="form">
            <div className="title">Welcome to Ticket center</div>
            <div className="input-container ic1">
                <input id="firstname" className="input" type="text" placeholder=" " onChange={handleFirstName} />
                <div className="cut"></div>
                <label htmlFor="firstname" className="placeholder">First name</label>
            </div>
            <div className="input-container ic2">
                <input id="lastname" className="input" type="text" placeholder=" " onChange={handleLastname} />
                <div className="cut"></div>
                <label htmlFor="lastname" className="placeholder">Last name</label>
            </div>
            <div className="input-container ic2">
                <input id="email" className="input" type="text" placeholder=" " onChange={handleEmail} />
                <div className="cut cut-short"></div>
                <label htmlFor="email" className="placeholder">Email</label>
            </div>
            <div className="input-container ic2">
                <input id="seats" className="input" type="text" placeholder=" " onChange={handleSeats} />
                <div className="cut cut-short"></div>
                <label htmlFor="seats" className="placeholder">Seats</label>
            </div>
            <div className="input-container ic2">
                <input id="date" className="input" type="text" placeholder=" " onChange={handleDate}  />
                <div className="cut cut-short"></div>
                <label htmlFor="date" className="placeholder">Date</label>
            </div>
            <button type="text" className="submit" onClick={handleSubmit}>submit</button>
            {bookingStatus && bookingStatus === 'confirmed' ? <span className="success-booking">Your tickets are booked</span>
                : null}
            {errorStatus && errorStatus === 400 ? <span className="error-booking">{errorMessage}</span>
                : null}
        </div>
    )
}

export default BookTickets

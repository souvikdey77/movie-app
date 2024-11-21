import './App.css';
import MoviesContainer from './components/display/MoviesContainer';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MovieDetails from './components/moviedetails/MovieDetails';
import BookTickets from './components/booking/BookTickets';
import AdminComponent from './components/admin/AdminComponent';
import UpdateBookingComponent from './components/update/UpdateBookingComponent';

function App() {

  return (
    <Router>
      <Link className="admin-link" to="/admin">Admin Dashboard</Link>
      <Routes>
        <Route path="/" element={<MoviesContainer />} />
        <Route path="/details" element={<MovieDetails />} />
        <Route path="/book-tickets" element={<BookTickets />} />
        <Route path="/admin" element={<AdminComponent />} />
        <Route path="/update-details" element={<UpdateBookingComponent />} />
      </Routes>
    </Router>

  );
}

export default App;

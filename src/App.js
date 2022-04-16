import './App.css';
import MoviesContainer from './components/MoviesContainer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieDetails from './components/MovieDetails';
import BookTickets from './components/BookTickets';
import AdminComponent from './components/AdminComponent';

function App() {

  return (
    <Router>
        <Routes>
          <Route path="/" element={<MoviesContainer />} />
          <Route path="/details" element={<MovieDetails />} />
          <Route path="/book-tickets" element={<BookTickets />} />
          <Route path="/admin" element={<AdminComponent />} />
        </Routes>
    </Router>

  );
}

export default App;

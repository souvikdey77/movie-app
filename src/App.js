import './App.css';
import MoviesContainer from './components/MoviesContainer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieDetails from './components/MovieDetails';
import BookTickets from './components/BookTickets';

function App() {

  return (
    <Router>
        <Routes>
          <Route path="/" element={<MoviesContainer />} />
          <Route path="/details" element={<MovieDetails />} />
          <Route path="/book-tickets" element={<BookTickets />} />
        </Routes>
    </Router>

  );
}

export default App;

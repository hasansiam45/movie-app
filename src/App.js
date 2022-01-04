import logo from './logo.svg';
import './App.scss';
import { Navigate, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import MovieListing from './components/MovieListing/MovieListing';
import MovieDetails from './components/MovieDetails/MovieDetails';
import Footer from './components/Footer/Footer';
import PageNotFound from './components/PageNotFound/PageNotFound';

function App() {
  return (
    <div className="container">
      <Header/>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home/*" element={<Home/>} />
        {/* <Route path="/movies" element={<MovieListing />}/> */}
        <Route path="movies/:id" element={<MovieDetails />}/>
        {/* <Route path="*" element={<PageNotFound />}/> */}
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

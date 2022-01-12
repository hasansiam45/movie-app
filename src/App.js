import logo from './logo.svg';
import './App.scss';
import { Navigate, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import MovieListing from './components/MovieListing/MovieListing';
import MovieDetails from './components/MovieDetails/MovieDetails';
import Footer from './components/Footer/Footer';
import PageNotFound from './components/PageNotFound/PageNotFound';
import SignUp from './components/Login/SignUp';
import SignIn from './components/Login/SignIn';

function App() {
  return (
    <div className="container">
      <Header/>
      
        {
          localStorage.getItem('login') === 'true' ?
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home/*" element={<Home/>} />
            <Route path="movies/:id" element={<MovieDetails />}/>
            <Route path="*" element={<PageNotFound />}/>
          </Routes> :
          <Routes>
            <Route path="/" element={<SignUp />}/>
            <Route path="/signUp/*" element={<SignUp />}/>
            <Route path="/signIn" element={<SignIn />}/>
            <Route path="*" element={<PageNotFound />}/>

          </Routes>
        }


        {/* <Route path="*" element={<PageNotFound />}/> */}
      
      <Footer/>
    </div>
  );
}

export default App;

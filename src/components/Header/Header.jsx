import React, { useState } from 'react'
import user from '../../assets/images/user.png';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import './Header.scss';
import { useDispatch } from 'react-redux';
import { fetchAsyncShows } from '../../redux/movies/movieSlice';
import { fetchAsyncMovies } from './../../redux/movies/movieSlice';
import { getAuth, signOut } from "firebase/auth";
import { initializeApp } from 'firebase/app';
import firebaseConfig from './../Login/firebase.config';

const Header = () => {
    const [toggleImg, setToggleImg] = useState(false);
    const [search, setSearch] = useState('');
    const dispatch = useDispatch();
    const app = initializeApp(firebaseConfig);
    const navigate = useNavigate();
    const handleSearch = (text) => {
        setSearch(text);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(search === ''){
            return alert('Please enter a valid search value')
        }
        dispatch(fetchAsyncShows(search));
        dispatch(fetchAsyncMovies(search));
        setSearch('');
    }


    const handleSignOut = () => {
        setToggleImg(false);
        const auth = getAuth();
            signOut(auth).then(() => {
            // Sign-out successful.
            localStorage.setItem('login', false);
            navigate('/signIn');
            window.location.reload();
            }).catch((error) => {
            // An error happened.
            });
    }
    return (
        <div className="header">

            <div className="logo">
                <Link to="/home">
                    Movie-App
                </Link>
            </div>
            
            {localStorage.getItem('login') === 'true' &&
            <div className="search">
            <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Search here" onChange={(e)=>handleSearch(e.target.value)}/>

            <button type="submit">Search</button>
            </form>
            </div>
            }

            <div className="user">
                    <img src={user} alt="user" onClick={()=> setToggleImg(prev => !prev)} />
                    {toggleImg && 
                    <ul className="d-menu">
                    {
                        localStorage.getItem('login') === 'false' ?
                        <>
                        <Link to="/signUp">
                        <li className="d-item" onClick={()=>setToggleImg(false)}>Sign Up</li>
                        </Link>
                        <Link to="/signIn">
                        <li className="d-item" onClick={()=>setToggleImg(false)}>Sign In</li>
                        </Link>
                        </> :
                        <li className="d-item" onClick={handleSignOut}>Sign Out</li>
                    }
                     </ul>
                    }
            </div>
        </div>
    )
}

export default Header

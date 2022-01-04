import React, { useState } from 'react'
import user from '../../assets/images/user.png';
import { Link, NavLink } from 'react-router-dom';
import './Header.scss';

const Header = () => {
    const [search, setSearch] = useState('');
    const handleSearch = (text) => {
        setSearch(text);
    }
    return (
        <div className="header">
            <Link to="/home">
                <div className="logo">
                    Movie-App
                </div>
            </Link>

            <div className="search">
                <input type="text" name="" value="" placeholder="Search here" onClick={(e)=>handleSearch(e.target.value)}/>
            </div>

            <div className="user">
                <img src={user} alt="user" />
            </div>
        </div>
    )
}

export default Header

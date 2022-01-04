import React from 'react'
import user from '../../assets/images/user.png';
import { Link, NavLink } from 'react-router-dom';
import './Header.scss';

const Header = () => {
    return (
        <div className="header">
            <Link to="/home">
                <div className="logo">
                    Movie-App
                </div>
            </Link>

            <div className="user">
                <img src={user} alt="user" />
            </div>
        </div>
    )
}

export default Header

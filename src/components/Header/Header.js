import React from 'react';
import {NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <div>
            <NavLink className='logo' to='/'>Knowledge World</NavLink>
            </div>
            <div>
            <NavLink  className={({ isActive }) =>
              isActive ? 'activeStyle' : 'inactive'
            } to="/">Home</NavLink>

            <NavLink className={({ isActive }) =>
              isActive ? 'activeStyle' : 'inactive'
            } to="/statistic">Statistic</NavLink>

            <NavLink className={({ isActive }) =>
              isActive ? 'activeStyle' : 'inactive'
            } to="/blog">Blog</NavLink>
            </div>
            
        </div>
    );
};

export default Header;
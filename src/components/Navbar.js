import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
    return (
        <div className='navbar'>
            <NavLink exact to='/'>Home</NavLink>
            <NavLink exact to='/projects'>Projects</NavLink>
            <NavLink exact to='/blog'>Blog</NavLink>
            <NavLink exact to='/about'>About</NavLink>
            <NavLink exact to='/contact'>Contact</NavLink>
        </div>
    );
}

export default Navbar;
import React from "react";
import style from '../styles/Sidebar.css';

const Sidebar = () => {
    return (
        <div className = {style.sidebar}>
            <div>Home</div>
            <div>Projects</div>
            <div>Blog</div>
            <div>About</div>
            <div>Contact</div>
        </div>
    );
}

export default Sidebar;
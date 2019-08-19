import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Content.css';
import gif from '../images/under-construction.gif';

const Home = () => {
    return (
        <div className='content'>
            <span className='banner'>Under Construction</span>
            <div className='body'>
                <h4><img src={gif} alt='under-construction'/><em>To be honest, I just wanted to use this guy</em></h4>
                <Link className='banner' to='/blog'>Go To Blog</Link>
            </div>
        </div>
    );
}

export default Home;
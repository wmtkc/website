import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Content.css';
import gif from '../images/under-construction.gif';

const Home = () => {
    return (
        <div className='content'>
            <span className='banner'>Under Construction</span>
            <hr/>
            <div className='body'>
                <img src={gif} alt='under-construction' title="I could have redirected you, but I've always wanted to use this guy" />
                <hr/>
                <Link className='banner' to='/blog'>Go To Blog</Link>
            </div>
        </div>
    );
}

export default Home;
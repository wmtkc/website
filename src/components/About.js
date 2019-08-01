import React from 'react';
import '../styles/Media.css';
import Figure from './Figure.js';
import sailboat from '../img/sailboat.jpg'

const About = () => {
    return (
        <div className='page'>
            <div className='header'>
                About
            </div>
            <div className='body'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                {/* <Figure source={'../img/sailboat.jpg'} altText='sailboat' caption='Would it get some wind for the sailboat?' /> */}
                <div className='figure'>
                    <img src={sailboat} alt='sailboat' />
                    <p>Would it get some wind for the sailboat?</p>
                </div>
            </div>
        </div>
    );
}

export default About;
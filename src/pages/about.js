import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Content.css';

import me from '../images/me.jpg'

const About = () => {
    return (
        <div className='content'>
            <span className='header'>About Me</span>
            <div className='body'>
                <hr/>
                <p>I am a student at St. Olaf College graduating in 2020 majoring in Computer Science and Chinese Language with a concentration in Linguistics.</p>
                <p>I am currently on a semester abroad at East China Normal University in Shanghai, China in order to improve my language skills.</p>
                <img src={me} alt='Me' />
                <p>This website was built using React.js, React-Static, and Netlify CMS. <Link to='/'>Learn More</Link></p>
                <p>It's definitely a work in progress, I'll be updating it as I have time.</p>
            </div>
        </div>
    );
}

export default About;
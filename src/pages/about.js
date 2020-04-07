import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Content.css';

import me from '../images/me.jpg'

const About = () => {
    return (
        <div className='content'>
            <hr className='vfill' />
            <div className='header'>
                <span className='name-banner'>About</span>
                <Link className='navlink' to='/blog'>Blog</Link>
            </div>
            <div className='body'>
                <p>I am a student at St. Olaf College graduating in 2020 majoring in Computer Science and Chinese Language with a concentration in Linguistics.</p>
                <p>When I'm not pushing around blinking lights on a screen, I fancy myself to be something of a serial hobbyist. I have a lot of thoughts and nowhere to put them. This blog is mostly to keep track of that kind of stuff.</p>
                <h4><img src={me} alt='Me' /></h4>
                <p><Link to='/blog/i-have-a-blog-now'>About my blog</Link></p>
                <p>If you want to subscribe to updates, email me at <a href='mailto:williamkc@wmcasey.com'>williamkc@wmcasey.com</a> with the subject line "Subscribe" and I'll add you to an email list. I'll implement a better system when I have time.</p>
                <p>This website was built using React.js, React-Static, and Netlify CMS. <Link to='/blog/tech-specs'>Learn More</Link></p>
                <p>It's definitely a work in progress, I'll be updating it as I have time.</p>
            </div>
        </div>
    );
}

export default About;
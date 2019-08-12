import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Routes } from 'react-static';
import '../styles/Containers.css';

// import pages
import Home from '../pages/Home.js';
import Projects from '../pages/Projects.js';
import Blog from '../pages/Blog.js';
import About from '../pages/About.js';
import Contact from '../pages/Contact.js';

const Content = () => {
    return (
        <div className='content-wrapper'>
            {/* <Routes /> */}
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/projects' component={Projects} />
                <Route path='/blog' component={Blog} />
                <Route path='/about' component={About} />
                <Route path='/contact' component={Contact} />
            </Switch>
        </div>
    );
}

export default Content;
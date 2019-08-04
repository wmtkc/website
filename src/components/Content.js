import React from 'react';
import { Switch, Route } from 'react-router-dom';
import '../styles/Containers.css';

// import pages
import Home from './Home.js';
import Projects from './Projects.js';
import Blog from './blog/Blog.js';
import About from './About.js';
import Contact from './Contact.js';

const Content = () => {
    return (
        <div className='content-wrapper'>
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
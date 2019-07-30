import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import pages
import Home from './Home.js';
import Projects from './Projects.js';
import Blog from './Blog.js';
import About from './About.js';
import Contact from './Contact.js';

const Main = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/projects' component={Projects} />
            <Route exact path='/blog' component={Blog} />
            <Route exact path='/about' component={About} />
            <Route exact path='/contact' component={Contact} />
        </Switch>
    );
}

export default Main;
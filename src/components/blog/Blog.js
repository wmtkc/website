import React from 'react';
import { Switch, Route } from 'react-router-dom';

import BlogList from './BlogList.js';
import BlogPost from './BlogPost.js';

const Blog = ({ match }) => {
    return (
        <Switch>
            <Route exact path={match.path} component={BlogList} />
            <Route path={`${match.path}/:postURL`} component={BlogPost} />
        </Switch>
    );
}

export default Blog;
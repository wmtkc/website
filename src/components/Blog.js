import React from 'react';
import { Switch, Route } from 'react-router-dom';

import BlogList from './BlogList.js';

const Blog = ({ match }) => {
    return (
        <Switch>
            <Route exact path={`${match.url}/`} component={BlogList} />
            {/* <Route exact path={`${match.url}/:postTitle`} component={BlogPost} /> */}
        </Switch>
    );
}

export default Blog;
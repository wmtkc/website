import React from 'react';
import { Switch, Route } from 'react-router-dom';

import BlogList from '../components/BlogList.js';
import BlogPost from '../containers/BlogPost.js';

const Blog = ({ match }) => {
    return (
        <React.Suspense fallback={<em>Loading...</em>}>
        <Switch>
            <Route exact path={match.path} component={BlogList} />
            <Route path={`${match.path}/:postURL`} component={BlogPost} />
        </Switch>
        </React.Suspense>
    );
}

export default Blog;
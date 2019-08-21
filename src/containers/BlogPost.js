import React from 'react';
import { useRouteData } from 'react-static';
import Markdown from 'react-markdown';
import dateFormat from 'dateformat';
import '../styles/Content.css';

import NotFound from '../pages/404.js';

// TODO: ADD ROUTE DATA
const BlogPost = () => {
    const { post } = useRouteData();
    const tagSet = [];
    post.data.tags.forEach((tag, index) => {
        tagSet.push(<em>{tag}</em>)
        if (index < post.data.tags.length-1) {
            tagSet.push(<span>,</span>)
        }
    })
    return (
        <React.Fragment>
            {post.data.published ? (
                <div className='content'>
                    <span className='header'>{post.data.title}</span>
                    <em className='date'>{dateFormat(post.data.date, 'mmmm dS, yyyy')}</em>
                    <Markdown className='body' source={post.content} escapeHtml={false} />
                    {/* Display update timestamp if updated more than 24hrs after published */}
                    <em className='date updated'>
                        {(post.data.update !== '' && (dateFormat(post.data.update, 'yyyymmddHH')- dateFormat(post.data.date, 'yyyymmddHH') > 24))? 'Updated: ' + dateFormat(post.data.date, 'mmmm dS, yyyy') : ''}
                    </em>
                    <div className='tags'>
                        <em>Tags</em><span>:</span>
                        {tagSet}
                    </div>
                </div>
            ) : (
                <NotFound />
            )}
        </React.Fragment>
    );
}

export default BlogPost;
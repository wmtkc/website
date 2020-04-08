import React from 'react';
import { useRouteData } from 'react-static';
import { Link } from 'react-router-dom';
import Markdown from 'react-markdown/with-html';
import dateFormat from 'dateformat';
import '../styles/Content.css';

import NotFound from '../pages/404.js';

// TODO: ADD ROUTE DATA
const BlogPost = () => {
    const { post } = useRouteData();
    const tagSet = [];
    post.data.tags.forEach((tag, index) => {
        tagSet.push(<em key={index}>{tag}</em>)
        if (index < post.data.tags.length-1) {
            tagSet.push(<span key={post.data.tags.length+index}>,</span>)
        }
    })

    const LinkRenderer = (props) => {
        return <a href={props.href} rel='noopener noreferrer' target='_blank'>{props.children}</a>
    }
      
    return (
        <React.Fragment>
            {post.data.published ? (
                <div className='content'>
                    <span className='title'>{post.data.title}</span>
                    <div className='header'>
                        <em className='date'>{dateFormat(post.data.date, 'mmmm dS, yyyy')}</em>
                        <Link className='navlink' to='/blog'>Back</Link>
                    </div>
                    <Markdown className='body' source={post.content} escapeHtml={false} renderers={{link: LinkRenderer}} />
                    <div className='footer'>
                        <div className='tags'>
                            <em>Tags</em><span>:</span>
                            {tagSet}
                        </div>
                        {/* Display update timestamp if updated more than 24hrs after published */}
                        <em className='updated date'>
                            {(post.data.update !== '' && (dateFormat(post.data.update, 'yyyymmddHH')- dateFormat(post.data.date, 'yyyymmddHH') > 24))? 'Updated: ' + dateFormat(post.data.update, 'mmmm dS, yyyy') : ''}
                        </em>
                    </div>
                </div>
            ) : (
                <NotFound />
            )}
        </React.Fragment>
    );
}

export default BlogPost;
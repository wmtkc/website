import React from 'react';
import dateFormat from 'dateformat';
import PostCard from './PostCard';
import '../styles/BlogList.css';
import noCover from '../../public/uploads/no-cover.jpg';
import { useRouteData } from 'react-static';

const BlogList = () => {
    const { posts } = useRouteData();
    const cards = [];
    posts.forEach((post, index) => {
        if (post.published) {
            cards.push(<PostCard key={index}
                                 url={post.data.url}
                                 title={post.data.title} 
                                 coverImg={post.data.thumbnail ? post.data.thumbnail : noCover} 
                                 date={dateFormat(post.data.date, 'mmmm dS, yyyy')} />)
        }
    });
    return (
        <div className='posts'>
            {cards}
        </div>
    );
}

export default BlogList;





















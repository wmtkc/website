import React from 'react';
import { useRouteData } from 'react-static';
import dateFormat from 'dateformat';
import PostCard from '../components/PostCard';
import '../styles/Blog.css';
import noCover from '../images/no-cover.jpg';

const BlogList = props => {
    const { posts } = useRouteData();
    const order = props.order;
    const tags = props.tags;
    const indices = [];
    let cards = [];
    posts.forEach((post, index) => {
        tags.forEach(tag => {
            if (post.data.published && (tag === 'all' || post.data.tags.includes(tag)) && !indices.includes(index)) {
                indices.push(index);
                cards.push(<PostCard key={index}
                                     url={post.data.url}
                                     title={post.data.title} 
                                     coverImg={post.data.thumbnail ? post.data.thumbnail : noCover} 
                                     date={dateFormat(post.data.date, 'mmmm dS, yyyy')} />)
            }
        });
    });
    // Reverse card order
    if (order === 'descending') {
        let temp = [];
        while (cards.length > 0) {
            temp.push(cards.shift())
        }
        cards = temp;
    }
    return (
        <div className='posts'>
            {cards}
        </div>
    );
}

export default BlogList;





















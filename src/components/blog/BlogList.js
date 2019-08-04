import React from 'react';
import Strapi from 'strapi-sdk-javascript';
import dateFormat from 'dateformat';
import PostCard from './PostCard';
import noCover from '../../img/no-cover.jpg'

const cms = 'http://localhost:1337';
const strapi = new Strapi(cms);

class BlogList extends React.Component {
    constructor() {
        super();
        this.state = {
            posts: []
        }
    }
    
    async componentDidMount () {
        try {
            const posts = await strapi.getEntries('blogposts');
            this.setState({ posts });
        } catch (err) {
            console.error(err);
        }
    }

    render () {
        const cards = [];
        this.state.posts.forEach((post) => {
            if (post.published) {
                cards.push(<PostCard key={post.id}
                                     url={post.url}
                                     title={post.title} 
                                     coverImg={post.cover ? cms + post.cover.url : noCover} 
                                     date={dateFormat(post.created_at, 'mmmm dS, yyyy')} />)
            }
        });
        return (
            <div className='posts'>
                {cards}
            </div>
        );
    }
}

export default BlogList;





















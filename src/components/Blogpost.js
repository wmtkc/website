import React from 'react';
import Strapi from 'strapi-sdk-javascript';
import dateFormat from 'dateformat';
import '../styles/Media.css';

const strapiURL = 'http://localhost:1337';
const strapi = new Strapi(strapiURL);

class BlogPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url: this.props.match.params.postURL,
            title: '',
            body: '',
            date: '',
            updated: ''
        };
    }

    async componentDidMount () {
        try {
            const posts = await strapi.getEntries('blogposts');
            posts.forEach((posts) => {
                if (posts.url === this.state.url) {
                    this.setState({
                        title: posts.title,
                        body: posts.body,
                        date: posts.created_at,
                        updated: posts.updated_at
                    })
                }
            })
        } catch (err) {
            console.error(err);
        }
    }

    render() {
        return (
            <div className='page'>
                <span className='header'>{this.state.title}</span>
                <div className='body'>
                    <p>{this.state.body}</p>
                    <span>
                        {dateFormat(this.state.date, 'yyyy-mm-dd') !== dateFormat(this.state.updated, 'yyyy-mm-dd') ? 'Updated: ' + dateFormat(this.state.updated, 'mmmm dS, yyyy') : ''}
                    </span>
                </div>
            </div>
        );
    }
}

export default BlogPost;
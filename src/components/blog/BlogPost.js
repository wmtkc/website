import React from 'react';
import ReactMarkdown from 'react-markdown/with-html';
import Strapi from 'strapi-sdk-javascript';
import dateFormat from 'dateformat';
import '../../styles/Content.css';

import NotFound from '../NotFound.js';

const cms = 'http://localhost:1337';
const strapi = new Strapi(cms);

class BlogPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url: this.props.match.params.postURL,
            title: '',
            body: '',
            date: '',
            updated: '',
            published: false,
            loaded: false
        };

        // If image link is not complete, get from strapi
        this.uri = url => /^https?:/.test(url) ? url : cms + url;
    }

    async componentDidMount () {
        try {
            const posts = await strapi.getEntries('blogposts');
            posts.forEach((post) => {
                if (post.url === this.state.url) {
                    this.setState({
                        title: post.title,
                        body: post.body,
                        date: post.created_at,
                        updated: post.updated_at,
                        published: post.published
                    })
                }
            });
            this.setState({
                loaded: true
            });
        } catch (err) {
            console.error(err);
        }
    }

    render() {
        return (
            <div>
                {this.state.published ? (
                    <div className='content'>
                        <span className='header'>{this.state.title}</span>
                        <em>{dateFormat(this.state.date, 'mmmm dS, yyyy')}</em>
                        <ReactMarkdown className='body' source={this.state.body} escapeHtml={false} transformImageUri={this.uri} />

                        {/* Display update timestamp if updated more than 24hrs after creation */}
                        <em className='updated'>
                            {dateFormat(this.state.updated, 'yyyymmddHH')- dateFormat(this.state.date, 'yyyymmddHH') > 24 ? 'Updated: ' + dateFormat(this.state.updated, 'mmmm dS, yyyy') : ''}
                        </em>
                    </div>
                ) : (
                    <div>
                        {/* If no longer loading and not published, set NotFound */}
                        {this.state.loaded ? (
                            <NotFound />
                        ) : (
                            // TODO: Make loading animation
                            <span>Loading</span>
                        )}
                    </div>
                )}
            </div>
        );
    }
}

export default BlogPost;
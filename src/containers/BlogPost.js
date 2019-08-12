import React from 'react';
import ReactMarkdown from 'react-markdown';
import dateFormat from 'dateformat';
import '../styles/Content.css';

import NotFound from '../pages/NotFound.js';


class BlogPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url: this.props.match.params.postURL,
            title: 'Title',
            body: 'Lorem Ipsum',
            date: '',
            updated: '',
            published: true,
            loaded: true
        };
    }

    render() {
        return (
            <React.Fragment>
                {this.state.published ? (
                    <div className='content'>
                        <span className='header'>{this.state.title}</span>
                        <em>{dateFormat(this.state.date, 'mmmm dS, yyyy')}</em>
                        <ReactMarkdown className='body' source={this.state.body} escapeHtml={false} />

                        {/* Display update timestamp if updated more than 24hrs after creation */}
                        <em className='updated'>
                            {dateFormat(this.state.updated, 'yyyymmddHH')- dateFormat(this.state.date, 'yyyymmddHH') > 24 ? 'Updated: ' + dateFormat(this.state.updated, 'mmmm dS, yyyy') : ''}
                        </em>
                    </div>
                ) : (
                    <React.Fragment>
                        {/* If no longer loading and not published, set NotFound */}
                        {this.state.loaded ? (
                            <NotFound />
                        ) : (
                            // TODO: Make loading animation
                            <span>Loading</span>
                        )}
                    </React.Fragment>
                )}
            </React.Fragment>
        );
    }
}

export default BlogPost;
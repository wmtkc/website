import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Blog.css';

class PostCard extends React.Component {
    render() {
        return (
                <div className='card'>
                    <Link to={`/blog/${this.props.url}`}>
                        <img src={this.props.coverImg} alt={this.props.title} />
                        <div>
                            <span className='title'>{this.props.title}</span>
                            <em className='date'>{this.props.date}</em>
                        </div>
                    </Link>
                </div>
        );
    }
}

export default PostCard;
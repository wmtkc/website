import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Content.css';

class PostCard extends React.Component {
    render() {
        return (
            <Link to={`/blog/${this.props.url}`}>
                <div className='card'>
                    <img src={this.props.coverImg} alt={this.props.title} />
                    <div>
                        <span className='title'>{this.props.title}</span>
                        <span className='date'>{this.props.date}</span>
                    </div>
                </div>
            </Link>
        );
    }
}

export default PostCard;
import React from 'react';
import '../styles/Media.css';

class PostCard extends React.Component {
    render() {
        return (
            <div className='card'>
                <img src={this.props.coverImg} alt={this.props.title} />
                <div>
                    <span className='title'>{this.props.title}</span>
                    <span className='date'>{this.props.date}</span>
                </div>
            </div>
        );
    }
}

export default PostCard;
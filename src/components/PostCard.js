import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Blog.css';

class PostCard extends React.Component {
    render() {
        return (
                <div className='card'>
                    <Link to={`/blog/${this.props.url}`}>
                        {/* <div className='card-inner'> */}
                            {/* <div className='card-front'> */}
                                <img src={this.props.coverImg} alt={this.props.title} />
                                <div>
                                    <span className='title'>{this.props.title}</span>
                                    <em className='date'>{this.props.date}</em>
                                </div>
                            {/* </div> */}
                            {/* <div className='card-back'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            </div> */}
                        {/* </div> */}
                    </Link>
                </div>
        );
    }
}

export default PostCard;
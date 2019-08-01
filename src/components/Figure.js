import React from 'react';
import '../styles/Media.css';

const Figure = (props) => {
    return ( 
        <div className='figure'>
            <img src={require(this.props.source)} alt={this.props.altText} />
            <p>{this.props.caption}</p>
        </div>
    );
}

export default Figure;
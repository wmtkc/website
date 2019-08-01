import React from 'react';
import '../styles/Media.css';
import sailboat from '../img/sailboat.jpg';

class Figure extends React.Component {
    render () {
        return ( 
            <div className='figure'>
                <img src={this.props.source} alt={this.props.altText} />
                <p>{this.props.caption}</p>
            </div>
        );
    }
}

export default Figure;
import React from 'react';
import { Link } from 'react-router-dom';
import BlogFilter from '../containers/BlogFilter';
import BlogList from '../containers/BlogList';
import '../styles/Blog.css';
import '../styles/Content.css';

class Blog extends React.Component {
    constructor () {
        super()
        this.state = {
            tags: ['all'],
            order: 'descending'
        }
    }

    handleChange = (type, value) => {
        console.log("type: " + type + " value: " + value)

        // I'll leave this open-ended in case I add more filters
        if (type === 'tag') {
            if (this.state.tags.includes(value)) {
                let temp = this.state.tags;
                temp.splice(temp.indexOf(value), 1)
                if (temp.length === 0)
                    temp.push('all')
                this.setState({
                    tags: temp
                })
            } else {
                let temp = this.state.tags
                if (temp.includes('all')) {
                    temp.splice(temp.indexOf('all'), 1)
                }
                temp.push(value)
                this.setState({
                    tags: temp
                })
            }
            console.log('Tags: ' + this.state.tags)
        } else if (type === 'order') {
            // TODO: State not changing on first try
            if (this.state.order === 'descending') {
                this.setState({
                    order: 'ascending'
                })
            } else {
                this.setState({
                    order: 'descending'
                })
            }
        }

        console.log("BLOG STATE: " + JSON.stringify(this.state))
    }

    render () {
        return (
            <React.Fragment>
                <hr className='vfill'/>
                <div className='header'>
                    <span className='name-banner'>Blog</span>
                    <Link className='navlink' to='/about'>About</Link>
                </div>
                <div className='layout'>
                    <BlogFilter onChange={this.handleChange} order={this.state.order}/>
                    <BlogList tags={this.state.tags} order={this.state.order}/>
                </div>
            </React.Fragment>
        )
    }
}

export default Blog;
import React from 'react';
import { useRouteData } from 'react-static';
import ToggleButton from '../components/ToggleButton';

const BlogFilter = props => {
    const { tags } = useRouteData();
    const handleChange = (type, value) => {
        props.onChange(type, value)
    }
    const tagButtons = [];
    tags.forEach((tag, index) => {
        if (tag.data.published) {
            tagButtons.push(<ToggleButton key={index} onClick={() => handleChange('tag', tag.data.value)} text={tag.data.value} />)
        }
    })
    return (
        <div className='filters'>
            {/* <div className='filter-section order'>
                <span>Order</span>
                <ToggleButton className='orderButton' onClick={() => handleChange('order', 'toggle')} text='Descending' selectedText='Ascending' />
            </div> */}
            <div className='filter-section'>
                <span>With Tag</span>
                {tagButtons}
            </div>
        </div>
    )
}

export default BlogFilter;
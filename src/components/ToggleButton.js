import React from 'react';
import '../styles/Blog.css';

class ToggleButton extends React.Component {
    constructor (props) {
        super();
        this.state = {
            selected: false,
            text: props.text
        }
        this.text = props.text
        props.selectedText ? this.selectedText = props.selectedText : this.selectedText = null;
    }

    toggleSelected = () => {
        this.setState({
            selected: !this.state.selected
        })
        this.props.onClick();
        if (this.selectedText) {
            // TODO: state not changing on first try
            if (this.state.selected) {
                this.setState({
                    text: this.selectedText
                })
            } else {
                this.setState({
                    text: this.text
                })
            }
        }
    }
    
    render () {
        return (
            <div className={this.state.selected ? 'button selected' : 'button unselected'} onClick={this.toggleSelected}>{this.state.text}</div>
        )
    }
}

export default ToggleButton;
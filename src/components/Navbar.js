import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

class Navbar extends React.Component {
    constructor() {
        super();
        this.state = {extended: true};
    }

    toggleExtended = () => {
        this.setState({extended: !this.state.extended});
    }

    render() {
        return (
            <div className='nav-wrapper'> { this.state.extended 
              ? <div className='navbar'>
                    <div className='desktop-only'>
                        ICON
                    </div>
                    <div>
                        <NavLink exact to='/'>Home</NavLink>
                        <NavLink exact to='/projects'>Projects</NavLink>
                        <NavLink exact to='/blog'>Blog</NavLink>
                        <NavLink exact to='/about'>About</NavLink>
                        <NavLink exact to='/contact'>Contact</NavLink>
                    </div>
                    <div className='desktop-only'>
                        ICON
                    </div>
                </div> 
              : null }
                <div className='menu-toggle' onClick={this.toggleExtended}>MENU</div>
            </div>
        );
    }
}

export default Navbar;
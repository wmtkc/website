import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

class Navbar extends React.Component {
    constructor() {
        super();
        this.state = {
            extended: true
        };
    }

    toggleExtended = () => {
        this.setState({
            extended: !this.state.extended
        });
    }

    render() {
        return (
            <div className='nav-wrapper'>
                <div className={this.state.extended ? 'navbar' : 'collapsed'}>
                    <div className='icon desktop-only'>
                        {/* ICON */}
                    </div>
                    <div>
                        <nav>
                        <Link to='/'>Home</Link>
                        {/* <NavLink to='/projects'>Projects</NavLink> */}
                        <Link to='/blog'>Blog</Link>
                        <Link to='/about'>About</Link>
                        {/* <NavLink to='/contact'>Contact</NavLink> */}
                        </nav>
                    </div>
                    <div className='icon desktop-only'>
                        {/* ICON */}
                    </div>
                </div>
                <div className='menu-toggle' onClick={this.toggleExtended}>☰</div>
            </div>
        );
    }
}

export default Navbar;
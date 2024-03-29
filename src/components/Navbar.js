import React from 'react';
import { NavLink } from 'react-router-dom';
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
                            <NavLink exact to='/' activeClassName='active'>Home</NavLink>
                            {/* <NavLink to='/projects'>Projects</NavLink> */}
                            <NavLink to='/blog/' activeClassName='active'>Blog</NavLink>
                            <NavLink to='/about/' activeClassName='active'>About</NavLink>
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
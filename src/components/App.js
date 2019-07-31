import React from 'react';
import Navbar from './Navbar.js';
import Content from './Content.js';
import '../styles/Content.css';

const App = () => {
    return (
        <div className='app'>
            <Navbar />
            <Content />
        </div>
    );
}

export default App;
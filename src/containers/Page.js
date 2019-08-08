import React from 'react';
import Navbar from '../components/Navbar.js';
import Content from './Content.js';
import '../styles/Containers.css';

const Page = () => {
    return (
        <div className='page'>
            <Navbar />
            <Content />
        </div>
    );
}

export default Page;
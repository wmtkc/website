import React from 'react';
import { Root, Routes } from 'react-static';
import Navbar from './components/Navbar'
import './styles/Containers.css'

const App = () => {
    return (
        <Root>
            <Navbar />
            <div className='page'>
                <div className='content-wrapper'>
                    <React.Suspense fallback={<em>Loading...</em>}>
                        <Routes />
                    </React.Suspense>
                </div>
            </div>
        </Root>
    );
}

export default App;
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'babel-polyfill'
import App from './components/App.js';

const Index = () => {
    return (
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
}

ReactDOM.render(<Index />, document.getElementById('root'));
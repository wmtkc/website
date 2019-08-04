import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'babel-polyfill'
import Page from './components/Page.js';

const Index = () => {
    return (
        <BrowserRouter>
            <Page />
        </BrowserRouter>
    );
}

ReactDOM.render(<Index />, document.getElementById('root'));
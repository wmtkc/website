import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import CMS from 'netlify-cms';
import 'babel-polyfill'
import Page from './components/Page.js';

CMS.registerPreviewTemplate('my-template', MyTemplate);

const Index = () => {
    return (
        <BrowserRouter>
            <Page />
        </BrowserRouter>
    );
}

ReactDOM.render(<Index />, document.getElementById('root'));
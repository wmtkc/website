import React from 'react';
import { Root } from 'react-static';
// import CMS from 'netlify-cms';
// import 'babel-polyfill'
import Page from './containers/Page.js';
import './styles/Containers.css'
// CMS.registerPreviewTemplate('my-template', MyTemplate);

const App = () => {
    return (
        <Root>
            <Page />
        </Root>
    );
}

export default App;
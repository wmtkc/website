

import React from 'react'
import universal, { setHasBabelPlugin } from '/home/wtkc/Projects/website/node_modules/react-universal-component/dist/index.js'

setHasBabelPlugin()

const universalOptions = {
  loading: () => null,
  error: props => {
    console.error(props.error);
    return <div>An error occurred loading this page's template. More information is available in the console.</div>;
  },
  ignoreBabelRename: true
}

const t_0 = universal(import('../node_modules/react-static/lib/browser/components/Default404'), universalOptions)
      t_0.template = '../node_modules/react-static/lib/browser/components/Default404'
      
const t_1 = universal(import('../src/pages/About.js'), universalOptions)
      t_1.template = '../src/pages/About.js'
      
const t_2 = universal(import('../src/pages/Blog.js'), universalOptions)
      t_2.template = '../src/pages/Blog.js'
      
const t_3 = universal(import('../src/pages/Contact.js'), universalOptions)
      t_3.template = '../src/pages/Contact.js'
      
const t_4 = universal(import('../src/pages/Home.js'), universalOptions)
      t_4.template = '../src/pages/Home.js'
      
const t_5 = universal(import('../src/pages/NotFound.js'), universalOptions)
      t_5.template = '../src/pages/NotFound.js'
      
const t_6 = universal(import('../src/pages/Projects.js'), universalOptions)
      t_6.template = '../src/pages/Projects.js'
      

// Template Map
export default {
  '../node_modules/react-static/lib/browser/components/Default404': t_0,
'../src/pages/About.js': t_1,
'../src/pages/Blog.js': t_2,
'../src/pages/Contact.js': t_3,
'../src/pages/Home.js': t_4,
'../src/pages/NotFound.js': t_5,
'../src/pages/Projects.js': t_6
}
// Not Found Template
export const notFoundTemplate = "../node_modules/react-static/lib/browser/components/Default404"


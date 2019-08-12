import React from 'react'
import path from 'path'
import fs from 'fs'
import klaw from 'klaw'
import matter from 'gray-matter'
import axios from 'axios'

function getPosts () {
  console.log("GETTING POSTS")
  const items = []
  // Walk ("klaw") through posts directory and push file paths into items array //
  const getFiles = () => new Promise(resolve => {
    // Check if posts directory exists //
    if (fs.existsSync('public/posts')) {
      klaw('public/posts')
        .on('data', item => {
          // Filter function to retrieve .md files //
          if (path.extname(item.path) === '.md') {
            // If markdown file, read contents //
            const data = fs.readFileSync(item.path, 'utf8')
            // Convert to frontmatter object and markdown content //
            const dataObj = matter(data)
            // Create slug for URL //
            dataObj.data.slug = dataObj.data.url
            // Remove unused key //
            delete dataObj.orig
            // Push object into items array //
            items.push(dataObj)
          }
        })
        .on('error', e => {
          console.log(e)
        })
        .on('end', () => {
          // Resolve promise for async getRoutes request //
          // posts = items for below routes //
          resolve(items)
        })
        console.log("POSTS RETRIEVED")
    } else {
      // If src/posts directory doesn't exist, return items as empty array //
      console.log("NO POSTS FOUND")
      resolve(items)
    }
  })
  return getFiles()
}

export default {
  getRoutes: async () => {
    const posts = await getPosts();
    return [
      {
        path: '/blog',
        getData: async () => ({
          posts,
        }),
        children: posts.map(post => ({
          path: `/${post.data.slug}`,
          template: 'src/containers/BlogPost',
          getData: async () => ({
            post,
          }),
        })),
      },
    ]
  },
  Document: class CustomHtml extends React.Component {
    render() {
      const { Html, Head, Body, children } = this.props

      return (
        <Html>
          <Head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
          </Head>
          <Body>{children}</Body>
        </Html>
      )
    }
  },
  plugins: [
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/pages')
      }
    ],
    require.resolve('react-static-plugin-sitemap'),
    require.resolve('react-static-plugin-react-router')
  ],
  webpack: (config, { stage }) => {
    if (stage === 'prod') {
      config.entry = ['babel-polyfill', config.entry]
    } else if (stage === 'dev') {
      config.entry = ['babel-polyfill', ...config.entry]
    }
    return config
  },
}

import React from 'react'
import path from 'path'
import fs from 'fs'
import klaw from 'klaw'
import matter from 'gray-matter'

function getPosts () {
  const items = []
  // Walk ("klaw") through posts directory and push file paths into items array //
  const getFiles = () => new Promise(resolve => {
    // Check if posts directory exists //
    if (fs.existsSync('./src/posts')) {
      klaw('./src/posts')
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
    } else {
      // If src/posts directory doesn't exist, return items as empty array //
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
        path: '/',
        component: 'src/pages/Home',
      },
      {
        path: '/about',
        component: 'src/pages/About',
      },
      {
        path: '/projects',
        component: 'src/pages/Projects'
      },
      {
        path: '/contact',
        component: 'src/pages/contact'
      },
      {
        path: '/blog',
        component: 'src/pages/Blog',
        getData: () => ({
          posts,
        }),
        children: posts.map(post => ({
          path: `/blog/${post.data.slug}`,
          component: 'src/containers/BlogPost',
          getData: () => ({
            post,
          }),
        })),
      },
      // {
      //   is404: true,
      //   component: 'src/pages/NotFound',
      // },
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
  ]
}
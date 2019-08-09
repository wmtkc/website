import React from 'react'
import path from 'path'

export default {
  getRoutes: async () => {
    return [
      {
        path: '/',
        component: 'src/pages/Home',
      },
      {
        path: '/about',
        component: 'src/pages/About',
      },
      // {
      //   path: '/blog',
      //   component: 'src/pages/Blog',
      //   getData: () => ({
      //     posts,
      //   }),
      //   children: posts.map(post => ({
      //     path: `/blog/${post.id}`,
      //     component: 'src/containers/BlogPost',
      //     getData: () => ({
      //       post,
      //     }),
      //   })),
      // },
      // {
      //   is404: true,
      //   component: 'src/pages/NotFound',
      // },
    ]
  },
  Document: class CustomHtml extends React.Component {
    render () {
      const { Html, Head, Body, children, renderMeta } = this.props

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

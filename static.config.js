// This file is used to configure:
// - static-site generation
// - Document shell (index.html)
// - ...tons of other things!

// Get started at httsp://react-static.js.org

import Strapi from 'strapi-sdk-javascript'
import path from 'path'

const cms = 'http://localhost:1337'
const strapi = new Strapi(cms)

export default {
  // getRoutes: async () => {
  //   const { data: posts } = await strapi.getEntries('blogposts')

  //   return [
  //     {
  //       path: '/blog',
  //       getData: () => ({
  //         posts
  //       }),
  //       children: posts.map(post => ({
  //         path: `/blog/${post.url}`,
  //         template: 'src/components/BlogPost',
  //         getData: () => ({
  //           post,
  //         }),
  //       })),
  //     },
  //   ]
  // },
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

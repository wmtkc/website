---
layout: blog
title: Tech Specs
url: tech-specs
published: true
date: 2019-08-27T18:57:40.294Z
update: ''
tags:
  - Meta
  - Tech
---
This post is just to detail the technology stack that I used to implement this site. If that interests you, great! Read on! I'll try to add explanations of what each technology is for and links to where you can find them.

# JavaScript, HTML, and CSS

The Big Three of web development. Here's a quick explanation of each so you'll know what I'm referring to later.

[JavaScript](https://en.wikipedia.org/wiki/JavaScript) (ECMAScript 6) is an interpreted programming language that defines the logic of how a site will act. It handles logic on the frontend (what you see and interact with) as well as the backend (how the site interacts with other servers) admirably. It also comes with a whole suite of libraries and modules that can be easily loaded using the package manager [npm](https://nodejs.org/en/) (bundled with Node.js, another great tool used for server hosting).

[HTML](https://en.wikipedia.org/wiki/HTML) (HTML 5) is the markup language that is used to define the structure of a webpage. You might have seen tags that look something like <em>this</em> floating around every now and then. That's HTML. If you right-click on a webpage and choose "View Source" you'll see a whole lot of it. Each tag defines an element which can be manipulated either by JS to determine its behavior and/or by CSS to determine its appearance.

[CSS](https://en.wikipedia.org/wiki/Cascading_Style_Sheets) (CSS 3) is a styling language that lets you define the more advanced visual aspects of a site. You can add borders, define backgrounds, specify fonts, and even change the appearance of something when you hover over it with the mouse.

# React.js

[React.js](https://reactjs.org/) is a JavaScript library that can be used to build a framework. What that basically means is that I can easily manipulate exactly what content is displayed and change it dynamically. Consider how the list of blogposts changes when you select different tags in the filter on the [main page](/blog) Another major advantage of using a framework is componentization, a concept that lets me reuse code I've already written. For example, each blogpost on this site has the same basic structure (title, body, tags, etc.) which is populated by information when the site creates an instance.

React actually doesn't use HTML directly, it uses something called [JSX](https://reactjs.org/docs/introducing-jsx.html). It looks similar, but it is actually one of the many tools that developers have come up with to be able to change a page's HTML without reloading.

There are plenty of other frameworks that can achieve these results, but I went with React because it is the [most popular](https://www.npmtrends.com/angular-vs-react-vs-vue-vs-knockout-vs-ember-source) (and marketable) at the time of writing. Creating this site gave me a good excuse to learn it.

# React Static

[React Static](https://github.com/react-static/react-static) is a tool for generating static websites given a React application structure. A [static website](https://en.wikipedia.org/wiki/Static_web_page) is one that does not interface with a backend server to serve documents after it is loaded which is an ideal format for a blog site or a landing page. All of the routes (distinct URLs rooted at the domain) are generated and the raw data is fetched when the site is loaded. Each page is created from this data when a route is followed. It also means that my site is built upon the [JAMStack](https://jamstack.org/) guidelines, so it's certifiably hip, rad, trendy, and groovy.

I decided to use React Static in particular as it is the most structure-agnostic tool to do this job. Other static site generators for React such as [Gatsby](https://www.gatsbyjs.org/) or [Next.js](https://nextjs.org/) prescribe very specific tools and structures that are unique to their environment. With React Static I can use common tools like [React Router](https://reacttraining.com/react-router/) and [Webpack](https://webpack.js.org/) to make my experience with the React technology stack as broadly applicable (and therefore professionally marketable) as possible.

# Netlify CMS

If you know a lot about this kind of thing, you might be wondering how I am storing the content to be displayed by my website. After all, if I'm not accessing a backend server during runtime, where am I calling all of this blog data from? Surely he's not just storing it all in his Github repository and serving it up via some convoluted system of frontend processing...

Well, that's where [Netlify CMS](https://www.netlifycms.org/) comes in, because that's exactly what I'm doing. Netlify CMS is an open-source Content Management System that stores all of a site's related function in the same Git repository where it is stored. This sidesteps the need for a CMS that is accesed via an API, and consequently the need to host such a CMS on a seperate, dedicated server. Not only does this make my load times snappy, but it means I can basically host this website for the cost of the domain.

Basically, on the live website I can navigate to an administration frontend that gives me the ability to manipulate my files graphically. From there I can create markdown documents to structure a blogpost, upload images and other media, and create new entries in data collections. When an update is made, it pushes the changes directly to the site's Github repository. ([Github](https://github.com/) is an online host for Git repositories, which is an indispensible tool for storing code and tracking versions)

It has a steeper learning curve than most CMSs because you have to define the data collections in a YAML file, and accessing those collections requires some third-party tools like [Gray-Matter](https://github.com/jonschlinkert/gray-matter) and [Klaw](https://github.com/jprichardson/node-klaw), but it's relatively new and getting new features all the time.

When I first started building this site, I toyed with the idea of using an API based CMS called [Strapi](https://strapi.io/) (An API is just a way for one piece of sofware to interface with another). It was great (free and open-source too), but when I looked into third party hosting services like [Digital Ocean](https://www.digitalocean.com/), I realized they're pretty much all blocked in China. At the time of writing I'm about to spend four months there, so I didn't want to deal with that if at all possible.

# Netlify

This brings me to hosting the site itself. Because I've gone through the effort to use a static-site generator, I can host this site on [Netlify](https://www.netlify.com/), a static site server that has an excellent pricing plan for small sites like mine: free! When I (or my CMS) push an update to my GitHub repository, Netlify automatically starts building a new version of the site to serve.

Their Netlify Identity widget integrates smoothly with Netlify CMS so I can access my CMS frontend from anywhere. Netlify is recommended by pretty much everyone for static-site hosting and for good reason. I've also purchased my domain through them.

## Netlify Large Media

If you're horrified at the prospect of storing hundreds of photos and other media in the same bundle that is served upon loading the site, you can rest easy. Netlify has another service that provides a [Git LFS](https://git-lfs.github.com/) server which is also part of their free plan as long as I don't upload more than 2500 large media files per month. I'll try to control my shutter finger. Instead of storing the file itself, it stores a pointer to that file in a seperate server. The original media is fetched upon page load.

# Zoho Mail

[Zoho Mail](https://www.zoho.com/mail/) is pretty much the quickest and cheapest (it's free) way to receive and send emails using your own domain. It takes some tinkering with DNS records, but they do a good job of walking you through it. The only downside is that forewarding is not included in their free plan, so you have to use their front end. It's a good user interface though and has a bunch of API integrations, so I don't have any complaints.

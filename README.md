# Frontend Tooling

This repository is a template setup for using [Parcel](https://parceljs.org/) to produce a simple, static, seo friendly website. It's best use case will be for a site that you want to serve some mostly static HTML and don't want to worry about server side rendering. This would be the case for something like a resturant website that is sitting on shared hosting. This will NOT be setup for any fancy framework or single page application.

It will have a folder structure in the `src` folder that is setup and ready to use yourself, or if you'd like to use a different folder structure you can do so, you will just need to update a few path in the files.


## Requirements
- `Node`
- `npm` or `yarn`


## Basic Usage

Getting Started:

- `npm install`
- `yarn dev` - Starts a webpack dev server with hot reloading.

----
Producing a production build:

`yarn build` - Produced production ready static files in the distribution folder


## Features/Specs In Depth

### HTML
- HTML Partialing is done with `post-html` by adding the `.posthtmlrc.js` file at the root of the directory and then using the include tag like so `<include src="partials/head-tags.html"></include>`. Parcel takes care of the rest of the magic of building the files.

### Javascript
- Webpack Module Loading and Bundling Goals:
  - Ability to install 3rd party libraries and use them as modules
    - With ES6 Transpiling: `import $ from 'jquery';`
    - Without ES6 Transpiling: `var $ = require("jquery");`
  - Ability to write your own personal module/library for a projct, have it in some folder 
    - `src/util/utility.js` is used within the app and automatically picked up with webpack.
- Page specific scripts  and usage should be able to be organized in whatever manner you'd like within `src/` and will all be wrapped into a bundle.
- Transpiling ES6 Code
  - Use babel with Webpack to transpile the js within the `src/` folder, which allows writing whatever version of JS you'd like and have it transpiled back to ensure compatibility with target browsers. All js code will be put into the `dist/js` folder.


### CSS, fonts, images, etc.
- SASS Compilation
  - The `src/sass` folder will be allowed to contain multiple sass files with imports, the build process will bundle these, minify them and put them in `dist`.

- Image minification
  - The `src/imgs` folder is a folder that you can drop images in and when a build happens it should minify the image and put it in the `dist/imgs` folder.





### TODOs/ Enhancement:
- I would love to bring [Nunjucks](https://mozilla.github.io/nunjucks/) into the project 
- TODO Enhancement: Setup with tree shaking and lazy loading.
- Font loading?
- Source Maps
- Vendoring Prefixing
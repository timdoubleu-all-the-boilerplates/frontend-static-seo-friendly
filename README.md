# Frontend Tooling

This repository is a template setup for using webpack to produce a simple, static, seo friendly website. It's best use case will be for a site that you want to serve some mostly static HTML and don't want to worry about server side rendering. This would be the case for something like a resturant website that is sitting on shared hosting. This will NOT be setup for any fancy framework or single page application.

It will have a folder structure that you can use yourself, or if you'd like to use a different folder structure you may just need to update a few path names in the configuration files.


## Requirements
- Node

## Basic Usage

Development:

`npm install`

`npm start` - Starts a webpack dev server with hot reloading.

----
Producing a production build:

`npm startProd` - Equivalent of running `npm prodBuild && npm prodServer`.

`npm prodBuild` - Run the production webpack configuration to create a production build of the files.

`npm prodServer` - Runs a static server with production files in `dist`.


## Features/Specs In Depth

### HTML
- One or multiple html pages, this template is NOT meant for SPA's.
  - There are a few different solutions for this [detailed here](https://stackoverflow.com/questions/42193689/is-there-a-way-to-include-partial-using-html-webpack-plugin), they come with a few tricks since some of the webpack plugins to not work together. I have chosen a solution that relys on the [html-loader](https://webpack.js.org/loaders/html-loader/)
  - Webpack config will end up with multiple key value pairs in the `entry: { }` object. One for each page.
  - Then using the `HtmlWebpackPlugin` you can list an array of your pages of your application. The `chunks` key is used to tell webpack what scripts to put on the page, so a shared app script is used on all of the pages in the example below and then their page specific scripts are loaded.
  ```json
  entry: {
    app: "./src/js/app.js",
    index: "./src/js/index.js",
    pageTwo: "./src/js/page-two.js",
  },
  
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/html/index.html",
      inject: true,
      chunks: ["app", "index"],
      filename: "index.html"
    }),
    new HtmlWebpackPlugin({
      template: "./src/html/page-two.html",
      inject: true,
      chunks: ["app", "pageTwo"],
      filename: "page-two.html"
    })
  ]
  ```
- Ability to do HTML partials and basic HTML template variables in order add things like the site menu in one place.
  - This is achieved with [html-loader](https://webpack.js.org/loaders/html-loader/)
  - The following webpack config keys are what setup html-loader to pickup the html files and allow them to use `require` within them.
  - Partials and variables can be written to a seperate files and added within other html
    - Partials: `${require('./partials/head-tags.html')}`
    - Variables: `<title>${require('./partials/html-vars.js').index.title }</title>`

```json
  module: {
    rules: [{
      test: /\.html$/,
      use: [{
        loader: "html-loader",
        options: {
          interpolate: true
        }
      }],
    }]
  },
```


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
  - The `public/sass` folder will be allowed to contain multiple sass files with imports, the build process will bundle these, minify them and put them in `dist/css`.

- Font 
- Source Maps
- Vendoring Prefixing

- Image minification
  - The `public/imgs` folder is a folder that you can drop images in and when a build happens it should minify the image and put it in the `dist/imgs` folder.


- TODO Enhancement: Setup with tree shaking and lazy loading.


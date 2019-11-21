# frontend-static-seo-friendly
Boilerplate webpack code setup for fairly simple static websites that need to be seo friendly


# Frontend Tooling

This branch will have a basic boilerplate for a front end tooling setup. It will cover and document the items listed below.

This would be a great starting point for a frontend application or even if you want to put a static site together.

It will have a folder structure that you can use yourself, or if you'd like to use a different folder structure you may just need to update a few path names in the configuration files.


## Webpack Module Loading and Bundling

Webpack will be setup to resolve modules, allowing to split up your files in whatever logical folder structure you'd like within the `src/` folder. All js code will be put into the `dist/js` folder.

Enhancement: Setup with tree shaking and lazy loading.

## Transpiling ES6 Code

Webpack will be setup with babel to transpile the js within the `src/` folder, which allows writing whatever version of JS you'd like and have it transpiled back to ensure compatibility with target browsers. All js code will be put into the `dist/js` folder.

## SASS/LESS Compilation

The `public/sass` folder will be allowed to contain multiple sass files with imports, the build process will bundle these, minify them and put them in `dist/css`.

## Image minification

The `public/imgs` folder is a folder that you can drop images in and when a build happens it should minify the image and put it in the `dist/imgs` folder.



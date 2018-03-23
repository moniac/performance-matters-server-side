# performance-matters-server-side

# Table of Contents
1. [Setting up](##Setup)
2. [Tooling](##Tooling)
3. [Optimizing](##Optimizing)
4. [Progressive Enhancement](#Optimizing)

## Setup

To run this project:

``` git clone && npm run start ```

This will get watchify to watch the files & make the project available at http://localhost:3000.

## Tooling

For this project I decided to step away from Webpack and try my hand at NPM scripts.

The workflow exists of 2 main scripts:

### npm start

This will watch the /client folder where the Javascript is, bundle on any change, export to the /public/scripts folder and run nodemon.

``` "start": "npm run watch & nodemon app.js"```

### npm build

This will prepare the javascript code for deployment, minifying the Javascript code using uglify-js.

``` "build": "browserify ./client/script.js | uglifyjs -cm > public/scripts/bundle.js" ```

### Optimizing

The project doesn't have a lot of fancy CSS, but it does have a large amount of items. 

Here I will write out what tricks I used to make the website perform better.

<details>
<summary>Before & After Critical CSS </summary>

![Before Critical CSS](https://i.imgur.com/6a34Zfi.png)

![After Critical CSS](https://i.imgur.com/6xmxKmu.png)
</details>
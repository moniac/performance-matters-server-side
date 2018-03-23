# performance-matters-server-side

# Table of Contents
1. [Setting up](#setup)
2. [Tooling](#tooling)
3. [Optimizing](#optimizing)
4. [End Game](#end-game)
5. [Ideas for in the future](#ideas-for-in-the-future)

## Setup

To run this project:

``` git clone && npm run start ```

This will get watchify to watch the files & make the project available at http://localhost:3000.

The website shows a list of buildings that don't exist anymore in Amsterdam. Every list item can be clicked on to see more information about the building.

## Tooling

For this project I decided to step away from Webpack and try my hand at NPM scripts.

The workflow exists of 2 main scripts:

### npm start

This will watch the /client folder where the Javascript is, bundle on any change, export to the /public/scripts folder and run nodemon.

``` "start": "npm run watch & nodemon app.js"```

### npm build

This will prepare the javascript code for deployment, minifying the Javascript code using uglify-js.

``` "build": "browserify ./client/script.js | uglifyjs -cm > public/scripts/bundle.js" ```

### Progressive Enhancement

Currently, the website shows a list of buildings. Those who are fortunate enough to have Javascript enabled can use the input to search for specific buildings.

Those who don't have it enabled won't see the input. The website will stil work just as fine.

### Optimizing

The project doesn't have a lot of fancy CSS, but it does have a large amount of items. 

Here I will write out what tricks I used to make the website perform better.

### End Game

#### Total time saved on first paint: 1.31 seconds 

<details>
<summary>Before & After Critical CSS </summary>

This saved a lot of time!
![Before Critical CSS](https://i.imgur.com/6a34Zfi.png)

![After Critical CSS](https://i.imgur.com/6xmxKmu.png)
</details>

<details>
<summary>Before & After Async Defer </summary>

This saved very little, but every gain is a gain.
![Before Async/Defer](https://i.imgur.com/Pavus7Y.png)

![After Async/Defer](https://i.imgur.com/lksRe4g.png)
</details>

#### Ideas for in the future

* #### Virtual DOM

I'd like to use a virtual DOM to update the list of items. The one I am most familiar with is React, but it's a good excercise to use another one.

* #### Service Worker

With a service worker the list of data can be cached and loaded instantly, with no need for an internet connection.
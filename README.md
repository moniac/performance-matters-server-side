# performance-matters-server-side

# Table of Contents
1. [Setting up](#setup)
2. [Tooling](#tooling)
3. [Optimizing](#optimizing)
4. [End Game](#end-game)
5. [Ideas for in the future](#ideas-for-in-the-future)
6. [Adding service workers](#adding-service-workers)

The project is available at https://building.mohammedmulazada.nl/

## Setup

To run this project:

``` git clone ``` 
``` npm install ```
``` npm run start ```


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

The workings of that can be found in the filter.js file in the public folder.

I've also added a check to monitor if someone has an internet connection or not. That can be found in checkinternet.js

### Optimizing

The project doesn't have a lot of fancy CSS, but it does have a large amount of items. 

Here I will write out what tricks I used to make the website perform better.

### End Game

#### Total time saved on first paint: 1.31 seconds 

<details>
<summary>Before Optimizing </summary>

![Before](https://i.imgur.com/oogMVCD.jpg)

</details>

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

<details>
<summary>After Optimizing </summary>

![After](https://i.imgur.com/xlHdd31.jpg)

</details>

#### Ideas for in the future

* #### Virtual DOM

I'd like to use a virtual DOM to update the list of items. The one I am most familiar with is React, but it's a good excercise to use another one.

* #### Service Worker

With a service worker the list of data can be cached and loaded instantly, with no need for an internet connection.


### Adding Service Workers

The Voorhoede gave us a presentation on Service Workers. A very exciting technology that works on a seperate thread, it's very useful to cache files so it can display it when you lose internet access for example.

Currently, the service worker caches the index.html, Javascript, and the CSS.

### Other fixes

* Fixed the SEO, by adding

```<meta name='author' content='Mohammed Mulazada'> <meta name='keywords' content='sample'>```

* Pushed the project to my live server, using webhooks to make each commit get pulled to the server automatically

![All in all](http://i.imgur.com/zE5JLkM.jpg)
## About

This is a starter boilerplate app I've put together using the following technologies:

* ~~Isomorphic~~ [Universal](https://medium.com/@mjackson/universal-javascript-4761051b7ae9) rendering
* Both client and server make calls to load data from separate API server
* [React](https://github.com/facebook/react)
* [React Router](https://github.com/reactjs/react-router)
* [Express](http://expressjs.com)
* [Feathers](http://feathersjs.com/)
* [Passport](http://passportjs.org), [feathers-authentication](https://github.com/feathersjs/feathers-authentication) and [redux-auth-wrapper](https://github.com/mjrussell/redux-auth-wrapper) for authentication
* [Babel](http://babeljs.io) for ES6 and ES7 magic
* [Webpack](https://webpack.js.org/) for bundling
* [Webpack Dev Middleware](http://webpack.github.io/docs/webpack-dev-middleware.html)
* [Webpack Hot Middleware](https://github.com/glenjamin/webpack-hot-middleware)
* [Redux](https://github.com/reactjs/redux)'s futuristic [Flux](https://facebook.github.io/react/blog/2014/05/06/flux.html) implementation
* [Redux Dev Tools](https://github.com/reactjs/redux-devtools) for next generation DX (developer experience). Watch [Dan Abramov's talk](https://www.youtube.com/watch?v=xsSnOQynTHs).
* [ESLint](http://eslint.org) to maintain a consistent code style
* [react-final-form](https://github.com/final-form/react-final-form) to manage form state
* [lru-memoize](https://github.com/erikras/lru-memoize) to speed up form validation
* [multireducer](https://github.com/erikras/multireducer) to combine single reducers into one key-based reducer
* [style-loader](https://github.com/webpack/style-loader), [sass-loader](https://github.com/jtangelder/sass-loader) and [less-loader](https://github.com/webpack/less-loader) to allow import of stylesheets in plain css, sass and less,
* [bootstrap-loader](https://github.com/shakacode/bootstrap-loader) to customize Bootstrap
* [font-awesome](https://github.com/FortAwesome/Font-Awesome)
* [react-helmet](https://github.com/nfl/react-helmet) to manage title and meta tag information on both server and client
* [Jest](https://facebook.github.io/jest/) to allow writing unit tests for the project.

I cobbled this together from a wide variety of similar "starter" repositories. As I post this in June 2015, all of these libraries are right at the bleeding edge of web development. They may fall out of fashion as quickly as they have come into it, but I personally believe that this stack is the future of web development and will survive for several years. I'm building my new projects like this, and I recommend that you do, too.

## Features

<dl>
  <dt>Hot reload</dt>
  <dd>Enjoy the developer experience! Your saved changes to the CSS and JS are reflected instantaneously without refreshing the page ! On the server as on the client.
  Preserving the state of application on the client.</dd>

  <dt>Next generation JavaScript</dt>
  <dd>Use JSX syntax with all ES6 features, and some of ES7 (see <a href=".babelrc">.babelrc</a>).</dd>

  <dt>CSS in modules</dt>
  <dd>Write composable, modular and maintenable CSS with your components.</dd>

  <dt>Predictable state management</dt>
  <dd>Unidirectional data flow with <a href="http://redux.js.org">Redux</a> helps you write applications that behave consistently and are easy to test. On top of that, it provides a great developer experience.</dd>

  <dt>Backend API oriented services</dt>
  <dd>With <a href="http://feathersjs.com">Feathers</a> it's easy to create scalable real-time applications with services and hooks. 
  <a href="https://en.wikipedia.org/wiki/Cross-cutting_concern">Cross cutting concerns</a> are an extremely powerful part of aspect oriented programming. They are a very good fit for web and mobile applications since the majority are primarily CRUD applications with lots of shared functionality. You can create before and after hooks and chain them together to create very complex processes while still maintaining modularity and flexibility.</dd>

  <dt>Authentication</dt>
  <dd><a href="http://passportjs.org">Passport</a> authentication allows you to use all the desired strategies. The connections in REST and in real time are protected in the same way with the hooks. React-router, redux and <a href="https://github.com/mjrussell/redux-auth-wrapper">redux-auth-wrapper</a> allow you to keep control in your React app.</dd>

  <dt>Progressive wep app & Offline-first</dt>
  <dd>Progressive Web Apps are user experiences that have the reach of the web, and are:<br>
Reliable - Load instantly and never show the downasaur, even in uncertain network conditions.<br>
Fast - Respond quickly to user interactions with silky smooth animations and no janky scrolling.<br>
Engaging - Feel like a natural app on the device, with an immersive user experience.<br><br>
This new level of quality allows Progressive Web Apps to earn a place on the user's home screen.</dd>

  <dt>Lazy loading & dynamic routing</dt>
  <dd>The code splitting makes the size of your main bundle almost fixed, and with react-router you can load application pieces on demand. You can send bundles to people who are only trained, such as administration.</dd>

  <dt>Universal rendering</dt>
  <dd>With the help of server side rendering the first rendering is never empty and performance is better. This is the time for example to prefetch the data.
<a href="https://github.com/halt-hammerzeit/webpack-isomorphic-tools">Webpack-isomorphic-tools</a> to allow require() work for statics both on client and server.</dd>
</dl>

## Installation

```bash
npm
```

## Running Dev Server

```bash
npm run dev
```

The first time it may take a little while to generate the first `webpack-assets.json` and complain with a few dozen `[webpack-isomorphic-tools] (waiting for the first Webpack build to finish)` printouts, but be patient. Give it 30 seconds.

## Building for production

```bash
npm build
```
#### Styles

This project uses [local styles](https://medium.com/seek-ui-engineering/the-end-of-global-css-90d2a4a06284) using [css-loader](https://github.com/webpack/css-loader). The way it works is that you import your stylesheet at the top of the `render()` function in your React Component, and then you use the classnames returned from that import. Like so:

```javascript
render() {
const styles = require('./App.scss');
...
```

Then you set the `className` of your element to match one of the CSS classes in your SCSS file, and you're good to go!

```jsx
<div className={styles.mySection}> ... </div>
```
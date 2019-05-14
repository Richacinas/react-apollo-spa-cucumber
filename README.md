## About

* [React](https://github.com/facebook/react)
* [React Router](https://github.com/reactjs/react-router)
* [Babel](http://babeljs.io) for ES6 and ES7 magic
* [Webpack](https://webpack.js.org/) for bundling
* [Webpack Dev Server](https://github.com/webpack/webpack-dev-server)
* [ESLint](http://eslint.org) to maintain a consistent code style
* [style-loader](https://github.com/webpack/style-loader), [sass-loader](https://github.com/jtangelder/sass-loader) and [less-loader](https://github.com/webpack/less-loader) to allow import of stylesheets in plain css, sass and less,
* [font-awesome](https://github.com/FortAwesome/Font-Awesome)

## Features

<dl>
  <dt>Hot reload</dt>
  <dd>Enjoy the developer experience! Your saved changes to the CSS and JS are reflected instantaneously without refreshing the page ! On the server as on the client.
  Preserving the state of application on the client.</dd>

  <dt>Next generation JavaScript</dt>
  <dd>Use JSX syntax with all ES6 features, and some of ES7 (see <a href=".babelrc">.babelrc</a>).</dd>

  <dt>CSS in modules</dt>
  <dd>Write composable, modular and maintenable CSS with your components.</dd>

  <dt>Progressive wep app & Offline-first</dt>
  <dd>Progressive Web Apps are user experiences that have the reach of the web, and are:<br>
Reliable - Load instantly and never show the downasaur, even in uncertain network conditions.<br>
Fast - Respond quickly to user interactions with silky smooth animations and no janky scrolling.<br>
Engaging - Feel like a natural app on the device, with an immersive user experience.<br><br>
This new level of quality allows Progressive Web Apps to earn a place on the user's home screen.</dd>

  <dt>Lazy loading & dynamic routing</dt>
  <dd>The code splitting makes the size of your main bundle almost fixed, and with react-router you can load application pieces on demand. You can send bundles to people who are only trained, such as administration.</dd>

</dl>

## Installation

```bash
npm
```

## Running Dev Server

```bash
npm run dev
```


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
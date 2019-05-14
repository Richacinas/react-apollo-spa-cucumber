/**
 * THIS IS THE ENTRY POINT FOR THE CLIENT OF OUR SPA
 */
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { renderRoutes } from 'react-router-config';
import { trigger } from 'redial';
import { createBrowserHistory } from 'history';
import Loadable from 'react-loadable';
import { AppContainer as HotEnabler } from 'react-hot-loader';
import apiClient from 'helpers/apiClient';
import routes from 'routes';
import asyncMatchRoutes from 'utils/asyncMatchRoutes';
import { RouterTrigger } from 'components';
import NProgress from 'nprogress';

const dest = document.getElementById('content');

const client = apiClient();
const providers = {
  client
};

(async () => {
  const history = createBrowserHistory();

  const triggerHooks = async (_routes, pathname) => {
    NProgress.start();

    const { components, match, params } = await asyncMatchRoutes(_routes, pathname);
    const triggerLocals = {
      ...providers,
      match,
      params,
      history,
      location: history.location
    };

    await trigger('inject', components, triggerLocals);

    // Fetch mandatory data dependencies for 2nd route change onwards:
    await trigger('fetch', components, triggerLocals);
    await trigger('defer', components, triggerLocals);

    NProgress.done();
  }; 

  const hydrate = _routes => {
    const element = (
      <HotEnabler>
        <Router history={history}>
          <RouterTrigger trigger={pathname => triggerHooks(_routes, pathname)}>{renderRoutes(_routes)}</RouterTrigger>
        </Router>
      </HotEnabler>
    );

    if (dest.hasChildNodes()) {
      ReactDOM.hydrate(element, dest);
    } else {
      ReactDOM.render(element, dest);
    }
  };

  await Loadable.preloadReady();

  hydrate(routes);

  // Hot reload
  if (module.hot) {
    module.hot.accept('./routes', () => {
      const nextRoutes = require('./routes');
      hydrate(nextRoutes.__esModule ? nextRoutes.default : nextRoutes)
    });
  }

  // Server-side rendering check
  if (process.env.NODE_ENV !== 'production') {
    window.React = React; // enable debugger
  }
})();

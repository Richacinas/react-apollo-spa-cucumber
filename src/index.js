/* eslint-disable no-underscore-dangle */
/**
 * THIS IS THE ENTRY POINT FOR THE CLIENT OF OUR SPA
 */
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { AppContainer as HotEnabler } from 'react-hot-loader';
import routes from 'routes';
import { RouterTrigger } from 'components';
import NProgress from 'nprogress';
import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo-hooks';
import { resolvers, typeDefs } from './resolvers';

const cache = new InMemoryCache();
const dest = document.getElementById('content');

const client = new ApolloClient({
  uri: 'http://localhost:4010/api/graphql',
  cache,
  typeDefs,
  resolvers,
});

const data = {
  User: {
    nombre: 'carlos',
    apellido: 'lara',
    edad: 28,
    __typename: 'User',
    id: 'idRandom',
  },
};

cache.writeData({ data });
client.onResetStore(() => cache.writeData({ data }));

(async () => {
  const triggerHooks = async (_routes, pathname) => {
    NProgress.start();

    NProgress.done();
  };

  const hydrate = _routes => {
    const element = (
      <HotEnabler>
        <BrowserRouter>
          <RouterTrigger trigger={pathname => triggerHooks(_routes, pathname)}>
            <ApolloProvider client={client}>{renderRoutes(_routes)}</ApolloProvider>
          </RouterTrigger>
        </BrowserRouter>
      </HotEnabler>
    );

    if (dest.hasChildNodes()) {
      ReactDOM.hydrate(element, dest);
    } else {
      ReactDOM.render(element, dest);
    }
  };

  hydrate(routes);

  // Hot reload
  if (module.hot) {
    module.hot.accept('./routes', () => {
      hydrate(routes.__esModule ? routes.default : routes);
    });
  }
})();

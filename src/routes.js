import { App, Home, NotFound } from 'containers';
import About from 'containers/About/Loadable';

const routes = [
  {
    component: App,
    routes: [
      { path: '/', exact: true, component: Home },
      { path: '/about', component: About },
      { component: NotFound },
    ],
  },
];

export default routes;

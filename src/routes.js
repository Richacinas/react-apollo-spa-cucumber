import { App, Home, About, Register, NotFound } from 'containers';

const routes = [
  {
    component: App,
    routes: [
      { path: '/', exact: true, component: Home },
      { path: '/about', component: About },
      { path: '/register', component: Register },
      { component: NotFound },
    ],
  },
];

export default routes;

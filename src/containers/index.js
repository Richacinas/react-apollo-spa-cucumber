import React, { Suspense, lazy } from 'react';

/* Chunkable and lazy loaded components */
const LazyAbout = lazy(() => import('./About/About'));
const LazyRegister = lazy(() => import('./Register/Register'));

const About = props => (
  <Suspense fallback={<div>Loading</div>}>
    <LazyAbout {...props} />
  </Suspense>
);

const Register = props => (
  <Suspense fallback={<div>Loading</div>}>
    <LazyRegister {...props} />
  </Suspense>
);
/* End */

export App from './App/App';
export Home from './Home/Home';
export NotFound from './NotFound/NotFound';
export { About, Register };

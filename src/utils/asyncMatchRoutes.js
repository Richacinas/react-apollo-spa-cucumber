import { matchRoutes } from 'react-router-config';

const getComponents = match => match
  .map(v => v.route.component)
  .reduce(async (result, component) => {
    if (component.preload) {
      const res = await component.preload();
      const ret = [...(await result), component, ...[].concat(res)];
      return ret;
    }
    return [...(await result), component];
  }, []);

const getParams = match => match.reduce((result, component) => {
  if (component.match && component.match.params) {
    return { ...result, ...component.match.params };
  }
  return result;
}, {});

const asyncMatchRoutes = async (routes, pathname) => {
  const match = matchRoutes(routes, pathname);
  const params = getParams(match);
  const components = await getComponents(match);

  return { components, match, params };
};

export default asyncMatchRoutes;

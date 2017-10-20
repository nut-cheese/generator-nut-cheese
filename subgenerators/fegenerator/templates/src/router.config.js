import Home from './containers/home';
import Prev from './containers/prev';
import Next from './containers/next';

const routerConfig = [{
  path: '/',
  indexRoute: {
    component: Home
  },
  childRoutes: [{
    path: 'prev',
    component: Prev
  }, {
    path: 'next',
    component: Next,
  }]
}];

export default routerConfig;

import { useRoutes } from 'react-router-dom';

import { IRoute } from './config/route-config';
import HomePage from '../pages/home/home-page';
import NotFound from '../pages/not-found/not-found';

const routeTree: IRoute[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

const Router = () => useRoutes(routeTree);

export default Router;

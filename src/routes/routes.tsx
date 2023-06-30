import React from 'react';
import { useRoutes } from 'react-router-dom';

import { IRoute, authRoutes } from './config';
import LazyLoader from '../components/ui/loaders/loader-lazy';

const routeTree: IRoute[] = [
  {
    path: '/',
    element: LazyLoader(React.lazy(() => import('../pages/home/home-page'))),
  },
  ...authRoutes,
  {
    path: '*',
    element: LazyLoader(
      React.lazy(() => import('../pages/not-found/not-found'))
    ),
  },
];

const Router = () => useRoutes(routeTree);

export default Router;

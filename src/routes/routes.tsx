import React from 'react';
import { useRoutes } from 'react-router-dom';

import { appRoutes } from './config/application-config';
import { authRoutes } from './config/authentication-config';
import { IRoute } from './config/route-config';
import LazyLoader from '../components/ui/loaders/loader-lazy';

const routeTree: IRoute[] = [
  ...authRoutes,
  ...appRoutes,
  {
    path: '*',
    element: LazyLoader(
      React.lazy(() => import('../pages/not-found/not-found'))
    ),
  },
];

const Router = () => useRoutes(routeTree);

export default Router;

import React from 'react';

import { IRoute } from './route-config';
import LazyLoader from '../../components/ui/loaders/loader-lazy';

export const appRoutes: IRoute[] = [
  {
    element: LazyLoader(
      React.lazy(() => import('../../layouts/application/app-layout'))
    ),
    children: [
      {
        path: '/',
        element: LazyLoader(
          React.lazy(() => import('../../pages/home/home-page'))
        ),
        authGuard: true,
      },
    ],
  },
];

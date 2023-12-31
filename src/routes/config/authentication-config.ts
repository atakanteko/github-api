import React from 'react';

import { IRoute } from './route-config';
import LazyLoader from '../../components/ui/loaders/loader-lazy';

export const authRoutes: IRoute[] = [
  {
    element: LazyLoader(
      React.lazy(() => import('../../layouts/authentication/auth-layout'))
    ),
    children: [
      {
        path: '/login',
        element: LazyLoader(
          React.lazy(() => import('../../pages/login/login'))
        ),
        authGuard: true,
      },
    ],
  },
];

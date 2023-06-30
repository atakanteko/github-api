import React from 'react';

import LazyLoader from '../../components/ui/loaders/loader-lazy';

import { IRoute } from '.';

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

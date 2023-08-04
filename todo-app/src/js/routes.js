import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RouteWithSubRoutes from './RouteWithSubRoutes';

const Landing = lazy(() => import('./landing/index'));

const routes = [
  {
    path: '/',
    component: Landing,
  },
];

const AppRouter = () => {
  return (
    <Router>
      <Suspense fallback={<div className="lazy-loading">Loading...</div>}>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Suspense>
    </Router>
  );
};

export default AppRouter;

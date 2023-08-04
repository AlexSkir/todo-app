import { hot } from 'react-hot-loader';
import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import SEO from './common/SEO';
import AppRouter from './routes';

const App = () => {
  return (
    <HelmetProvider>
      <SEO />
      <AppRouter />
    </HelmetProvider>
  );
};

export default hot(module)(App);

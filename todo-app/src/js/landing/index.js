import * as React from 'react';
import Navbar from './Navbar';
import FirstScreen from './FirstScreen';
import Features from './Features';
import Templates from './Templates';
import HowItWorks from './HowItWorks';
import AppFooter from './AppFooter';
import withRoot from '../common/withRoot';

function Landing() {
  return (
    <>
      <Navbar />
      <FirstScreen />
      <Features />
      <Templates />
      <HowItWorks />
      <AppFooter />
    </>
  );
}

export default withRoot(Landing);

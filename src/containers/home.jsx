import React from 'react';
import {Helmet} from 'react-helmet';

/**
 * Home Page component
 * @module app-container/home
 * @return {JSX.Element} <Home />
 */
const Home = () => (
  <>
    <Helmet>
      <title>Home Page</title>
      <meta name="description" content="Home Page" />
    </Helmet>
    <div className="home-page page">
      <h1 className="mt-4 mb-3">Home page</h1>
    </div>
  </>
);

export default Home;

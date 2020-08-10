import React from "react";
import { Helmet } from "react-helmet";

function Home() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="Home Page" />
      </Helmet>
      <div className="home-page page">
        <h1>Home page</h1>
      </div>
    </>
  );
}

export default Home;

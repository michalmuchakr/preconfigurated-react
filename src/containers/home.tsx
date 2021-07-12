import React, { FunctionComponent } from "react";
import ContainerWrapper from "./container-wrapper";

const Home : FunctionComponent = () => (
  <ContainerWrapper
    pageTitle="Home Page"
    pageDescription="Home Page"
    pageName="home"
  >
    <div className="home-page page">
      <h1 className="mt-4 mb-3">Home page</h1>
    </div>
  </ContainerWrapper>
);

export default Home;

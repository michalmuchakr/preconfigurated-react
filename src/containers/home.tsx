import React, {FunctionComponent} from 'react';
import ContainerWrapper from './container-wrapper';
import HomePageContent from "../components/home-page/home-page-content";

/**
 * Home Page container
 * @module app-container/home-page
 * @return {JSX.Element}
 */
const Home : FunctionComponent = () : JSX.Element => (
  <ContainerWrapper
    pageTitle="Home Page"
    pageDescription="Home Page"
    pageName="home"
  >
    <HomePageContent />
  </ContainerWrapper>
);

export default Home;

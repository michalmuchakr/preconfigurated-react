import * as React from 'react';
import ContainerWrapper from './container-wrapper';
import HomePageContent from '../components/home-page/home-page-content';

/**
 * Home Page container
 * @module app-container/home-page
 * @return {ReactElement}
 */
const Home = () => (
  <ContainerWrapper
    pageTitle="Home Page"
    pageDescription="Home Page"
    pageName="home"
  >
    <HomePageContent />
  </ContainerWrapper>
);

export default Home;

import * as React from 'react';
import HeroList from './hero-list';
import PageTitle from '../shared/page-title';

const HeroPageContent = (): JSX.Element => (
  <div className="hero-page page">
    <PageTitle pageTitle="Hero list page" />
    <HeroList />
  </div>
);

export default HeroPageContent;

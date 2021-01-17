import React from 'react';
import {useAppStateContext} from 'app-context.jsx';
import HeroItem from './hero-item.jsx';

const HeroList = () => {
  const {heroData, isLoading, loadingID} = useAppStateContext();

  return (
    <ul className="example-page__list">
      {heroData &&
        !heroData.length &&
        isLoading &&
        loadingID === 'heroList' && <span>loading...</span>}
      {heroData &&
        heroData.map((hero, index) => (
          <HeroItem key={`hero-${hero.id}`} hero={hero} index={index} />
        ))}
    </ul>
  );
};

export default HeroList;

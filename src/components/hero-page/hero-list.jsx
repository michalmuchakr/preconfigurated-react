import * as React from 'react';
import {useAppStateContext} from 'store/app-context';
import HeroItem from './hero-item';

const HeroList = () => {
  const {heroData, isLoading, loadingID} = useAppStateContext();

  return (
    <ul className="hero-page__list mb-4">
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

import * as React from 'react';
import {useAppStateContext} from '../../store/app-context';
import {HeroItem} from './hero-item';

const HeroList = () => {
  const {heroData, isLoading, loadingID} = useAppStateContext();

  return (
    <ul className="hero-page__list mb-4">
      {!heroData?.length && isLoading && loadingID === 'heroList' && (
        <span>loading...</span>
      )}
      {heroData &&
        heroData.map((hero, index) => (
          <HeroItem
            id={hero.id}
            description={hero.description}
            firstName={hero.firstName}
            orderNumber={index}
            key={hero.id}
          />
        ))}
    </ul>
  );
};

export default HeroList;

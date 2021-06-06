import React, {useRef} from 'react';
import {useAppStateContext} from 'app-context.jsx';
import HeroItem from './hero-item.jsx';

const HeroList = () => {
  const {heroData, isLoading, loadingID} = useAppStateContext();
  const editedFields = useRef({});

  return (
    <ul className="example-page__list mb-4">
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

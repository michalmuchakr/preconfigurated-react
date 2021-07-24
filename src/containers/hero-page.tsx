import React, {FunctionComponent, useEffect, ReactElement} from 'react';
import {getHeroes, setError} from '../actions/heros';
import {useAppDispatchContext} from '../app-context';
import ContainerWrapper from './container-wrapper';
import HeroPageContent from '../components/hero-page/hero-page-content';

import 'styles/hero-page.scss';

/**
 * Hero Page container
 * @module app-container/hero-page
 * @return {ReactElement} <Example />
 */
const HeroPage: FunctionComponent = (): ReactElement => {
  const appDispatch = useAppDispatchContext();

  useEffect(() => {
    getHeroes(appDispatch).catch((e: object) => setError(e));
  }, []);

  return (
    <ContainerWrapper
      pageTitle="Example Page"
      pageDescription="Hero page, show list of heroes"
      pageName=""
    >
      <HeroPageContent />
    </ContainerWrapper>
  );
};

export default HeroPage;

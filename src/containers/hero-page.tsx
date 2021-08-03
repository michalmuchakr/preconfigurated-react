import * as React from 'react';
import {getHeroes, setError} from '../actions/heros';
import {useAppDispatchContext} from '../store/app-context';
import ContainerWrapper from './container-wrapper';
import HeroPageContent from '../components/hero-page/hero-page-content';

import 'styles/hero-page.scss';

/**
 * Hero Page container
 * @module app-container/hero-page
 * @return {ReactNode} <HeroPage />
 */
const HeroPage = (): JSX.Element => {
  const appDispatch = useAppDispatchContext();

  React.useEffect(() => {
    getHeroes(appDispatch).catch((e) => setError(e));
  }, [appDispatch]);

  return (
    <ContainerWrapper
      pageTitle="Hero page"
      pageDescription="Hero page, show list of heroes"
      pageName=""
    >
      <HeroPageContent />
    </ContainerWrapper>
  );
};

export default HeroPage;

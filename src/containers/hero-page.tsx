import * as React from 'react';
import {getHeroes} from '../actions/heros-actions';
import {useAppDispatchContext} from '../store/app-context';
import ContainerWrapper from './container-wrapper';
import HeroPageContent from '../components/hero-page/hero-page-content';
import {actionObjectShape} from '../types/actions/common';
import {Dispatch} from 'react';

/**
 * Hero Page container
 * @module app-container/hero-page
 * @return {ReactNode} <HeroPage />
 */
const HeroPage = (): JSX.Element => {
  const appDispatch: Dispatch<actionObjectShape> | null =
    useAppDispatchContext();

  React.useEffect(() => {
    getHeroes(appDispatch, 'qweqweqweqwe');
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

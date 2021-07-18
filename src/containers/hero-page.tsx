import React, { FunctionComponent, useEffect } from "react";
import {getHeroes, setError} from '../actions/heros';
import {useAppDispatchContext} from '../app-context.jsx';
import 'styles/hero-page.scss';
import ContainerWrapper from "./container-wrapper";
import HeroPageContent from "../components/hero-page/hero-page-content";

/**
 * Hero Page container
 * @module app-container/hero-page
 * @return {JSX.Element} <Example />
 */
const HeroPage : FunctionComponent = () : JSX.Element => {
  const appDispatch = useAppDispatchContext();

  useEffect(() => {
    getHeroes(appDispatch).catch((e: object) => setError(e));
  }, []);

  return (
    <ContainerWrapper
      pageTitle='Example Page'
      pageDescription='Hero page, show list of heroes'
      pageName=''
    >
      <HeroPageContent />
    </ContainerWrapper>
  );
};

export default HeroPage;

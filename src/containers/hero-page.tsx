import React, { FunctionComponent, useEffect } from "react";
import {Helmet} from 'react-helmet';
import {getHeroes, setError} from '../actions/heros';
import {useAppDispatchContext} from '../app-context.jsx';
import HeroList from '../components/hero-page/hero-list.jsx';
import 'styles/hero-page.scss';

/**
 * Example Page component
 * @module app-container/example
 * @return {JSX.Element} <Example />
 */
const HeroPage : FunctionComponent = (): JSX.Element => {
  const appDispatch = useAppDispatchContext();

  useEffect(() => {
    getHeroes(appDispatch).catch((e: object) => setError(e));
  }, []);

  return (
    <>
      <Helmet>
        <title>Example Page</title>
        <meta name="description" content="Example Page" />
      </Helmet>
      <div className="example-page page">
        <h1 className="mt-4 mb-3">Example page</h1>
        <HeroList />
      </div>
    </>
  );
};

export default HeroPage;

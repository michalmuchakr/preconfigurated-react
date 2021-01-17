import React, {useEffect} from 'react';
import {Helmet} from 'react-helmet';
import {getHeroes, setError} from 'actions/heros';
import {useAppDispatchContext} from 'app-context.jsx';
import HeroList from 'components/example/hero-list.jsx';
import 'styles/hero-page.scss';

/**
 * Example Page component
 * @module container/example
 * @return {JSX.Element} <Example />
 */
const Example = () => {
  const appDispatch = useAppDispatchContext();

  useEffect(() => {
    getHeroes(appDispatch).catch((e) => setError(e));
  }, []);

  return (
    <>
      <Helmet>
        <title>Example Page</title>
        <meta name="description" content="Example Page" />
      </Helmet>
      <div className="example-page page">
        <h1>Example page</h1>
        <HeroList />
      </div>
    </>
  );
};

export default Example;

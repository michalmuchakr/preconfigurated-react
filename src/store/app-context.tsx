import * as React from 'react';

import appInitialState from './app-global-store';
import {appReducer} from '../reducers/app-reducer';
import PropTypes from 'prop-types';
import AppContextType from '../types/store/app-context';
const AppStateContext = React.createContext({});
const AppDispatchContext = React.createContext({});

const lazyInitState = () => appInitialState;

const AppContext = ({children}: AppContextType) => {
  const [appState, appDispatch] = React.useReducer(
    appReducer,
    appInitialState,
    lazyInitState,
  );

  return (
    <AppStateContext.Provider value={appState}>
      <AppDispatchContext.Provider value={appDispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
};

function useAppStateContext() {
  const appContext = React.useContext(AppStateContext);
  if (appContext === undefined) {
    throw new Error('useAppStateContext must be used within a CountProvider');
  }
  return appContext;
}

function useAppDispatchContext() {
  const appDispatch = React.useContext(AppDispatchContext);
  if (appDispatch === undefined) {
    throw new Error(
      'useAppDispatchContext must be used within a CountProvider',
    );
  }
  return appDispatch;
}

AppContext.propTypes = {
  children: PropTypes.node.isRequired,
};

export {useAppStateContext, useAppDispatchContext};
export default AppContext;

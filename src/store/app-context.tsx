import React, {
  createContext,
  useContext,
  useReducer,
  ReactElement,
  FC,
} from 'react';

import appInitialState from './app-global-store';
import {appReducer} from '../reducers/app-reducer';
import PropTypes from 'prop-types';

const AppStateContext = createContext({});
const AppDispatchContext = createContext({});

const lazyInitState = () => appInitialState;

const AppContext: FC = ({children}): ReactElement => {
  const [appState, appDispatch] = useReducer(
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
  const appContext = useContext(AppStateContext);
  if (appContext === undefined) {
    throw new Error('useAppStateContext must be used within a CountProvider');
  }
  return appContext;
}

function useAppDispatchContext() {
  const appDispatch = useContext(AppDispatchContext);
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

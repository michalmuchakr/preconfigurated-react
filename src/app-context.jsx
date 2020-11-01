import React, {createContext, useContext, useReducer, useMemo} from 'react';
import {appInitialState, appReducer} from './reducers/app-reducer';
import PropTypes from 'prop-types';

const AppStateContext = createContext(null);
const AppDispatchContext = createContext(null);

const lazyInitState = () => {
  return appInitialState;
};

/**
 * Context Providers
 * @function AppContext
 * @param {JSX.Element} children
 *  */
const AppContext = ({children}) => {
  const [appState, appDispatch] = useReducer(
    appReducer,
    appInitialState,
    lazyInitState,
  );

  return (
    <AppStateContext.Provider value={useMemo(() => appState, [appState])}>
      <AppDispatchContext.Provider
        value={useMemo(() => appDispatch, [appDispatch])}
      >
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

/**
 * Context useAppDispatchContext
 * @function AppContext
 *  */
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

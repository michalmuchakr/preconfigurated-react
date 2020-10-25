import React, {createContext, useContext, useReducer, useMemo} from 'react';
import {appInitialState, appReducer} from './reducers/app-reducer';

const AppStateContext = createContext(null);
const AppDispatchContext = createContext(null);

/**
 * Context Providers
 * @function AppContext
 * @param { node } children
 *  */
const AppContext = ({children}) => {
  const [appState, appDispatch] = useReducer(appReducer, appInitialState);

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

export {useAppStateContext, useAppDispatchContext};
export default AppContext;

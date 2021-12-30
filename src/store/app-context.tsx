import {createContext, useContext, useReducer} from 'react';

import appInitialState from './app-global-store';
import {appReducer} from '../reducers/app-reducer';
import AppContextType from '../types/store/app-context-type';
import AppStoreType from '../types/store/app-store-type';
import {actionObjectShape} from '../types/actions/common';
import {Dispatch} from 'react';
const AppStateContext = createContext<AppStoreType>(appInitialState);
const AppDispatchContext = createContext<Dispatch<actionObjectShape> | null>(
  null,
);

const AppContext = ({children}: AppContextType): JSX.Element => {
  const [appState, appDispatch] = useReducer(appReducer, appInitialState);

  return (
    <AppStateContext.Provider value={appState}>
      <AppDispatchContext.Provider value={appDispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
};

function useAppStateContext(): AppStoreType {
  const appContext = useContext(AppStateContext);
  if (appContext === undefined) {
    throw new Error('useAppStateContext must be used within a CountProvider');
  }
  return appContext;
}

function useAppDispatchContext(): Dispatch<actionObjectShape> | null {
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

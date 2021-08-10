import AppStoreType from '../types/store/app-store-type';
import {
  setErrorPropType,
  setHeroPropType,
  setLoadingPropType,
} from '../types/reducers/reducer-types';

const SET_HEROES = (
  state: AppStoreType,
  {heroData}: setHeroPropType,
): AppStoreType => ({
  ...state,
  heroData,
});

const SET_LOADING = (
  state: AppStoreType,
  {isLoading, loadingID}: setLoadingPropType,
): AppStoreType => ({
  ...state,
  isLoading,
  loadingID,
});

const SET_ERROR = (
  state: AppStoreType,
  {error}: setErrorPropType,
): AppStoreType => ({
  ...state,
  error,
});

const appReducer = (
  state: AppStoreType,
  action: {
    type: (state: AppStoreType, b: unknown) => never;
  },
): AppStoreType => {
  if (typeof action.type === 'function') {
    return action.type(state, action);
  }

  return state;
};

export {appReducer};

export default {
  SET_HEROES,
  SET_LOADING,
  SET_ERROR,
};

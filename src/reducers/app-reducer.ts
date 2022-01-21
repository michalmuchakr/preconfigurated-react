import AppStoreType from '../types/store/app-store-type';
import {
  setErrorPropShape,
  setHeroPropShape,
  setLoadingPropShape,
} from '../types/reducers/reducer-types';

const SET_HEROES = (
  state: AppStoreType,
  {heroData}: setHeroPropShape,
): AppStoreType => ({
  ...state,
  heroData,
});

const SET_LOADING = (
  state: AppStoreType,
  {isLoading, loadingID}: setLoadingPropShape,
): AppStoreType => ({
  ...state,
  isLoading,
  loadingID,
});

const SET_ERROR = (
  state: AppStoreType,
  {error}: setErrorPropShape,
): AppStoreType => ({
  ...state,
  error,
});

const appReducer = (
  state: AppStoreType,
  action: {
    type: (state: AppStoreType, actionPayload: object) => AppStoreType;
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

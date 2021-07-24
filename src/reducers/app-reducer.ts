import AppStoreType from '../types/store/app-store-type';

const SET_HEROES = (state: any, {heroData}: any) => ({
  ...state,
  heroData,
});

const SET_LOADING = (state: any, {isLoading, loadingID}: any) => ({
  ...state,
  isLoading,
  loadingID,
});

const SET_ERROR = (state: any, {error}: any) => ({
  ...state,
  error,
});

export const appInitialState: AppStoreType = {
  heroData: [],
  authToken: '',
  error: null,
  isLoading: false,
  loadingID: '',
  userAuthenticated: false,
};

export const appReducer = (
  state: any,
  action: {type: (arg0: any, arg1: any) => any},
) => {
  if (typeof action.type === 'function') {
    return action.type(state, action);
  }

  return state;
};

export default {
  SET_HEROES,
  SET_LOADING,
  SET_ERROR,
};

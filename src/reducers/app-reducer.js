const SET_HEROES = (state, {heroData}) => ({
  ...state,
  heroData,
});

const SET_LOADING = (state, {isLoading, loadingID}) => ({
  ...state,
  isLoading,
  loadingID,
});

const SET_ERROR = (state, {error}) => ({
  ...state,
  error,
});

export const appInitialState = {
  heroData: null,
  authToken: null,
  error: null,
  isLoading: null,
  loadingID: '',
  userAuthenticated: false,
};

export const appReducer = (state, action) => {
  if (typeof action.type === 'function') {
    return action.type(state, action);
  }

  return state;
};

export default {
  SET_HEROES,
  SET_LOADING,
  SET_ERROR
};

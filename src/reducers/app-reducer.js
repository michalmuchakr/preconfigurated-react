const SET_HEROES = (state, {heroData}) => ({
  ...state,
  heroData,
});

const SET_LOADING = (state, {isLoading, loadingID}) => ({
  ...state,
  isLoading,
  loadingID,
});

export const appInitialState = {
  heroData: [],
  authToken: null,
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
};

const SET_HEROSES = (state, {heroData}) => ({
  ...state,
  heroData,
});

const SET_LOADING = (state, {isLoading, laodingID}) => ({
  ...state,
  isLoading,
  laodingID,
});

export const appInitialState = {
  heroData: [],
  authToken: null,
  isLoading: null,
  laodingID: '',
  userAuthenticated: false,
};

export const appReducer = (state, action) => {
  if (typeof action.type === 'function') {
    return action.type(state, action);
  }

  return state;
};

export default {
  SET_HEROSES,
  SET_LOADING,
};

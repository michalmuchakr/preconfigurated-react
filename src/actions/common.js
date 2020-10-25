import reducers from 'reducers/app-reducer';

const setLoading = (isLoading, laodingID) => ({
  type: reducers.SET_LOADING,
  isLoading,
  laodingID,
});

export {setLoading};

import reducers from 'reducers/app-reducer';

const setLoading = (isLoading, loadingID) => ({
  type: reducers.SET_LOADING,
  isLoading,
  loadingID,
});

export {setLoading};

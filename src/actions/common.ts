import reducers from '../reducers/app-reducer';

const setLoading = (isLoading: boolean, loadingID: string) => ({
  type: reducers.SET_LOADING,
  isLoading,
  loadingID,
});

export {setLoading};

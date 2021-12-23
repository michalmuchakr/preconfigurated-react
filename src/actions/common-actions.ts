import reducers from '../reducers/app-reducer';

const setLoading = (isLoading: boolean, loadingID: string | null) => {
  return {
    type: reducers.SET_LOADING,
    isLoading,
    loadingID,
  };
};

export {setLoading};

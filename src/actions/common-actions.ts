import reducers from '../reducers/app-reducer';
import {setLoadingActionType} from '../types/actions/common';

const setLoading = (
  isLoading: boolean,
  loadingID: string,
): setLoadingActionType => {
  return {
    type: reducers.SET_LOADING,
    isLoading,
    loadingID,
  };
};

export {setLoading};

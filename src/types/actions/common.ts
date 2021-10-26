import AppStoreType from '../store/app-store-type';
import {setErrorPropType, setLoadingPropType} from '../reducers/reducer-types';

type setLoadingActionType = {
  isLoading: boolean;
  loadingID: string | null;
  type: (
    state: AppStoreType,
    {isLoading, loadingID}: setLoadingPropType,
  ) => void;
};

type setErrorActionType = {
  error: string | null;
  type: (state: AppStoreType, {error}: setErrorPropType) => void;
};

type actionType = setLoadingActionType | setErrorActionType | unknown;

export {actionType, setErrorActionType, setLoadingActionType};

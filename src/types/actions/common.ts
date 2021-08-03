import AppStoreType from '../store/app-store-type';
import {setLoadingPropType} from '../reducers/reducer-types';

type setLoadingActionType = {
  isLoading: boolean;
  loadingID: string;
  type: (
    state: AppStoreType,
    {isLoading, loadingID}: setLoadingPropType,
  ) => AppStoreType;
};

export {setLoadingActionType};

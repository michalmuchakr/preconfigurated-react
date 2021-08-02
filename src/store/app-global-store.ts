import AppStoreType from './app-store-type';

const appInitialState: AppStoreType = {
  heroData: [],
  authToken: '',
  error: null,
  isLoading: false,
  loadingID: '',
  userAuthenticated: false,
};

export default appInitialState;

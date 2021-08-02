interface AppStoreType {
  heroData: object | null;
  authToken: string | null;
  error: object | null;
  isLoading: boolean;
  loadingID: string;
  userAuthenticated: boolean;
}

export default AppStoreType;

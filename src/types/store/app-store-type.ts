import HeroItemType from '../hero/hero-item-type';

interface AppStoreType {
  heroData: HeroItemType[] | null;
  authToken: string | null;
  error: string | null;
  errorId: string | null;
  isLoading: boolean;
  loadingID: string;
  userAuthenticated: boolean;
}

export default AppStoreType;

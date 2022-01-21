import AppStoreType from '../store/app-store-type';
import HeroItemType from '../hero/hero-item-type';
import {
  setErrorPropShape,
  setHeroPropShape,
  setLoadingPropShape,
} from '../reducers/reducer-types';

type setLoadingActionType = (
  state: AppStoreType,
  {isLoading, loadingID}: setLoadingPropShape,
) => AppStoreType;

type saveHeroesActionType = (
  state: AppStoreType,
  {heroData}: setHeroPropShape,
) => AppStoreType;

type setErrorActionType = (
  state: AppStoreType,
  {error}: setErrorPropShape,
) => AppStoreType;

type saveHeroesActionObjectShape = {
  type: saveHeroesActionType;
  heroData: HeroItemType[];
};

type setLoadingActionObjectShape = {
  type: setLoadingActionType;
  isLoading: boolean;
  loadingID: string | null;
};

type setErrorActionObjectShape = {
  type: setErrorActionType;
  error: string | null;
};

type actionObjectShape =
  | setLoadingActionObjectShape
  | setErrorActionObjectShape
  | saveHeroesActionObjectShape;

export {actionObjectShape};

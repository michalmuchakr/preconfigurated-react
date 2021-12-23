import AppStoreType from '../store/app-store-type';
import {
  setErrorPropShape,
  setHeroPropShape,
  setLoadingPropShape,
} from '../reducers/reducer-types';
import HeroItemType from '../hero/hero-item-type';

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

type actionType =
  | setLoadingActionType
  | setErrorActionType
  | saveHeroesActionType;

type saveHeroesActionObjectShape = {
  type: actionType;
  heroData: HeroItemType[];
};

type setLoadingActionObjectShape = {
  type: setLoadingActionType;
  isLoading: boolean;
  loadingID: string | null;
};

type setErrorActionObjectShape = {
  type: actionType;
  error: string | null;
};

type actionPayloadType = setErrorPropShape | setLoadingPropShape;

type actionObjectShape =
  | setLoadingActionObjectShape
  | setErrorActionObjectShape
  | saveHeroesActionObjectShape;

export {
  actionPayloadType,
  actionObjectShape,
  actionType,
  saveHeroesActionObjectShape,
  setErrorActionObjectShape,
  setLoadingActionObjectShape,
};

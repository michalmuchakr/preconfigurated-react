import axios from 'axios';
import reducers from '../reducers/app-reducer';
import {setLoading} from './common-actions';
import 'mock-api/routes/heros';
import HeroItemType from '../types/hero/hero-item-type';
import {actionType, setErrorActionType} from '../types/actions/common';
import AppStoreType from '../types/store/app-store-type';
import {setHeroPropType} from '../types/reducers/reducer-types';
import {Dispatch} from 'react';

type saveHeroesActionType = {
  heroData: HeroItemType[];
  type: (state: AppStoreType, {heroData}: setHeroPropType) => AppStoreType;
};

const saveHeroes = (heroData: HeroItemType[]): saveHeroesActionType => ({
  type: reducers.SET_HEROES,
  heroData,
});

const setError = (error: string): setErrorActionType => ({
  type: reducers.SET_ERROR,
  error,
});

const fetchHeroes = async () => {
  const res = await axios.get('/api/heroes');
  return res.data;
};

const getHeroes = (appDispatch: Dispatch<actionType> | null): void => {
  if (appDispatch) {
    appDispatch(setLoading(true, 'heroList'));

    fetchHeroes().then((heroData) => {
      appDispatch(saveHeroes(heroData));
    });

    appDispatch(setLoading(false, null));
  }
};

export {getHeroes, setError};

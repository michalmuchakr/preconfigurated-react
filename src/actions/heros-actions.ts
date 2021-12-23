import axios from 'axios';
import reducers from '../reducers/app-reducer';
import {setLoading} from './common-actions';
import 'mock-api/routes/heros';
import HeroItemType from '../types/hero/hero-item-type';
import {actionObjectShape} from '../types/actions/common';
import {Dispatch} from 'react';

const saveHeroes = (heroData: HeroItemType[]) => ({
  type: reducers.SET_HEROES,
  heroData,
});

const setError = (error: string) => ({
  type: reducers.SET_ERROR,
  error,
});

const fetchHeroes = async () => {
  const res = await axios.get('/api/heroes');
  return res.data;
};

const getHeroes = (appDispatch: Dispatch<actionObjectShape> | null) => {
  if (appDispatch) {
    appDispatch(setLoading(true, 'heroList'));

    fetchHeroes()
      .then((heroData) => {
        appDispatch(saveHeroes(heroData));
      })
      .catch((err) => {
        appDispatch(setError(err));
      })
      .finally(() => {
        appDispatch(setLoading(false, null));
      });
  }
};

export {getHeroes, setError};

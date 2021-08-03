import axios from 'axios';
import reducers from '../reducers/app-reducer';
import {setLoading} from './common-actions';
import 'mock-api/routes/heros';
import HeroItemType from '../types/hero/hero-item-type';

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

const getHeroes = async (appDispatch) => {
  appDispatch(setLoading(true, 'heroList'));

  const heroData = await fetchHeroes();
  appDispatch(saveHeroes(heroData));

  appDispatch(setLoading(false, null));
};

export {getHeroes, setError};

import axios from 'axios';
import reducers from 'reducers/app-reducer';
import {setLoading} from './common';
import 'mock-api/routes/heros';

const saveHeroes = (heroData) => ({
  type: reducers.SET_HEROES,
  heroData,
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

export {getHeroes};

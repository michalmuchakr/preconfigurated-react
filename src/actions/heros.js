import axios from 'axios';
import reducers from 'reducers/app-reducer';
import {setLoading} from './common';
import 'mock-api/routes/heros';

const saveHeroses = (heroData) => ({
  type: reducers.SET_HEROSES,
  heroData,
});

const fetchHeros = async () => {
  const res = await axios.get('/api/heroes');
  return res.data;
};

const getHeroses = async (appDispatch) => {
  appDispatch(setLoading(true, 'heroList'));

  const heroData = await fetchHeros();
  appDispatch(saveHeroses(heroData));

  appDispatch(setLoading(false, null));
};

export {getHeroses};

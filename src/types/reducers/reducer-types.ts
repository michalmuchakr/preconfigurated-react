import HeroItemType from '../hero/hero-item-type';

type setHeroPropShape = {
  heroData: HeroItemType[];
};

type setLoadingPropShape = {
  isLoading: boolean;
  loadingID: string;
};

type setErrorPropShape = {
  error: string;
};

export {setErrorPropShape, setHeroPropShape, setLoadingPropShape};

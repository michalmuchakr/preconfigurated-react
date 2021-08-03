import HeroItemType from '../hero/hero-item-type';

type setHeroPropType = {
  heroData: HeroItemType[];
};

type setLoadingPropType = {
  isLoading: boolean;
  loadingID: string;
};

type setErrorPropType = {
  error: string;
};

export {setErrorPropType, setHeroPropType, setLoadingPropType};

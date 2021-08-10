import React from 'react';
import '../soft-bastion-ui/src/styles/main.scss';

type ThemeWrapperType = {
  children: React.ReactNode;
};

const ThemeWrapper = ({children}: ThemeWrapperType): JSX.Element => {
  return <div>{children}</div>;
};

export default ThemeWrapper;

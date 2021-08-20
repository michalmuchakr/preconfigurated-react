import React from 'react';

type ThemeWrapperType = {
  children: React.ReactNode;
};

const ThemeWrapper = ({children}: ThemeWrapperType): JSX.Element => {
  return <div>{children}</div>;
};

export default ThemeWrapper;

import * as React from 'react';
import {useEffect} from 'react';

const HomePageContent = () => {
  const x = 0;
  setTimeout(() => {
    useEffect(() => {
      console.log(x);
    });
  });

  return (
    <div className="home-page page">
      <h1 className="mt-4 mb-3">Home page</h1>
    </div>
  );
};

export default HomePageContent;

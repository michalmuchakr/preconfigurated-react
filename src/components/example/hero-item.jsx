import React from 'react';

const heroItem = ({hero, index}) => {
  const animateClassname = `example-page__list__item animate animate-delay__${index}`;
  return (
    <li className={animateClassname} key={hero.id}>
      {hero.first_name}
    </li>
  );
};

export default heroItem;

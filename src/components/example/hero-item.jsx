import React from 'react';

const heroItem = ({hero}) => {
  return (
    <li className="example-page__list__item" key={hero.id}>
      {hero.first_name}
    </li>
  );
};

export default heroItem;

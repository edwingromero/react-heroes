import React from 'react';
import { HeroList } from '../hero/HeroList';

export const MarvelScreen = () => {
  return (
    <div>
      <h1>MARVEL SCREEN</h1>
      <hr />
      <HeroList publisher={'Marvel Comics'}/>
    </div>
  )
};

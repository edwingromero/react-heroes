import { useMemo } from 'react';
import { getHeroeByPublisher } from '../../selectors/getHeroesByPublisher'
import { HeroCard } from './HeroCard'

export const HeroList = ({publisher}) => {

  const heroes = useMemo( () =>  getHeroeByPublisher( publisher ), [publisher]);

  return (
    <>
      <div className='row rows-col-1 rows-col-md-3 g-3'>
        {
          heroes.map( hero => (
            <HeroCard key={hero.id} {...hero} />
          ))
        }
      </div>
    </>
  )
};


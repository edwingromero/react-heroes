import React, { useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import queryString from 'query-string'


import { useForm } from '../../hooks/useForm';
import { getHeroesByName } from '../../selectors/getHeroesByName';
import { HeroCard } from '../hero/HeroCard';

export const SearchScreen = () => {

  const navigate = useNavigate();

  const location = useLocation();
  
  const { q = ''} = queryString.parse(location.search)
  


  const [formValues, handleInputChange] = useForm({
    searchText: q
  });

  const { searchText } = formValues;

  
  const heroesFilter = useMemo( () => getHeroesByName(q), [q] );

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`?q=${ searchText }`)
  }
  return (
    <>
      <h1>BÚSQUEDAS</h1>
      <hr/>
      <div className="row">
        <div className="col-5">
          <h4>Buscar</h4>

          <hr />

          <form onSubmit={ handleSearch }>
            <input 
              type="text"
              placeholder="Buscar heroe"
              className='form-control'
              name="searchText"
              autoComplete='off'
              value={searchText}
              onChange={ handleInputChange }
            />
            <button onClick={handleSearch} className="btn btn-primary btn-block mt-2" type="submit">Buscar</button>
          </form>
        </div>

        <div className="col-7">
          <h4>Resultado</h4>
          <hr />

            {
              (q === '')
                ?<div className='alert alert-info'>Buscar un heroe</div>
                :(heroesFilter.length===0)
                  &&<div className='alert alert-danger'>No hay resultados con { q }</div>
            }

            {
              heroesFilter.map( hero => (
                <div key={hero.id}>
                  <HeroCard  {...hero}></HeroCard>
                </div>
                ))
            }
        </div>
      </div>
    </>
  )
};

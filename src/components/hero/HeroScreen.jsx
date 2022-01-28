import React, { useMemo } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getHeroById } from '../../selectors/getHeroById';


export const HeroScreen = () => {
  
  const { heroeId } = useParams();
  
  const hero = useMemo( () => getHeroById(heroeId),[heroeId]);

  const navigate = useNavigate();
  
  const handleReturn = () => {
    navigate(-1)
  }

  if(!hero) return <Navigate  to='/'/>

  const imagePath = `/assets/${hero.id}.jpg`;



  return (
    <div className="row mt-5">

      <div className="col-4">
        <img src={ imagePath } 
        alt={hero.superhero} 
        className='img-thumbnail'/>
      </div>
      
      <div className="col-8">
        <h3>{hero.superhero}</h3>

        <ul className="list-group">
          <li className="list-item">
            <b>Alterego: </b>{hero.alter_ego}
          </li>
          <li className="list-item">
            <b>Publisher: </b>{hero.publisher}
          </li>
          <li className="list-item">
            <b>Firts Appaerance: </b>{hero.first_appearance}
          </li>
        </ul>

        <h5>Characters</h5>
        <p>{hero.characters}</p>

        <button className="btn btn-primary" onClick={ handleReturn }>Regresar</button>
      </div>
    </div>
  )
};

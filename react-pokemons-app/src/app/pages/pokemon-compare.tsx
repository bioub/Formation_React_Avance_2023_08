import { useState, useEffect, useContext } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { Pokemon } from '../models/pokemon';
import Loader from '../components/loader';
import { isAuthenticated } from '../services/authentication-service';
import { getPokemon } from '../services/pokemon-service';
import PokemonCardDetails from '../components/pokemon-card-details';
import { CompareContext } from '../services/compare-context';

function PokemonCompare() {
  const { ids } = useContext(CompareContext);
  const [pokemon1, setPokemon1] = useState<Pokemon | undefined>();
  const [pokemon2, setPokemon2] = useState<Pokemon | undefined>();

  useEffect(() => {
    getPokemon(ids[0]).then((pokemon) => setPokemon1(pokemon));
    getPokemon(ids[1]).then((pokemon) => setPokemon2(pokemon));
  }, []);

  if (!isAuthenticated) {
    return <Navigate to={{ pathname: '/login' }} />;
  }

  if (ids.length !== 2) {
    return <Navigate to={{ pathname: '/' }} />;
  }

  return (
    <div className="row">
      <div className="col s6">
        <PokemonCardDetails pokemon={pokemon1} />
      </div>
      <div className="col s6">
        <PokemonCardDetails pokemon={pokemon2} />
      </div>
    </div>
  );
}

export default PokemonCompare;

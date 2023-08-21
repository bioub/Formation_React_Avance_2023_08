import { useState, useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { Pokemon } from '../models/pokemon';
import Loader from '../components/loader';
import { isAuthenticated } from '../services/authentication-service';
import { getPokemon } from '../services/pokemon-service';
import PokemonCardDetails from '../components/pokemon-card-details';

function PokemonCompare() {
  if (!isAuthenticated) {
    return <Navigate to={{ pathname: '/login' }} />;
  }
  const [pokemon1, setPokemon1] = useState<Pokemon | undefined>();
  const [pokemon2, setPokemon2] = useState<Pokemon | undefined>();

  useEffect(() => {
    getPokemon(1).then((pokemon) => setPokemon1(pokemon));
    getPokemon(2).then((pokemon) => setPokemon2(pokemon));
  }, []);

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

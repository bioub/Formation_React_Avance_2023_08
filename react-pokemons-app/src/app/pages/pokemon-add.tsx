import { useState } from 'react';
import PokemonForm from '../components/pokemon-form';
import { Pokemon } from '../models/pokemon';
import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../services/authentication-service';

function PokemonAdd() {
  if (!isAuthenticated) {
    return <Navigate to={{ pathname: '/login' }} />;
  }

  const [pokemon] = useState<Pokemon>({});

  return (
    <div className="row">
      <h2 className="header center">Ajouter un pokémon</h2>
      <PokemonForm pokemon={pokemon} isEditForm={false}></PokemonForm>
    </div>
  );
}

export default PokemonAdd;

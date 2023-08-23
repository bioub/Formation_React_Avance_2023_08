import { useState, useEffect, useContext } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { Pokemon } from '../models/pokemon';
import Loader from '../components/loader';
import { isAuthenticated } from '../services/authentication-service';
import { getPokemon } from '../services/pokemon-service';
import PokemonCardDetails from '../components/pokemon-card-details';
import { CompareContext } from '../services/compare-context';
import { useSelector } from 'react-redux';
import { pokemonsToCompareSelector } from '../store/selectors';

function PokemonCompare() {
  const pokemons = useSelector(pokemonsToCompareSelector);

  if (!isAuthenticated) {
    return <Navigate to={{ pathname: '/login' }} />;
  }

  if (pokemons.length !== 2) {
    return <Navigate to={{ pathname: '/' }} />;
  }

  const [pokemon1, pokemon2] = pokemons;

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

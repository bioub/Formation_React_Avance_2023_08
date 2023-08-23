import { useState, useEffect, useMemo, useCallback } from 'react';
import { Pokemon } from '../models/pokemon';
import PokemonCard from '../components/pokemon-card';
import { getPokemons, searchPokemon } from '../services/pokemon-service';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import PokemonSearch from '../components/pokemon-search';
import { isAuthenticated } from '../services/authentication-service';
import List from '../components/list';
import { useDispatch, useSelector } from 'react-redux';
import { pokemonsListSelector, pokemonsSelector } from '../store/selectors';
import {
  fetchPokemons,
  fetchPokemonsRequested,
  fetchPokemonsSuccess,
  updateTerm,
} from '../store/actions';
import Loader from '../components/loader';

/*
{
  loading: false,
  pokemons: [],
}
*/

/*
[false, []]
*/

function PokemonList() {
  console.log('PokemonList');

  const navigate = useNavigate();
  if (!isAuthenticated) {
    return <Navigate to={{ pathname: '/login' }} />;
  }

  // const [term, setTerm] = useState('');
  const { term, loading } = useSelector(pokemonsSelector);
  const items = useSelector(pokemonsListSelector);
  const dispatch = useDispatch();

  function setTerm(term: string) {
    dispatch(updateTerm(term));
  }

  useEffect(() => {
    dispatch(fetchPokemonsRequested('') as any);
  }, []);

  // const renderItem = useMemo(() => (item: Pokemon) => <PokemonCard key={item.id} pokemon={item} />, [term])
  const renderItem = useCallback(
    (item: Pokemon) => <PokemonCard key={item.id} pokemon={item} />,
    []
  );

  return (
    <div>
      <h1 className="center">Pokédex</h1>
      <div className="container">
        <div className="row">
          <PokemonSearch term={term} onType={setTerm} />
          {loading ? (
            <h4 className="center">
              <Loader />
            </h4>
          ) : (
            <List items={items} renderItem={renderItem} />
          )}
          {/* {pokemons.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))} */}
        </div>
      </div>
      <Link
        className="btn-floating btn-large waves-effect waves-light red z-depth-3"
        style={{ position: 'fixed', bottom: '25px', right: '25px' }}
        to="/pokemon/add"
      >
        <i className="material-icons">add</i>
      </Link>
      <button onClick={() => navigate('/pokemons/compare')}>Compare</button>
    </div>
  );
}

export default PokemonList;

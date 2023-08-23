import {
  createAction,
  createAsyncThunk,
} from '@reduxjs/toolkit';
import { Dispatch } from 'react';
import { Pokemon } from '../models/pokemon';
import { searchPokemon } from '../services/pokemon-service';

export const updateTerm = createAction<string>('@pokemons/updateTerm');

/*
export const fetchPokemons = createAction('@pokemons/fetchPokemons');
export const fetchPokemonsSuccess = createAction<Pokemon[]>('@pokemons/fetchPokemonsSuccess');
export const fetchPokemonsFail = createAction('@pokemons/fetchPokemonsFail');


export function fetchPokemonsRequested() {
  return (dispatch: any) => {
    dispatch(fetchPokemons());
    searchPokemon('').then((pokemons) =>
      dispatch(fetchPokemonsSuccess(pokemons))
    );
  }
}
*/

export const fetchPokemonsRequested = createAsyncThunk<Pokemon[], string>(
  '@pokemons/fetchPokemons',
  (term) => {
    return searchPokemon(term);
  }
);

import { createReducer } from '@reduxjs/toolkit';
import { Pokemon } from '../models/pokemon';
import {
  fetchPokemonsRequested,
  updateTerm,
} from './actions';

export interface State {
  pokemons: PokemonsState;
}

interface PokemonsState {
  term: string;
  items: Pokemon[];
  loading: boolean;
}

const initialState: State = {
  pokemons: {
    term: '',
    items: [],
    loading: false,
  },
};

export const pokemonsReducer = createReducer(
  initialState.pokemons,
  (builder) => {
    builder
      .addCase(updateTerm, (state, action) => {
        state.term = action.payload;
      })
      .addCase(fetchPokemonsRequested.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchPokemonsRequested.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      });
  }
);

import { createReducer } from '@reduxjs/toolkit';
import { Pokemon } from '../models/pokemon';
import {
  fetchPokemonsRequested,
  selectId,
  updateTerm,
} from './actions';

export interface State {
  pokemons: PokemonsState;
}

interface PokemonsState {
  term: string;
  items: Pokemon[];
  loading: boolean;
  idsToCompare: number[];
}

const initialState: State = {
  pokemons: {
    term: '',
    items: [],
    loading: false,
    idsToCompare: []
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
      })
      .addCase(selectId, (state, action) => {
        if (state.idsToCompare.includes(action.payload)) {
          state.idsToCompare = state.idsToCompare.filter((id) => action.payload !== id)
        } else if (state.idsToCompare.length < 2) {
          state.idsToCompare.push(action.payload);
        }
      })
  }
);

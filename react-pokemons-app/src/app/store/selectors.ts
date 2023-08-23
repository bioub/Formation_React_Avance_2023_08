import { State } from './reducers';
import { createSelector } from '@reduxjs/toolkit';

export function pokemonsSelector(state: State) {
  return state.pokemons;
}

export const pokemonsListSelector = createSelector(
  (state: State) => pokemonsSelector(state).items,
  (state: State) => pokemonsSelector(state).term,
  (items, term) => {
    console.log('pokemonsListSelector');
    return items.filter((item) => item.name?.includes(term) ?? true);
  }
);

export const pokemonsToCompareSelector = createSelector(
  (state: State) => pokemonsSelector(state).items,
  (state: State) => pokemonsSelector(state).idsToCompare,
  (items, idsToCompare) => {
    console.log('pokemonsToCompareSelector');
    return idsToCompare.map((id) => items.find((item) => item.id === id))
  }
);

import { State } from './reducers'

export function pokemonsSelector(state: State) {
  return state.pokemons;
}

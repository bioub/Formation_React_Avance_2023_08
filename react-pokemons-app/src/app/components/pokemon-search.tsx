import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Pokemon } from '../models/pokemon';
import { searchPokemon } from '../services/pokemon-service';

type Props = {
  term: string;
  onType(v: string): void;
}

function PokemonSearch({ term, onType }: Props) {
  console.log('PokemonSearch');
  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const term = event.target.value;
    onType(term);
  }

  return (
    <div className="row">
      <div className="col s12 m6 offset-m3">
        <div className="card">
          <div className="card-content">
            <div className="input-field">
              <input
                type="text"
                placeholder="Rechercher un pokémon"
                value={term}
                onChange={(e) => handleInputChange(e)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonSearch;

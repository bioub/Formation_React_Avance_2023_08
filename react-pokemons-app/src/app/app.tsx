import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import PokemonsList from './pages/pokemon-list';
import PokemonsDetail from './pages/pokemon-detail';
import PokemonEdit from './pages/pokemon-edit';
import PokemonAdd from './pages/pokemon-add';
import PageNotFound from './pages/page-not-found';
import Login from './pages/login';
import PrivateRoute from './private-route';
import PokemonCompare from './pages/pokemon-compare';
import Hello from './hoc-render-prop/Hello';
import PassHello from './hoc-render-prop/PassHello';

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <div className="nav-wrapper teal">
            <Link to="/" className="brand-logo center">
              {/* <PassHello>
                {(hello: any) => <Hello name="Pokedex" hello={hello} />}
              </PassHello> */}
              <Hello name="Pokedex" />
            </Link>
          </div>
        </nav>
        <Routes>
          <Route index path="/" element={<PokemonsList />} />
          <Route path="/login" element={<Login />} />
          <Route element={<PrivateRoute />}>
            <Route path="/pokemons" element={<PokemonsList />} />
            <Route path="/pokemon/add" element={<PokemonAdd />} />
            <Route path="/pokemons/edit/:id" element={<PokemonEdit />} />
            <Route path="/pokemons/compare" element={<PokemonCompare />} />
            <Route path="/pokemons/:id" element={<PokemonsDetail />} />
          </Route>
          <Route element={<PageNotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

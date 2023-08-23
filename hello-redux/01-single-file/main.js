const { legacy_createStore } = require("redux");

const initalState = {
  count: 0,
};

// Pure Function
// - prédictive (appelée avec un state et une action donnée toujours le meme retour)
// - ne modifie ses paramètres (surtout le state, on doit retourner un nouveau state)
// - pas de side effect (pas d'appels externes, call HTTP, localStorage...)
function reducer(state = initalState, action) {
  console.log("reducer call", state, action);

  switch (action.type) {
    case "@counter/increment":
      return { count: state.count + 1 };
    case "@counter/decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

/** @type {import('redux').Store} */
const store = legacy_createStore(reducer);

console.log("initial state", store.getState());

// Pattern Observer
// document.addEventListener('click', () => {});
// document.dispatchEvent(new MouseEvent('click'));

store.subscribe(() => {
  console.log("reducer call + store written + listener called");
});
store.dispatch({ type: "@counter/increment" });
store.dispatch({ type: "@counter/increment" });
store.dispatch({ type: "@counter/increment" });
store.dispatch({ type: "@counter/decrement" });
store.dispatch({ type: "@todos/fetch" });

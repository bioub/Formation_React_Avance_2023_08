const { COUNTER_INCREMENT, COUNTER_DECREMENT } = require("./constants");

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
    case COUNTER_INCREMENT:
      return { ...state, count: state.count + (action.payload ?? 1) };
    case COUNTER_DECREMENT:
      return { ...state, count: state.count - (action.payload ?? 1) };
    default:
      return state;
  }
}

exports.reducer = reducer;
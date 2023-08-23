const { legacy_createStore } = require('redux');
const { counterIncrement, counterDecrement } = require('./actions');
const { COUNTER_INCREMENT, COUNTER_DECREMENT } = require('./constants');
const { reducer } = require('./reducer');
const { countSelector } = require('./selectors');

/** @type {import('redux').Store} */
const store = legacy_createStore(reducer);

console.log("initial state", store.getState());

// Pattern Observer
// document.addEventListener('click', () => {});
// document.dispatchEvent(new MouseEvent('click'));

store.subscribe(() => {
  console.log("reducer call + store written + listener called");
  console.log("count", countSelector(store.getState()));
});
store.dispatch(counterIncrement(10));
store.dispatch(counterIncrement());
store.dispatch(counterIncrement());
store.dispatch(counterDecrement());
store.dispatch({ type: "@todos/fetch" });

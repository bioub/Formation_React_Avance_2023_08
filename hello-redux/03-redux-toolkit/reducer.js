const { createReducer } = require("@reduxjs/toolkit");
const {
  counterIncrement,
  counterDecrement,
} = require("./actions");

const initialState = {
  count: 0,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(counterIncrement, (state, action) => {
      state.count = state.count + (action.payload ?? 1);
    })
    .addCase(counterDecrement, (state, action) => {
      state.count = state.count - (action.payload ?? 1);
    });
});


exports.reducer = reducer;

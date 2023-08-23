const { COUNTER_INCREMENT, COUNTER_DECREMENT } = require("./constants");

function counterIncrement(payload = 1) {
  return {
    type: COUNTER_INCREMENT,
    payload,
  }
}

function counterDecrement(payload = 1) {
  return {
    type: COUNTER_DECREMENT,
    payload,
  }
}

exports.counterIncrement = counterIncrement;
exports.counterDecrement = counterDecrement;
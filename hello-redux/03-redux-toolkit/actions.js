const { createAction } = require("@reduxjs/toolkit");

const counterIncrement = createAction('@counter/increment');
const counterDecrement = createAction('@counter/decrement');

exports.counterIncrement = counterIncrement;
exports.counterDecrement = counterDecrement;
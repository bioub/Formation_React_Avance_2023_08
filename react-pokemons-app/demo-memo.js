const _ = require('lodash');

let nbs = [];

for (let i = 0; i < 1_000_000; i++) {
  nbs.push(Math.round(Math.random()));
}

function countOnes(tab) {
  return tab.filter((el) => el === 1).length;
}

const countOnesMemo = _.memoize(countOnes)

console.time('countOnesMemo');
console.log(countOnesMemo(nbs));
console.timeEnd('countOnesMemo');

console.time('countOnesMemo');
console.log(countOnesMemo(nbs));
console.timeEnd('countOnesMemo');

// muable (l'objet est modifié en mémoire)
// nbs.push(1)

// immuable (un nouvel objet créé en mémoire)
nbs = [...nbs, 1];

console.time('countOnesMemo');
console.log(countOnesMemo(nbs));
console.timeEnd('countOnesMemo');

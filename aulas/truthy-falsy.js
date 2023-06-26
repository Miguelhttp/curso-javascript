// Conceito de Truthy ou Falsy.
// Uma String vazia, o seu valor será false.
// Zero também é false.
// Null e Undefined também é false

const x = '';

const y = 0;

const z = null;
const w = undefined;

const list = []; 
const object = {}; 

console.log(!!list); // True
console.log(!!object); // True


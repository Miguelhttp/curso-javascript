//                0         1         2     3     4
const names = ["Felipe", "Miguel", "Lucas", 10, false];

const miguel = names[1];

names.push("Robert"); // Adicionar no final da lista

// console.log(names);

names.unshift("Isaac"); // Adicionar no Inicio da Lista

// console.log(names);

names.pop();
names.pop();
names.pop(); // Remove no final da lista

names[3] = "Gustavo";

const indexOfFelipe = names.indexOf("Felipe");

const sorteNames = names.sort();

const namesArray = Array.isArray(names)

// console.log(names);
console.log(sorteNames);
console.log(namesArray);
let index = 0;

while (index < 10) {
  console.log("index é menor do que 10!");
  index++; // incremento de um no final da linha
}

const person = {
  name: 'Jhon',
  age: 21,
}

for (property in person) {
  console.log(person[property])
}
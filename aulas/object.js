const person = {
  firstName: "Miguel",
  lastName: "Braga",
  age: 18,
  hobbies: ["Assistir Anime", "Ir a academia", "Jogar futebol"],
  dog: {
    name: "Sansão",
    age: 4,
  }
};

// const firstName = person.firstName;
// const lastName = person.lastName;
// const age = person.age;
// const hobbies = person.hobbies;

const {firstName: primeiroNome, lastName, age, hobbies, dog: {name: dogName},} = person;

// const movie = hobbies[0];

console.log(person.dog.age);

console.log(dogName);

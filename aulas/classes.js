class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName,
    this.lastName = lastName,
    this.age = age
  }

  speak() {
    console.log(`${this.firstName} disse oi`);
  }
}

const person = new Person('Jane', 'Doe', 20);
console.log(person);
person.speak();
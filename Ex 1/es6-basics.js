const name = "Jaad";
const age = 23;
const hobbies = ["coding", "fitness", "gaming"];

const person = {
  name: name,
  age: age,
  hobbies: hobbies,
};

const greeting = ({name, age}) => {
  return `Hello, my name is ${name}. I am ${age} years old.`;
};

console.log(greeting(person));
function greeter(person: string) {
  return "Hello, " + person;
}

function greeterArray(people: string[]) {
  return people.map(person => "Hello, " + person);
}

let user = ["Jane User", "John Smith"];

console.log(greeter(user[0])); //Correct usage with index
console.log(greeterArray(user)); // Correct usage with array handling
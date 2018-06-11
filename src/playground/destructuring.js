/* const person = {
  name: "Rey",
  age: 32,
  location: {
    city: "London",
    temperature: 10
  }
};

const { name, age } = person;

console.log(`${name} is ${age}`);

const { temperature, city } = person.location;
console.log(`It's ${temperature} in ${city}`);
 */

/* const book = {
  title: "Ego is the Enemy",
  author: "Ryan Holiday",
  publisher: {
    name: "Penguin"
  }
};

const { name: publisherName = "Self-Published" } = book.publisher;

console.log(publisherName); */

/* const address = [
  "1299 S Juniper Street",
  "Philadelphia",
  "Pensilvania",
  "19147"
];

const [, city, state] = address;

console.log(`You are in ${city}. ${state}`);
 */

const item = ["Coffee", "2.00$", "2.50$", "2.75$"];
const [itemName, , price] = item;
console.log(`A medium ${itemName} costs ${price}`);

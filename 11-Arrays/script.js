'use strict';
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
/******************************************************************************* Array methods *************************************************************************/
/*
// Methods that do NOT mutate the original array
let arr = ["a", "b", "c", "d", "e"];
console.log(arr.slice(2));
console.log(arr.slice(2, 4)); // delete from index 2 to 4 (excluded)
console.log(arr.slice()); // create an array copy
console.log([...arr]); // create an array copy
console.log(arr.slice(-1));

arr = ["a", "b", "c", "d", "e"];
const arr2 = ["l", "i", "h", "g", "f"];
console.log(arr2.reverse());
console.log(arr2);
console.log(arr.concat(arr2));
console.log([...arr, ...arr2]);

console.log([...arr, ...arr2].join(" - "));

// Array mutating methods
console.log(arr.splice(-1));
console.log(arr.splice(1, 2)); // delete 2 elemtents from the array starting from index 1
console.log(arr);

const arrNew = [23, 11, 64];
console.log(arrNew[0]);
console.log(arrNew.at(0));

console.log(arrNew[arrNew.length - 1]); // last element in the traditional way
console.log(arrNew.slice(-1)[0]); // last element with the slice method
console.log(arrNew.at(-1)); // last element with the 'at' method

console.log("Massimo".at(0));
console.log("Massimo".at(-1));
*/
/****************************************************************************** forEach ******************************************************************************/
/*
// For method
// for (const movement of movements) {
//   console.log((`You ${movement > 0 ? "deposited" : "witdrew"} ${Math.abs(movement)}`));
// };

// forEach method
movements.forEach( (movement) => console.log((`You ${movement > 0 ? "deposited" : "witdrew"} ${Math.abs(movement)}`)));

// The forEach method can returns the value, index and the array, if they are specified as parameters inside the function
// You cannot break the forEach loop iteration, the for method on the contrary can be broken. 
movements.forEach( (movement, index, array) => console.log(movement, index, array));

currencies.forEach((value, key, map)=> console.log(key, value));
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR']);
currenciesUnique.forEach( (value) => console.log(value)); // in sets keys and values are the same (there are no keys, only values)
*/
/**************************************************************************** Challenge 1 *****************************************************************************/
/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
function checkDogs(juliaArray, kateArray)
{
  const newArray = [...juliaArray.slice(1, -2), ...kateArray];
  newArray.forEach((value, index) => {
    console.log(`Dog number ${index + 1} is ${value >= 3 ? `an adult, and is ${value} years old` : "still a puppy 🐶"}`);
  })
};
//checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
//checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

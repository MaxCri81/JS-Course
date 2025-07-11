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
/******************************************************************* Map method ***************************************************************************************/
// In map and filter, the values retured from the method calls are (value, index, array) in this order
const eurToUsd = 1.1;
/**
 * For each iteration in the array returns the current value times eurToUsd
 * @param {number} value - map iteration value
 * @returns a new array containing the new mapped values
 */
const movementsUSD = movements.map(function(value){
  return value * eurToUsd;
});
/*
// Same as above but with arrow function.
const movementsUSDArrow = movements.map(value => value * eurToUsd);
console.log(movements);
console.log(movementsUSDArrow);

const movementsDescription = movements.map((value, index) => 
  `Movement ${index +1}: You ${value > 0 ? "deposited" : "witdrew"} ${Math.abs(value)}`
);
console.log(movementsDescription);
*/
const user = "Steven Thomas Williams";
/**
 * @returns a string with the first letter of every words 
 * in the user string, in lower case.
 */
const username = user.toLowerCase().split(" ").map(value => value[0]).join("");
//console.log(username);
/********************************************************************* Filter ******************************************************************************************/
/*
// In map and filter, the values retured from the method calls are (value, index, array) in this order
// Returns only value greater than 0
console.log(movements.filter(value => value > 0));
// Returns only value smaller than 0
console.log(movements.filter(value => value < 0));
/********************************************************************* Reduce *****************************************************************************************/
// In reduce, the values retured from the method calls are (accumulator, value, index, array) in this order
/** 
 * Sum all the values in the movements array and return the result 
 * starting from a value of 0.
 */
const balance = movements.reduce(function(sum, value){
  return sum + value;
},0); // the 0 is the starting point for the sum variable
/*
console.log(balance);
// Same as above but with arrow function and starting from a value of 3000
console.log(movements.reduce((sum, value) => sum + value, 3000));

/** Print the maximum value in the movements array, starting from the array value at position 0 */
const findMax = movements.reduce((acc, value) => acc > value ? acc : value, movements[0]);
//console.log(findMax);
/**************************************************************************** Challenge 2 *****************************************************************************/
/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
function calcAverageHumanAge(ages) {
  // 1.
  const convertedAges = ages.map(age => age <= 2 ? 2 * age : 16 + age * 4);
  console.log(convertedAges);
  // 2.
  const filterDogs = convertedAges.filter(age => age >= 18);
  console.log(filterDogs);
  // 3.
  const averageAge = filterDogs.reduce((acc, value) => acc + value / filterDogs.length, 0);
  console.log(averageAge);
};
/*
calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
*/
/************************************************************** Chaining all them up ********************************************************************************/
/*
// filter the positive values in the array, multiply the by the dollar conversion value and sum the values up.
const totalDepositUSD = movements.filter(value => value > 0).map(value => value * eurToUsd).reduce((accumulator, value) => accumulator + value, 0);
console.log(totalDepositUSD);

// demonstrates how to inspect the pipeline by logging the array resulting from the previous concatenation
const checkTotalDepositUSD = movements.filter(value => value > 0).map((value, index, array) => {
  console.log(array);
  return value * eurToUsd;
}).reduce((accumulator, value) => accumulator + value, 0);
*/

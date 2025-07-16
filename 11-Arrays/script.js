'use strict';

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

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
console.log(arr.splice(1, 2)); // delete 2 elements from the array starting from index 1
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
/**************************************************************************** Challenge 3 *****************************************************************************/
/*
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
const calcAverageHumanAgeArrow = ages => ages
.map(age => age <= 2 ? 2 * age : 16 + age * 4)
.filter(age => age >= 18)
.reduce((acc, value, index, array) => acc + value / array.length, 0);

//console.log(calcAverageHumanAgeArrow([5, 2, 4, 1, 15, 8, 3]), calcAverageHumanAgeArrow([16, 6, 10, 5, 6, 1, 4]));
/*************************************************************************** Find method ******************************************************************************/
// the 'find' method retrieve the first element which satisfy the condition. It does NOT return a new array, like with 'filter', but just a value.
/*
console.log(movements);
console.log(movements.find(mov => mov < 0)); // the first negative number

console.log(accounts);
console.log(accounts.find(account => account.owner === "Jessica Davis")); // return the object with the owner = "Jessica Davis"
/********************************************************************* findIndex method ******************************************************************************/
/*
console.log(accounts);
// iterate the accounts array and check the condition. if the condition is satisfied return its index otherwise return -1
console.log(accounts.findIndex(account => account.owner === "Steven Thomas Williams")); 
console.log(accounts.indexOf(account4)); // check that the array contains the account4 object
/*************************************************************** findLast, findLastIndex *****************************************************************************/
/*
console.log(movements);
console.log(movements.findLast(movement => movement < 0)); // find the last negative number
const latestLargerMovement = movements.findLastIndex(movements => movements > 2000);
console.log(`Your latest movement was ${movements.length - latestLargerMovement} movements ago`); // counting from right to left
/************************************************************** Some, every and includes ******************************************************************************/
/*
console.log(movements);
console.log(movements.includes(450)); // check for equality

console.log(movements.some(value => value > 1300)); // check that at least one value satisfy the condition

console.log(movements.every(value => value > 0)); // check that all values satisfy the condition
/************************************************************** flat and flatMap **************************************************************************************/
/*
const nestedArray = [1, 9, 7, [1, 5, [10, 7]]];
console.log(nestedArray.flat());
console.log(nestedArray.flat(2)); // 2 levels of nested array

// loop over the movents array inside the accounts array, flat all the arrays in one array and sum all the value together.
console.log(accounts.map(account => account.movements).flat().reduce((temp, value) => temp + value, 0));

// Same result as above but with better performance
// flatMap is a map method essentialy which will flat the resulting arrays after the mapping process
// flatMap can be used to flat nested array with ONLY 1 level deep
console.log(accounts.flatMap(account => account.movements).reduce((temp, value) => temp + value, 0));
/**************************************************************************** Challenge 4 *****************************************************************************/
/*
This time, Julia and Kate are studying the activity levels of different dog breeds.
 
YOUR TASKS:
1. Store the the average weight of a "Husky" in a variable "huskyWeight"
2. Find the name of the only breed that likes both "running" and "fetch" ("dogBothActivities" variable)
3. Create an array "allActivities" of all the activities of all the dog breeds
4. Create an array "uniqueActivities" that contains only the unique activities (no activity repetitions). HINT: Use a technique with a special data structure that we studied a few sections ago.
5. Many dog breeds like to swim. What other activities do these dogs like? Store all the OTHER activities these breeds like to do, in a unique array called "swimmingAdjacent".
6. Do all the breeds have an average weight of 10kg or more? Log to the console whether "true" or "false".
7. Are there any breeds that are "active"? "Active" means that the dog has 3 or more activities. Log to the console whether "true" or "false".
 
BONUS: What's the average weight of the heaviest breed that likes to fetch? HINT: Use the "Math.max" method along with the ... operator.

TEST DATA:
*/ 

/*
const breeds = [
  {
    breed: 'German Shepherd',
    averageWeight: 32,
    activities: ['fetch', 'swimming'],
  },
  {
    breed: 'Dalmatian',
    averageWeight: 24,
    activities: ['running', 'fetch', 'agility'],
  },
  {
    breed: 'Labrador',
    averageWeight: 28,
    activities: ['swimming', 'fetch'],
  },
  {
    breed: 'Beagle',
    averageWeight: 12,
    activities: ['digging', 'fetch'],
  },
  {
    breed: 'Husky',
    averageWeight: 26,
    activities: ['running', 'agility', 'swimming'],
  },
  {
    breed: 'Bulldog',
    averageWeight: 36,
    activities: ['sleeping'],
  },
  {
    breed: 'Poodle',
    averageWeight: 18,
    activities: ['agility', 'fetch'],
  },
];
// 1.
//const huskyWeight = breeds.filter(dog => dog.breed === "Husky")[0].averageWeight; // with filter (it returns an array so I had to use [0] 
const huskyWeight = breeds.find(dog => dog.breed === "Husky").averageWeight;
console.log(huskyWeight);

// 2.
const dogBothActivities = breeds.find(dog => dog.activities.includes("running") &&  dog.activities.includes("fetch")).breed;
console.log(dogBothActivities);

// 3.
const allActivities = breeds.flatMap(dog => dog.activities)
console.log(allActivities);

// 4.
const uniqueActivities = [...new Set(allActivities)];
console.log(uniqueActivities);

// 5
const swimmingAdjacent = [...new Set(breeds.filter(dog => dog.activities.includes("swimming")).flatMap(dog => dog.activities).filter(activity => activity !== "swimming"))];
console.log(swimmingAdjacent);

// 6.
console.log(breeds.every(dog => dog.averageWeight >= 10));

// 7.
console.log(breeds.some(dog => dog.activities.length >= 3));

// Bonus
console.log(Math.max(...breeds.filter(dog => dog.activities.includes("fetch")).map(dog => dog.averageWeight)));
/********************************************************************* Sorting Arrays ****************************************************************************/
/*
// Mutating the original array
const owners = ["Jons", "Zach", "Adam", "Martha"];
console.log(owners.sort());
console.log(owners);

console.log(movements);
//console.log(movements.sort()); // it doesn't sort properly as it treats numbers as strings

// comparator similar to the Java one
// Ascending order
// the rule is that in 2 numbers 'a' and 'b', the left one should be smaller and the right one
// so, if 'a' (left number) is bigger than 'b', you assign 1 to it, meaning that it comes after, 
// and b comes before with -1, and vice versa. 
//movements.sort((a, b) => a > b ? 1 : -1);
// the above can be rewritten as the following
movements.sort((a, b) => a - b);
console.log(movements);
*/

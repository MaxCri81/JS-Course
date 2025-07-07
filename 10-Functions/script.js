'use strict';
/************************************************************************** Defaul values *****************************************************************************/
const bookingsArray = [];
/**
 * Store bookings in an array.
 * @param {string} flightNum number of the flight
 * @param {number} numPassengers number of passengers, default value 1
 * @param {number} price of the flight, default value 199 * number of passengers
 */
function createBooking(flightNum, numPassengers = 1, price = 199 * numPassengers)
{
    const booking = {
        flightNum,
        numPassengers,
        price
    };
    console.log(booking);
    bookingsArray.push(booking);
};
/*
createBooking("A920");
createBooking("A230", 2);
createBooking("A340", 2, 500);
createBooking("A340", undefined, 270); // skip the second parameter, leaving it blank
/********************************************************************** Call back function *****************************************************************************/
/**
 * Strip spaces out of a string
 * @param {string} stringWord string to be stripped out of spaces
 * @returns a string with no spaces on it, converted to lower case
 */
function oneWord(stringWord)
{
    const pattern = / /g; // one space pattern
    return stringWord.replace(pattern, "").toLowerCase();
}

/**
 * @param {string} stringWord string of words separated by spaces 
 * @returns a single string with the first word in capital letters and the remaing words as they were.
 */
function upperFirstWord(stringWord)
{
    const [first, ...second] = stringWord.split(" ");
    return [first.toUpperCase(), ...second].join(" "); //from array to single string
}

/**
 * Higher-Order Function.
 * Log the original string, the trasformed string and the call back function name.
 * @param {string} stringWord - string to be transformed
 * @param {Function} callback - function to be called for transforming the string
 */
function transformer(stringWord, callback)
{
    console.log(`Original string: ${stringWord}`);
    console.log(`Transformed string: ${callback(stringWord)}`);

    console.log(`Transformed by: ${callback.name}`); // functions have properties too (like name in this case)
}
/*
transformer("JavaScript is the best!", upperFirstWord);
transformer("JavaScript is the best!", oneWord);
/*************************************************************************** Returning a function ********************************************************************/
/*
function greet(greeting)
{
    return name => console.log(`${greeting} ${name}`);
}
const greetTest = greet("Hi");
greetTest("Massimo");
greet("Hi")("Giusy");

const greetArrow = greeting => name => console.log(`${greeting} ${name}`);
greetArrow("Hi")("Max");
greetArrow("Hi")("Giusy");

/***************************************************************************** Call and Apply method ******************************************************************/
const ryanair = {
    airline: "Ryanair",
    iatacode: "RY",
    bookings: [],
    //book: function(flightNum, name){} traditional declaration inside object
    book(flightNum, name){ //enhanced function declaration inside object
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iatacode}${flightNum}`);
        this.bookings.push({flight: `${this.iatacode}${flightNum}`, name}); //we don't need to write name: name
    }
}
/*
ryanair.book(239, "Massimo Crisafulli");
ryanair.book(312, "Mike Smith");
console.log(ryanair.bookings);

const bookFunction = ryanair.book;

const easyjet = {
    airline: "Easyjet",
    iatacode: "EA",
    bookings: []
};

//It doesn't work because 'this' points to the wrong object, in this scenario. 
// The method is copied outside the object and when it is called, 'this' points to undefined,
// so, the caller has changed.
//bookFunction(23, "Sarah Williams"); 
// instead we can use 'call' or 'apply'.
/*
bookFunction.call(easyjet, 23, "Sarah Williams"); // 'call' method for functions - allows you to specify where the 'this' must point to. (1st parameter)
console.log(easyjet.bookings);

bookFunction.call(ryanair, 467, "Andrew Cooper");
console.log(ryanair.bookings);

bookFunction.apply(easyjet, [542, "Andrew Red"]);
console.log(easyjet.bookings);

bookFunction.call(easyjet, ...[521, "Annah Red"]); // same as the above
console.log(easyjet.bookings);
/*************************************************************************** Bind method ************************************************************************/
/*
const bookEA = bookFunction.bind(easyjet); // the bind method specify with object is assigned to 'this' and return the binded function
bookEA(657, "Steve Williams");
console.log(easyjet.bookings);

const bookEA23 = bookFunction.bind(easyjet, 23); // other than binding 'this' to easyjet, it binds 23 as flightNum
bookEA23("Arianna Madison"); //since we binded the flightNum in bookEA23, we only need to pass the name as parameter
console.log(easyjet.bookings);

ryanair.planes = 300;
ryanair.buyPlanes = function() 
{
    console.log(this);
    this.planes ++;
    console.log(this.planes);
}
//document.querySelector(".buy").addEventListener("click", ryanair.buyPlanes); //it doesn't work because 'this' points to the button element
document.querySelector(".buy").addEventListener("click", ryanair.buyPlanes.bind(ryanair)); //we can't use 'call' because it calls the function immediately, so we need bind

// Partial application (means: partial binding)
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23); // binding the rate (we are not interested in 'this', so we pass null)
console.log(addVAT(100));

/**
 * @param {number} rate the VAT rate
 * @returns a function which calculate the value with the VAT added
 */
function addTaxRate(rate) {
   return function(value) {
    return value + value * rate;
   }
};
/*
const addVAT2 = addTaxRate(0.23); //as above with the 'bind' example in addVAT
console.log(addVAT2(100));
console.log(addVAT2(200));
/******************************************************************************************* Challenge *****************************************************************/
/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/
/*
// 1.
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer(){
    const answer = Number(prompt(`${this.question}\n${this.options[0]}\n${this.options[1]}\n${this.options[2]}\n${this.options[3]}\n(Write option number)`));
    // Short circuiting - to avoid write an if statement
    typeof answer === "number" && 0 <= answer && answer < this.answers.length && this.answers[answer] ++;
    // 4.
    this.displayResults();
    this.displayResults("string");
  }
};

// 2.
document.querySelector(".poll").addEventListener("click", poll.registerNewAnswer.bind(poll)); // binding poll object to "this" keyword

// 3.
poll.displayResults = function(type = "array") {
  if (type === "array") {
    console.log(this.answers);
  } else if (type === "string") {
    console.log(`Poll results are ${this.answers.join(", ")}`); // convert array to a single string with values separated by comma
  }
};

// Bonus.
// create a new object with answers property,inside the method call, and manually assigning the test array to it
// in this way the "this" keyword will point to the answers property passed in the call method.
poll.displayResults.call({answers: [5, 2, 3]});
poll.displayResults.call({answers: [5, 2, 3]}, "string");
poll.displayResults.call({answers: [1, 5, 3, 9, 6, 1]});
poll.displayResults.call({answers: [1, 5, 3, 9, 6, 1]}, "string");
/********************************************************** Immediate invoked function expression (IIFE) *************************************************************/
// Wrap the function in parenthesis, and immediately call it with ()
// Standard function
/*
(function () {
  console.log("Immediate invoked function expression");
})();

// Array function
(() => console.log("Immediate invoked function expression"))();
/************************************************************************ Closure ***********************************************************************************/
function secureBooking() {
  // this variable is stored automatically in the returned function, thanks to 'closure'.
  let passengerCount = 0;

  return function() {
    passengerCount ++;
    console.log(`${passengerCount} passengers`);
  }
};
/*
const booker = secureBooking();
booker();
booker();
booker();

console.dir(booker);
*/
let f;
function g(){
  const a = 23;
  f = function(){
    console.log(a * 2);
  }
}

function h(){
  const b = 777;
  f = function(){
    console.log(b * 2);
  }
}
/*
// f is assigned with the function in g with the variable a = 23
g();
f();
// f is assigned with the function in h with the variable b = 777
h();
f();

// Timer
setTimeout(function(){console.log("Timer");}, 1000);

/**
 * 
 * @param {number} n - number of passengers
 * @param {number} wait - seconds to wait before logging the messages
 */
function boardPassengers(n, wait) {
  const perGroup = n / 3;
  /**
   * The function is called automatically with a timer after waiting 'wait' seconds.
   * It logs a few strings to demonstrate closure; perGroup, n and wait are
   * declared in the parent function boardPassengers.
   */ 
  setTimeout(function(){
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  // This will be logged immediately
  console.log(`We will start boarding in ${wait} seconds`);
};
/*
boardPassengers(180, 3);
/******************************************************************************************* Challenge *****************************************************************/
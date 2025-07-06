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



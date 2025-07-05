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
createBooking("A920");
createBooking("A230", 2);
createBooking("A340", 2, 500);
createBooking("A340", undefined, 270); // skip the second parameter, leaving it blank
/********************************************************************** Call back function *****************************************************************************/
/**
 * Strip spaces out of a string
 * @param {string} stringWord string to be stripped out of spaces
 * @returns a string with no spaces on it and converted to lower case
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
transformer("JavaScript is the best!", upperFirstWord);
transformer("JavaScript is the best!", oneWord);


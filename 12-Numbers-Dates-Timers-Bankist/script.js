'use strict';

/********************************************************************* Numbers *************************************************************************************/
/*
console.log(23 === 23.0); // same data type for numbers and floats
console.log(0.1 + 0.2 === 0.3); // false because of binary conversion. In JS this cannot be compared like with decimal numbers
// Type conversion
console.log(Number("23"));
console.log(+"23"); // Type coercion
// Parsing
console.log(Number.parseInt("30px", 10)); // base 10 decimal numbers
console.log(Number.parseInt("ee30px", 2)); // base 2 binary numbers
console.log(Number.parseInt(" 2.5rem "));
console.log(Number.parseFloat(" 2.5rem "));
console.log(parseFloat(" 2.5rem ")); // you can call it in this way too, since the method is a global variable

// Check for NaN type
console.log(Number.isNaN(20));
console.log(Number.isNaN("20"));
console.log(Number.isNaN(+"20px"));
console.log(Number.isNaN(20 / 0));

// Check for number type
console.log(Number.isFinite(20));
console.log(Number.isFinite("20"));
console.log(Number.isFinite(+"20px"));
console.log(Number.isFinite(20 / 0));

// Check for integer type
console.log(Number.isInteger(23));
console.log(Number.isInteger(23.0));
console.log(Number.isInteger(23/0));
/****************************************************************** Math and rounding ********************************************************************************/
/**
 * @param {Number} min - start generating from
 * @param {Number} max - end generating to
 * @returns a random integer number between min and max
 */
const randomInt = ((min, max) => Math.floor(Math.random() * (max - min + 1)) + min);
console.log(randomInt(10, 20));

console.log(20.23.toFixed(3)); // it returns a string with the number rounded to 3 decimal numbers
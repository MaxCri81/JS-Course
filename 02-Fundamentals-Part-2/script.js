'use strict';
/************************************************************************* Functions ***********************************************************************************/
/**
 * A function declaration example.
 * Print a string with your name. 
 * @param {string} name - Your name to be printed with the string.
 */
function logger(name) {
    console.log(`My name is ${name}`);
}

//logger("Massimo");

/**
 * A function expression example.
 * Calculate the age from a given year of birth
 * @param {number} birthYear - year of birth.
 * @returns the age.
 */
const calcAge = function (birthYear) {
    return 2025 - birthYear;
}

//console.log(calcAge(1981));

/**
 * An arrow function example.
 * Calculate the age from a given year of birth
 * @param {number} birthYear - year of birth.
 * @returns the age.
 */
const calcAgeArrowFunction = birthYear => 2025 - birthYear;

//console.log(calcAgeArrowFunction(1981));

/**
 * An arrow function example with some code in the body.
 * Calculate the years left till retirement from a given
 * year of birth, assuming that the retirement age is 65.
 * @param {number} birthYear - year of birth.
 * @returns the years left till retirement.
 */
const yearsUntilRetirement = birthYear => {
    const age = 2025 - birthYear;
    const retirement = 65 - age;
    return retirement;
}

//console.log(yearsUntilRetirement(1981));

/**
 * An arrow function example with some code in the body and 2 parameters.
 * Calculate the years left till retirement from a given
 * year of birth, assuming that the retirement age is 65.
 * @param {number} birthYear - year of birth.
 * @param {string} firstName - first name
 * @returns a string with the first name and years left till retirement.
 */
const yearsUntilRetirementName = (birthYear, firstName) => {
    const age = 2025 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}

//console.log(yearsUntilRetirementName(1981, "Massimo"));
//console.log(yearsUntilRetirementName(1995, "Giusy"));

/**
 * An arrow function example with some code in the body, 2 parameters
 * and a call to the function yearsUntilRetirement.
 * Calculate the years left till retirement from a given
 * year of birth, assuming that the retirement age is 65.
 * @param {number} birthYear - year of birth.
 * @param {string} firstName - first name
 * @returns a string with the first name and years left till retirement.
 */
const yearsUntilRetirementHelper = (birthYear, firstName) => {
    const age = 2025 - birthYear;
    const retirement = yearsUntilRetirement(birthYear);
    return `${firstName} retires in ${retirement} years`;
}

//console.log(yearsUntilRetirementHelper(1981, "Massimo"));

/**
 * Arrow function that calculates the average of 3 scores.
 * @param {number} first - first score
 * @param {number} second - second score
 * @param {number} third - third score
 * @returns the average score
 */
const calcAverage = (first, second, third) => (first + second + third) / 3;

/**
 * Function declaration. Print a string with the winner together with the victory points.
 * @param {number} avgDolphins - Dolphins average score
 * @param {number} avgKoalas - Koalas average score
 */
function checkWinner(avgDolphins, avgKoalas)
{
    if (avgDolphins > avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`); 
    }
    else if (avgKoalas > avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`); 
    }
    else {
        console.log("No team wins...");
    }
} 

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
//checkWinner(scoreDolphins, scoreKoalas);

scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
//checkWinner(scoreDolphins, scoreKoalas);

/*********************************************************************************** Arrays ***************************************************************************/
/*
const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

console.log(friends[0]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

const years = new Array(1991, 1980, 1995, 2020);
console.log(years);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[2]), calcAge(years[years.length - 1])];
console.log(ages);

const friends = ["Michael", "Steven", "Peter"];
const newLength = friends.push("Jay");
console.log(friends, newLength);

friends.unshift("Max");
console.log(friends);

console.log(friends.pop());
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf("Peter"));
console.log(friends.indexOf("Prova"));
console.log(friends.includes("Peter"));
console.log(friends.includes("Prova"));

/**
 * Returns the tip value of 15% if the amount is within the range of
 * 50-300, otherwise return a tip value of 20% of the amount.
 * @param {number} amount - the amount to calculate the tip from. 
 * @returns the tip value from the amount.
 */
function calcTip(amount)
{
    return amount >= 50 && amount <= 300 ? amount * 0.15 : amount * 0.2;
}

/*
const bills = [125, 555, 44];
const tips = [];
const totals = [];

bills.forEach(element => {
    tips.push(calcTip(element));
});

for (let i = 0; i < bills.length; i++)
{
    totals.push(bills[i] + tips[i]);
}

console.log(bills);
console.log(tips);
console.log(totals);
*/
/*********************************************************** Objects (like a Python dictionary) ***********************************************************************/
/*
const objectSample = {firstName: "Massimo", lastName: "Crisafulli", age: 2025 - 1981, friends: ["Michele", "Valerio", "Giuseppe"]};
console.log(objectSample);
console.log(objectSample.firstName);
console.log(objectSample["lastName"]);
console.log(objectSample.friends[0]);

const nameKey = "Name";
console.log(objectSample[`first${nameKey}`], objectSample[`last${nameKey}`]);

const interestedIn = "age";
console.log(objectSample[interestedIn]);

objectSample.placeOfBirth = "Palermo";
objectSample["residence"] = "United Kingdom";
console.log(objectSample);

console.log(`${objectSample["firstName"]} has ${objectSample["friends"].length} friends, and his best friend was ${objectSample["friends"][0]}`);
console.log(`${objectSample.firstName} has ${objectSample.friends.length} friends, and his best friend was ${objectSample.friends[0]}`);
*/
const objectAndFunction = {
    
    firstName: "Massimo", 
    lastName: "Crisafulli", 
    birthYear: 1981,
    friends: ["Michele", "Valerio", "Giuseppe"],
    hasDrivingLicence: true,

    /**
     * Calculate the age from a given year of birth
     * @param {number} birthYear - year of birth.
     * @returns the age.
     */
    calcAge : function (birthYear) {
        return 2025 - birthYear;
    },

    /**
     *  Calculate the age from the birthYear property using the
     * 'this' keyword to retrieve/access the object properties.
     * @returns the age.
     */
    integratedCalcAge : function () {
        //console.log(this); // print all the object content
        return 2025 - this.birthYear;
    },

    /**
     * Example of avoiding calculation for every time a function is called
     * by storing the result in a new property once the function is called
     * for the first time. 
     * Calculate the age from the birthYear property using the
     * 'this' keyword to retrieve/access the object properties 
     * and save the result in a new property.
     * @returns the age.
     */
    storeCalcAge : function () {
        this.age = 2025 - this.birthYear;
        return this.age;
    },

    /**
     * Print a summary of the object properties.
     * The ternary operator inside the print statement checks hasDrivingLicence and if
     * false it adds 'not' to indicate that that person doesn't have a driving license.
     */
    getSummary : function() {
        console.log(`${this.firstName} is a ${this.integratedCalcAge()}-years old, and he has ${this.hasDrivingLicence ? "" : "not "}a driving license`);
    } 
};
/*
console.log(objectAndFunction.calcAge(1981));
console.log(objectAndFunction["calcAge"](1981));
console.log(objectAndFunction.integratedCalcAge());

objectAndFunction.storeCalcAge();
console.log(objectAndFunction.age);
objectAndFunction.getSummary();
*/
const mark = {
    fullName: "Mark Miller",
    mass : 78,
    height : 1.69,

    /**
     * Calculate the body mass index.
     * Mass in kg and height in meters
     * @returns the body mass index
     */
    calcBMI : function() {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

const john = {
    fullName: "John Smith",
    mass : 92,
    height : 1.95,

    /**
     * Calculate the body mass index.
     * Mass in kg and height in meters
     * @returns the body mass index
     */
    calcBMI : function() {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};
/*
mark.calcBMI();
john.calcBMI();

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`);
}
else {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`);
}

/*********************************************************************** Loops **************************************************************************************/
const arrayTest = [
    "Massimo",
    "Crisafulli",
    2025 - 1981,
    ["Giusy", "Caterina", "Rosetta", "Toto'"]
];
/*
const types = [];

for (let i=0; i < arrayTest.length; i++)
{
    console.log(arrayTest[i]);
    types.push(typeof arrayTest[i]);
}

console.log(types);
console.log("");

for (let i=arrayTest.length - 1; i >= 0 ; i--)
{
    console.log(arrayTest[i]);
}

console.log("");

for (let i=0; i < arrayTest.length; i++)
{
    if (typeof arrayTest[i] === "object") {
        for (let x=0; x < arrayTest[i].length; x++) 
        {
            console.log(arrayTest[i][x]);
        }
    }
    else {
        console.log(arrayTest[i]);
    }
}

let i = 0;
while (i < arrayTest.length)
{
    console.log(arrayTest[i]);
    i++;
}

// generate a random number between 0 and 1, multiply by 6, take only the decimal part and add 1.
let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

let tentativi = 1;
while (dice !== 6)
{
    dice = Math.trunc(Math.random() * 6) + 1;
    tentativi ++;
}
console.log(`Number of attempts ${tentativi}`);

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i=0; i < bills.length; i++)
{
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(bills[i] + tip);
}
console.log(bills);
console.log(tips);
console.log(totals);

/**
 * Returns the average of all numbers in the array.
 * @param {object} arr - an array of numbers 
 * @returns the average of all numbers in the array.
 */
function calcAverage1(arr)
{
    let sum = 0;
    for (let i=0; i < arr.length; i++)
    {
        sum += arr[i];
    }
    return sum / arr.length;
}

//console.log(calcAverage1(totals));

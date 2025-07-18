// ******************************************************* variables, types, operators **********************************************************************************

/*let firstName = "Massimo";
let testBoolean = true;

console.log(4+10);
console.log(firstName);
console.log(testBoolean);
testBoolean = false;
console.log(testBoolean);

console.log(typeof firstName);
console.log(typeof testBoolean);
console.log(typeof 23);

// variable are of dynamic typing. you don't need to specify the data type for a variable declaration.
// the data type is in the value itself.
testBoolean = "true";
console.log(typeof testBoolean);

let year;
console.log(year);
console.log(typeof year);

// Constants
const birthYear = 1981;
birthYear = 1980; // error. cannot be reassigned other values
const birthMonth; // error. constant cannot be declared empty.

console.log(20, 23);
console.log(20 + 5, 20 / 5);
console.log(2 ** 3); // 2 ^ 3 = 8

const firstName = "Massimo";
const lastName = "Crisafulli";
console.log(firstName + " " + lastName); 

let x = 10 + 5;
x += 10;
x *= 4;
x ++;
x --;

console.log(x);

let now = 2037;
console.log(now - 1990 > now - 2000); // 47 > 37 = true

//************************************************************************************ Template literals **************************************************************/
/*
const firstName = "Massimo";
const lastName = "Crisafulli";
const prova = `I'm ${firstName} ${lastName}`;
console.log(prova);

console.log("String with \n\multiple \n\lines");

console.log(`String with
multiple
lines`);

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);

/* Write your code below. Good luck! 🙂 */
/*
if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI ${BMIMark} is higher than John's ${BMIJohn}!`)
} 
else {
    console.log(`John's BMI ${BMIJohn} is higher than Mark's ${BMIMark}!`)
}

const inputYear = "1991";
console.log(Number(inputYear) + 9); //type conversion -> 2000
console.log(inputYear);

console.log("23" - "10" - 3); //type coercion -> 10
console.log("23" + "10" + 3); //string concatenation -> 23103

let x = "1" + "1" - 1;
x = x - 1 + 1 + "1";
console.log(x); // -> 101

const age = 18;
if (age === 18) console.log(age);

console.log(18 === 18); // -> true
console.log(18 == '18'); // -> true
console.log(18 === '18'); // -> false
console.log(18 !== '18'); // -> true
console.log(18 != '18'); // -> false

/********************************************************************************** Input -> Prompt ********************************************************************/
/*
const myNumber = prompt("Type a number!");
console.log(myNumber, typeof myNumber);

console.log(true && true);
console.log(true || false);
console.log(true && false);

//TEST DATA: Dolphins scored 96, 108, and 89. Koalas scored 88, 91, and 110.
const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;
let winner;
if (scoreDolphins > scoreKoalas) {
    winner = "Dolphins";
} 
else if (scoreKoalas > scoreDolphins) {
    winner = "Koalas";
}
else {
    winner = "Both";
}
console.log(`${winner} win the trophy`);
console.log(scoreDolphins, scoreKoalas);

/**************************************************************************** Switch statement ***********************************************************************/
/*
const day = "monday";
switch(day) {
    case "monday":
        console.log("It is monday");
        break;
    case "tuesday":
        console.log("it is tuesday");
        break;
    default:
        console.log("not a valid day");
}

/************************************************************************* Ternary operator ********************************************************************** */
/*
const age = 18;
age >= 18 ? console.log("Sei maggiorenne") : console.log("Non sei ancora maggiorenne");

const bill = 275;
// if the bill is in the range of 50 to 300 then the tip is 15 % otherwise is 20 % 
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
*/

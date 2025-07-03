'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

// Data needed for the lecture
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  /**
   * Return an array from the restaurant object at properties
   * starterMenu and mainMenu.
   * @param {string} starterIndex - starterMenu value 
   * @param {string} mainIndex - mainMenu value
   * @returns an array with the string values of starterMenu 
   * and mainMenu at indexes starterIndex and mainIndex
   */
  order: function(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  /**
   * Destrucures the object received and print a formatted string
   * @param {number} starterIndex - restaurant.starterMenu index - default value 1
   * @param {number} mainIndex - restaurant.mainMenu index - default value 0
   * @param {string} time - time property of the object parameter - default value 20:00
   * @param {string} address - address property of the object parameter  
   */
  orderDelivery: function({starterIndex = 1, mainIndex = 0, time = "20:00", address}) {
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address}, at ${time}`);
  },

  /**
   * Print a formatted string with the 3 arguments
   * @param {string} ing1 - first ingredient
   * @param {string} ing2 - second ingredient
   * @param {string} ing3 - third ingredient 
   */
  orderpasta : function(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
  },
  
  orderPizza: function(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  }
};

// Challenge Data
const books = [
  {
    title: 'Algorithms',
    author: ['Robert Sedgewick', 'Kevin Wayne'],
    publisher: 'Addison-Wesley Professional',
    publicationDate: '2011-03-24',
    edition: 4,
    keywords: ['computer science', 'programming', 'algorithms', 'data structures', 'java', 'math', 'software', 'engineering'],
    pages: 976,
    format: 'hardcover',
    ISBN: '9780321573513',
    language: 'English',
    programmingLanguage: 'Java',
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13
      }
    },
    highlighted: true
  },
  {
    title: 'Structure and Interpretation of Computer Programs',
    author: ['Harold Abelson', 'Gerald Jay Sussman', 'Julie Sussman (Contributor)'],
    publisher: 'The MIT Press',
    publicationDate: '2022-04-12',
    edition: 2,
    keywords: ['computer science', 'programming', 'javascript', 'software', 'engineering'],
    pages: 640,
    format: 'paperback',
    ISBN: '9780262543231',
    language: 'English',
    programmingLanguage: 'JavaScript',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0
      }
    },
    highlighted: true
  },
  {
    title: 'Computer Systems: A Programmer\'s Perspective',
    author: ['Randal E. Bryant', 'David Richard O\'Hallaron'],
    publisher: 'Prentice Hall',
    publicationDate: '2002-01-01',
    edition: 1,
    keywords: ['computer science', 'computer systems', 'programming', 'software', 'C', 'engineering'],
    pages: 978,
    format: 'hardcover',
    ISBN: '9780130340740',
    language: 'English',
    programmingLanguage: 'C',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16
      }
    },
    highlighted: true
  },
  {
    title: 'Operating System Concepts',
    author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
    publisher: 'John Wiley & Sons',
    publicationDate: '2004-12-14',
    edition: 10,
    keywords: ['computer science', 'operating systems', 'programming', 'software', 'C', 'Java', 'engineering'],
    pages: 921,
    format: 'hardcover',
    ISBN: '9780471694663',
    language: 'English',
    programmingLanguage: 'C, Java',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65
      }
    }
  },
  {
    title: 'Engineering Mathematics',
    author: ['K.A. Stroud', 'Dexter J. Booth'],
    publisher: 'Palgrave',
    publicationDate: '2007-01-01',
    edition: 14,
    keywords: ['mathematics', 'engineering'],
    pages: 1288,
    format: 'paperback',
    ISBN: '9781403942463',
    language: 'English',
    programmingLanguage: null,
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.35,
        ratingsCount: 370,
        reviewsCount: 18,
        fiveStarRatingCount: 211,
        oneStarRatingCount: 6
      }
    },
    highlighted: true
  },
  {
    title: 'The Personal MBA: Master the Art of Business',
    author: 'Josh Kaufman',
    publisher: 'Portfolio',
    publicationDate: '2010-12-30',
    keywords: ['business'],
    pages: 416,
    format: 'hardcover',
    ISBN: '9781591843528',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.11,
        ratingsCount: 40119,
        reviewsCount: 1351,
        fiveStarRatingCount: 18033,
        oneStarRatingCount: 1090
      }
    }
  },
  {
    title: 'Crafting Interpreters',
    author: 'Robert Nystrom',
    publisher: 'Genever Benning',
    publicationDate: '2021-07-28',
    keywords: ['computer science', 'compilers', 'engineering', 'interpreters', 'software', 'engineering'],
    pages: 865,
    format: 'paperback',
    ISBN: '9780990582939',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.7,
        ratingsCount: 253,
        reviewsCount: 23,
        fiveStarRatingCount: 193,
        oneStarRatingCount: 0
      }
    }
  },
  {
    title: 'Deep Work: Rules for Focused Success in a Distracted World',
    author: 'Cal Newport',
    publisher: 'Grand Central Publishing',
    publicationDate: '2016-01-05',
    edition: 1,
    keywords: ['work', 'focus', 'personal development', 'business'],
    pages: 296,
    format: 'hardcover',
    ISBN: '9781455586691',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.19,
        ratingsCount: 144584,
        reviewsCount: 11598,
        fiveStarRatingCount: 63405,
        oneStarRatingCount: 1808
      }
    },
    highlighted: true
  }
];

/************************************************************************* Destructuring arrays  ********************************************************************/
/*
const arr = [2, 3, 4];
// without array destructuring
const a = arr[0];
const b = arr[1];
const c = arr[2];

// with array destructuring
const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr); // the original array is untouched

const [first, second] = restaurant.categories;
//const [first, second] = restaurant["categories"]; // alternatively
console.log(first, second); // first and second element from restaurant.categories

let [main, , secondary] = restaurant.categories;
console.log(main, secondary); // first and third element from restaurant.categories

// inverting a variable's value without array destructuring
const temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary);

// inverting a variable's value with array destructuring
[main, secondary] = [secondary, main];
console.log(main, secondary);

let firstMeal = "Pasta";
let secondMeal = "Pizza";
[firstMeal, secondMeal] = [secondMeal, firstMeal];
console.log(firstMeal, secondMeal);

console.log(restaurant.order(2, 0));

// creates 2 variables after the function call
// destructure the restaurant.order function's returned array
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// destructuring nested arrays
const nested = [2, 4, [5, 6]];
console.log(nested); //
const [i, , j] = nested;
console.log(i, j);
const [k, , [l, m]] = nested;
console.log(k, l, m);

// destructuring arrays using default values in case the array length 
// (on the right) is shorter than the number of arguments (on the left)
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
/*********************************************************************************** Challenge ************************************************************************/
/*
const [firstBook, secondBook] = books;
console.log(firstBook, secondBook);
const [, , thirdBook] = books;
console.log(thirdBook);
console.log(books);

const ratings = [['rating', 4.19], ['ratingsCount', 144584]];
const [[, rating], [, ratingsCount]] = ratings;
console.log(rating, ratingsCount);

const ratingStars = [63405, 1808];
const [fiveStarRatings, oneStarRatings, threeStarRatings = 0] = ratingStars;
console.log(fiveStarRatings, oneStarRatings, threeStarRatings);

/************************************************************************* Destructuring objects *********************************************************************/
/*
// when destructuring objects we don't need to skip elements like 
// with the arrays since in objects the order does not matter
const {name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories);

// changing variable names
const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;
console.log(restaurantName, hours, tags);

// assigning default values and changing name for starterMenu
const {menu = [], starterMenu: starter = []} = restaurant;
console.log(menu, starter);

// mutating values
let a = 111;
let b = 999;
const obj = {a: 23, b: 7, c: 14};
console.log(a, b); // 111, 999
({a, b} = obj); // we cannot use -> let {a, b} = obj; since a and b are already declared above with let, otherwise yes.
console.log(a, b); // 23, 7

// nested objects
const {fri} = openingHours; // openingHours was extraxted above
console.log(openingHours);
console.log(fri);
const {fri: {open, close}} = openingHours; // further destructuring
console.log(open, close);
const {fri: {open: o, close: c}} = openingHours; //changing variable names
console.log(o, c);

restaurant.orderDelivery({
  time: "22:30",
  address: "Via del Sole, 21",
  mainIndex: 2,
  starterIndex: 0,
});

restaurant.orderDelivery({
  address: "Via ruggero settimo, 122"
});

/*********************************************************************************** Challenge ************************************************************************/
/*
console.log(books[0]);
const {title, author, ISBN} = books[0];
console.log(title, author, ISBN);
const {keywords: tags} = books[0];
console.log(tags);
const {language, programmingLanguage= "unknown"} = books[6];
console.log(language, programmingLanguage);
let bookTitle = 'unknown';
let bookAuthor = 'unknown';
({title: bookTitle, author: bookAuthor} = books[0]);
console.log(bookTitle, bookAuthor);
const {thirdParty: {goodreads : {rating: bookRating}}} = books[0];
console.log(bookRating); 

/**
 * Destrucures the object received and print a formatted string
 * @param {string} title - title property of the object parameter
 * @param {string} author - author property of the object parameter
 * @param {number} year - year property of the object parameter - default value "year unknown"
 */
function printBookInfo({title, author, year= "year unknown"})
{
  console.log(`${title} by ${author}, ${year}`);
}

/*
printBookInfo({
  title: "Algorithms",
  author: "Robert Sedgewick", 
  year: 2011
});

printBookInfo({
  title: "Algorithms",
  author: "Robert Sedgewick"
});

/****************************************** The Spread operator ... Unpack - Use on the right hand side ***************************************************************/
/*
const arr = [7, 8, 9];
// inserting at the beginning of the array
const newArr = [1, 2, ...arr];
console.log(newArr);
console.log(...newArr); // spreaded array
// adding at the end of the array
const newMenu = [...restaurant.mainMenu, "Gnocchi"];
console.log(newMenu);
// destructuring an object property
const {mainMenu} = restaurant;
console.log(mainMenu);
// spreading an object property
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);
// joining 2 arrays with the spread operator
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);
console.log(..."Massimo", " ", "C."); // expanding a string and adding some values
const ingredients = ["tomato", "garlic", "basil leaves"];
restaurant.orderpasta(...ingredients);
// spreading an object and adding some values on it
const newRestaurant = {foundedIn: 2012, ...restaurant, owner: "Massimiliano Crisafulli"};
console.log(newRestaurant);
// if you copy an object in this way, both variables will refer to the same object and 
// any modification in one object will refect on the other one
//const restaurantCopy = restaurant; // wrong way for copying an object's content
const restaurantCopy = {...restaurant}; // right way for copying an object's content
restaurantCopy.name = "Ristorante Roma";
console.log(restaurant.name, restaurantCopy.name);
/********************************************************************************** Challenge **************************************************************************/
/*
const bookAuthors = [...books[0].author, ...books[1].author];
console.log(bookAuthors);  
/**
 * Print and spread the stringToSpread content
 * @param {string} stringToSpread - the string to be spreaded.
 */
function spellWord(stringToSpread)
{
  console.log(...stringToSpread);
};
/*
spellWord('JavaScript');
*/
/************************************************ Rest operator - Pack - Use on the left hand side *********************************************************************/
/*
const [a, b, ...others] = [1, 2, 3, 4, 5, 6];
console.log(a, b, others); 

const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, risotto, otherFood);

const {sat, ...weekdays} = restaurant.openingHours; // const sat matches sat key name in the object restaurant.openingHours
console.log(restaurant.openingHours);
console.log(sat, weekdays);

/**
 * Example of packing together all numbers in an array creating an array.
 * @param  {number} numbers - numbers to be packed in the array
 */
function addTest(...numbers)
{
  console.log(numbers);
}
/*
addTest(3,4);
addTest(7,4, 2, 6);
addTest(3, 4, 1 ,6, 9, 0);

/**
 * Sum all numbers
 * @param  {number} numbers - numbers to be packed in the array
 * @returns the sum of the numbers
 */
function add(...numbers)
{
  let total = 0;
  for (let i=0; i < numbers.length; i++) total += numbers[i];
  return total;
}
/*
console.log(add(3, 5, 7, 10));

restaurant.orderPizza("tomato", "vegan cheese", "mushrooms", "basil leaves");
restaurant.orderPizza("tomato");
/********************************************************************************** Challenge **************************************************************************/
/*
// Destructuring an array, assigning a value of the array to a new variable 
// and the remaing values to another variable as an array
const [mainKeyword, ...rest] = books[0].keywords;
console.log(mainKeyword, rest);
// Destructuring an object, assigning a property value to a new variable and 
// the remaing properties to another variable as an object
const {publisher : bookPublisher, ...restOfTheBook} = books[1];
console.log(bookPublisher);
console.log(restOfTheBook);

/**
 * This function log to the console a string formatted.
 * @param {string} title - book title
 * @param  {string} authors - Accept any number of arguments. 
 */
function printBookAuthorsCount(title, ...authors)
{
  console.log(`The book "${title}" has ${authors.length} authors`);
};
/*
printBookAuthorsCount('Algorithms', 'Robert Sedgewick', 'Kevin Wayne');
*/
/******************************************************************** Short Circuiting *******************************************************************************/
/*
console.log(3 || "Max"); // if the first value is a truthy value, return it without validating the second one
console.log(undefined || null || 0 || "" || "Hi" || 23); // return the first truthy value = "Hi"

// if a value doesn't exist, without short circuiting, do this.
const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest1);

// if a value doesn't exist, with short circuiting, do this.
const guest2 = restaurant.numGuests || 10;
console.log(guest2);

console.log(0 && "Max");
console.log(1 && "Max"); // if all the values are truthy values, return the last one.
console.log(1 && "Max" && 0);

// if a value doesn't exist, without short circuiting, do this.
if (restaurant.orderPizza) {
  restaurant.orderPizza("mushroom", "spinach");
}

// if a value doesn't exist, with short circuiting, do this.
restaurant.orderPizza && restaurant.orderPizza("mushroom", "spinach");

const testObj = {

  testThisIsaTest: function (a,b)
  {
    console.log(a, b);
  }
}
testObj.testThisIsaTest && testObj.testThisIsaTest("Hi", "there"); // Hi there
/******************************************************************************** Challenge ***************************************************************************/
/**
 * Example of short circuiting
 * @param {object} book - the book object 
 * @returns true if the book with the programmingLanguage property's value is "Java" otherwise "no data available"
 */
function hasExamplesInJava(book)
{
  return book.programmingLanguage === "Java" || "no data available";
}
//console.log(hasExamplesInJava(books[0]));

//books.forEach(checkOnlineContent);
/**
 * Example of short circuiting.
 * Print a formatted string for the books that provide online content.
 * @param {object} item - object in books array
 */
function checkOnlineContent(item)
{
  item.onlineContent && console.log(`${item.title} provides online content`);
};
/********************************************************************* The Nullish Coalescing operator ****************************************************************/
/*
// With short circuiting
restaurant.numGuests = 0;
console.log(restaurant.numGuests || 10); // 10 -> This is not the expected result. 
// The output should be 0, but because 0 is a falsy value then the or || operator returns 10, the first truthy value.
// With the Nullish Coalescing operator
console.log(restaurant.numGuests ?? 10); // 0
// it works only with nullish value: null or undefined (NOT 0 or "")
/******************************************************************************* Challenge ****************************************************************************/
//books.forEach(checkOnlineContentNullish);

/**
 * Example of short circuiting with the Nullish Coalescing operator.
 * Print a formatted string for the books that does not provide online content.
 * @param {object} item - object in books array
 */
function checkOnlineContentNullish(item)
{
  item.onlineContent ?? console.log(`${item.title} provides no data about its online content`);
}
/*************************************************************** Logical Assignment Operators *************************************************************************/
/*
const rest1 = {
  name: "Capri",
  numGuests: 0
  // numGuests: 20
};

const rest2 = {
  name: "La Piazza",
  owner: "MAX Crisafulli"
};
// shortcircuiting without Logical Assignment Operators
//rest1.numGuests = rest1.numGuests || 10; // it doesnt assign any value to numGuests since it already contain a truthy value 20
//rest2.numGuests = rest2.numGuests || 10; // it assign 10 as value to numGuests since numGuests doesn't exist in rest2 object, it is a falsy value.

// with OR Assignment Operators
// it doesn't work with 0 value since it is a falsy value
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// with Nullish Assignment Operators
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;
console.log(rest1);
console.log(rest2);

// shortcircuiting without Logical Assignment Operators
//rest1.owner = rest1.owner && "<ANONYMOUS>"; // undefined since the AND operator shortcircuit the falsy value (rest1.owner doesn't exist)
//rest2.owner = rest2.owner && "<ANONYMOUS>"; // rest2.owner = <ANONYMOUS>

// with AND Assignment Operators
rest1.owner &&= "<ANONYMOUS>"; 
rest2.owner &&= "<ANONYMOUS>";
console.log(rest1);
console.log(rest2);
/******************************************************************************* Challenge ****************************************************************************/
/*
// Example of short circuiting with OR assignments operator
// Loop over the books array, and assign the edition property with a number 1 (if it doesn't already exist)
for (let i=0; i < books.length; i++) books[i].edition ||= 1;
console.log(books);

// Iterate over the books array, and if the thirdParty.goodreads.rating property is less than 4.2, reassign the highlighted property to false.
for (let i=0; i < books.length; i++) 
{
  books[i].highlighted &&= !(books[i].thirdParty.goodreads.rating < 4.2);
}
console.log(books);
/******************************************************************************* Challenge ****************************************************************************/
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (above). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/
/*
// 1.
const [players1, players2] = game.players;
console.log(players1, players2);

// 2.
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// 3.
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4.
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

// 5.
const {team1, x: draw, team2} = game.odds;
console.log(team1, draw, team2);

// 6.
function printGoals(...players)
{
  for (let i=0; i < players.length; i++) console.log(players[i]);
  console.log(`${players.length} goals were scored`);
}

printGoals('Davies', 'Muller');
printGoals(...game.scored);

// 7.
team1 < team2 && console.log("Team1 is more likely to win") || team2 < team1 && console.log("Team2 is more likely to win");
/***************************************************************** The for of Loop ***********************************************************************************/
/*
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]; // joins two arrays, see section at the beginning
console.log(menu);
// For of Loop
for (const item of menu) console.log(item);
// For of Loop with indexed items
for (const item of menu.entries()) console.log(item);

for (const item of menu.entries()) {
  console.log(`${item[0] + 1}: ${item[1]}`);
}
console.log("");

// For of Loop with destructuring
for (const [key, value] of menu.entries()) {
  console.log(`${key + 1}: ${value}`);
}
  
// Create an Iterator
console.log(menu.entries());
// Expand an Iterator
console.log([...menu.entries()]);
/******************************************************************************* Challenge ****************************************************************************/
// Use the for-of loop to loop over the books array and sum the pages of all books. Use the pageSum variable and the pages property of the book objects.
/*
let pageSum = 0;
for (const {pages} of books) pageSum += pages; // used object desctructuring
console.log(pageSum);
/*
Below is the allAuthors variable which stores an empty array. Use the for-of loop to fill allAuthors with the authors of each book from the books array.
Remember that each book object has the author property, which can be a string (if there is only a single author) or an array (if there are multiple authors). You may need to use the typeof operator. You can also use multiple loops if needed. The allAuthors array should have just one level (no nested arrays).

let allAuthors = [];
for (const {author} of books) 
{
  if (typeof author == "string") allAuthors.push(author);
  else for (const i of author) allAuthors.push(i);
}
console.log(allAuthors);
/*
//Without shortcut
allAuthors = [];
for (const book of books) {
  if (typeof book.author === 'string') {
    allAuthors.push(book.author)
  } else {
    for (const author of book.author) {
      allAuthors.push(author);
    }
  }
}
console.log(allAuthors);
*/
/*Use the for-of loop together with Array's entries() method to log each author from allAuthors to the console together with its index.
 Make the index start from 1, instead of 0.
*/
/*
for (const [key, value] of allAuthors.entries())
{
  console.log(`${key + 1}: ${value}`);
}
*/
/************************************************************ Enhanced Object Literal ********************************************************************************/
const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

// 👉 Enhanced to Object Literal -> property names can be computed other than written
const hours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  [`Day-${2+4}`]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const testObj = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // 👉 Enhanced to Object Literal -> add another object into an object
  hours,

  /**
   * 👉 Enhanced to Object Literal -> do not need to write colons and the function word
   * Return an array from the restaurant object at properties
   * starterMenu and mainMenu.
   * @param {string} starterIndex - starterMenu value 
   * @param {string} mainIndex - mainMenu value
   * @returns an array with the string values of starterMenu 
   * and mainMenu at indexes starterIndex and mainIndex
   */
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};
/*
console.log(testObj);
/******************************************************************************* Challenge ****************************************************************************/
/*
const bookData = [
  ['title', 'Computer Networking: A Top-Down Approach'],
  ['author', ['James F. Kurose', 'Keith W. Ross']],
  ['publisher', 'Addison Wesley'],
];

// Using computed properties, fill the newBook object with the properties and values from the bookData array.
const newBook = {
  [bookData[0][0]]: bookData[0][1],
  [bookData[1][0]]: bookData[1][1],
  [bookData[2][0]]: bookData[2][1],
};
console.log(newBook);

const pages = 880;
//Add pages as a property of the newBook2 object
const newBook2 = {
  title: 'The C Programming Language',
  author: ['Brian W. Kernighan', 'Dennis M. Ritchie'],
  pages
};
console.log(newBook2);
/**************************************************************************** Optional Chaining **********************************************************************/
/*
// Chack if a property exist and print the content if it does.
// With if statement
if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);
// With AND operator
restaurant.openingHours.mon && console.log(restaurant.openingHours.mon.open);
// With Optional Chaining
console.log(restaurant.openingHours.mon?.open);

const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
for (const day of days) {
  // We cannon use the dot since day is not a property in the object. We have to use [day]
  // Note. sat open at 0, it is a falsy value so we need the nullish operator ?? if we want to assign a default value for the other not existing values
  console.log(restaurant.openingHours[day]?.open ?? "Closed");  
}

console.log(restaurant.order?.(0, 1) ?? "Method does not exist");
console.log(restaurant.orderRisotto?.(0, 1) ?? "Method does not exist");

console.log(books[0]?.title ?? "Title array empty");
console.log(books[10]?.title ?? "Title array empty");
/******************************************************************************* Challenge ****************************************************************************/
const newBook2 = {
  title: 'The C Programming Language',
  author: ['Brian W. Kernighan', 'Dennis M. Ritchie']
};

/**
 * Print the first keyword from the book's keywords property (array) or undefined 
 * (if the keywords property doesn't exist). It use optional chaining.
 * @param {object} bookObject - book object
 */
function getFirstKeyword(bookObject)
{
  console.log(bookObject.keywords?.[0]);
}
/*
getFirstKeyword(books[0]);
getFirstKeyword(newBook2);
/***************************************************** Loop over Objects - They are not iterable ******************************************************************/
/*
// Keys
for (const day of Object.keys(restaurant.openingHours)) console.log(day);
console.log(Object.keys(restaurant.openingHours)); // create an array with keys from the object

const properties = Object.keys(restaurant.openingHours);
console.log(properties.length);

let openStr = `We are open on ${properties.length} days: `;
for (const day of properties) {
  openStr += `${day}, `;
};
console.log(openStr);

// Values
console.log(Object.values(restaurant.openingHours)); 

// Entries
const entries = Object.entries(restaurant.openingHours); // create an array with keys and values
console.log(entries);

for (const [key, {open, close}] of entries) //destructuring the array's key and value. The latter with object destructuring 
{
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}
/******************************************************************************* Challenge ****************************************************************************/
/*
//Below is the entries variable that stores an empty array. Use the for-of loop together with the Object.keys() method to loop over the thirdParty.goodreads property (array) of the first book object from the books array. For each key, push a new array that contains that key to the entries array.
const entries = [];
for (const key of Object.keys(books[0].thirdParty.goodreads)) 
{
  entries.push([key]);
}
console.log(entries);

//Use the for-of loop together with the Object.values() method and Array's entries() method to loop over thirdParty.goodreads property of the first book from the books array. Push each value to the appropriate inner array in the entries array (use index from entries()).

//The Object.values() method returns an array, which means you can call the Array's entries() method on it.
//The Array's entries() method returns [index, value] arrays for each element in the array
const arrayEntries = Object.values(books[0].thirdParty.goodreads).entries();
for (const [arrayKey, arrayValue] of arrayEntries) 
{
  
  entries[arrayKey].push(arrayValue);
}
console.log(entries);

//Use the Object.entries() method on the thirdParty.goodreads property of the first book from the books array. Assign the returned value to the variable called entries2. 
const entries2 = Object.entries(books[0].thirdParty.goodreads); // this solotion is the combination of the previous two exercises
console.log(entries2); 
*/
/*********************************************************************** Coding Challenge 2 ***************************************************************************/
/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scores' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/
// 1.
/*
for (const [key, value] of game.scored.entries()) 
{
  console.log(`Goal ${key + 1}: ${value}`);
}

// 2.
let sum = 0;
const odds = Object.values(game.odds);
for (const value of odds) 
{
  sum += value;
}
console.log(`The avereage odd is ${sum / odds.length}`);

// 3.
for (const [key, value] of Object.entries(game.odds)) 
{
  const toPrint = game[key] == undefined ? "draw" : `victory ${game[key]}:`;
  console.log(`Odd of ${toPrint} ${value}`);
}

// Bonus.
const scores = {};
for (const player of game.scored)
{
  // with Ternary Operator
  //scores[player] = scores[player] == undefined ? 1 : ++ scores[player];
  // with Optional Chaining
  scores[player] ? ++ scores[player] : scores[player] = 1;

}
console.log(scores);
*/
/************************************************************************* Sets **************************************************************************************/
/*
const newSet = new Set(["Pasta", "Pizza", "Pasta", "Burger"]);
console.log(newSet);
console.log(new Set("Max"));
console.log(newSet.size);
console.log(newSet.has("Bread"));
console.log(newSet.has("Pasta"));
newSet.add("Risotto");
console.log(newSet);
newSet.delete("Pasta");
console.log(newSet);
// newSet.clear();
// console.log(newSet);
for (const element of newSet) console.log(element);
const ingredients = ["Pasta", "Pizza", "Pasta", "Burger"];
console.log(new Set(ingredients));
console.log([...new Set(ingredients)]); // Spread the elements into an array

console.log(italianFoods.intersection(mexicanFoods)); // return similarities between 2 sets
console.log([...italianFoods.intersection(mexicanFoods)]); // convert to array

console.log(italianFoods.union(mexicanFoods)); //return both sets in 1, without similarities
console.log(new Set([...italianFoods, ...mexicanFoods])); // with spread and new Set
console.log([...new Set([...italianFoods, ...mexicanFoods])]); // with spread and new Set, converted to array

console.log(italianFoods.difference(mexicanFoods)); // return the first set without its duplicates with the second set 

console.log(italianFoods.symmetricDifference(mexicanFoods)); // return both sets in 1 where values are unique in both sets

console.log(italianFoods.isDisjointFrom(mexicanFoods)); // return true if the 2 sets do not have any similarities, otherwise false
/******************************************************************************* Challenge ****************************************************************************/
/*
//Loop over the books array, and fill the allKeywords array with the keywords coming from the keywords property of each book object. The allKeywords array should have just one level (no nested arrays).
const allKeywords = [];
for (const book of books)
{
  allKeywords.push(...book.keywords);
}
console.log(allKeywords);

//The allKeyword array contains duplicates. Remove them by creating a Set out of that array. Assign the newly created set to the uniqueKeywords variable.
const uniqueKeywords = new Set(allKeywords);
console.log(uniqueKeywords);

uniqueKeywords.add("coding");
uniqueKeywords.add("science");
console.log(uniqueKeywords);

uniqueKeywords.delete("business");
console.log(uniqueKeywords);

//Create an array out of the uniqueKeywords set, and assign it to the uniqueKeywordsArr variable.
const uniqueKeywordsArr = [...uniqueKeywords];
console.log(uniqueKeywordsArr);

uniqueKeywords.clear();
/************************************************************************* Maps **************************************************************************************/
/*
const arr = [1, 2];

const rest = new Map();
rest.set("name", "Yakinori");
rest.set(1, "Rome Italy");
rest.set(2, "Lisbon Portugal");
console.log(rest);

rest.set("categories", ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
.set("open", 11)
.set("close", 24)
.set(true, "We are open")
.set(false, "We are closed")
.set(arr, "test") // to get a value from an array key, the get method should refers to the same object in memory -> rest.get(arr) and not rest.get([1, 2])
.set(document.querySelector("h1"), "heading");
console.log(rest);

console.log(rest.get("categories"));

const time = 21;
// get the rest value, from the true or false key, according to the expression result.
console.log(rest.get(time >= rest.get("open") && time < rest.get("close"))); // 1st way
console.log(rest.get(rest.get("open") <= time < rest.get("close"))); // 2nd way

console.log(rest.has("categories"));
rest.delete(2);
console.log(rest.size);
console.log(rest.get(arr));
//rest.clear();

const question = new Map([
  ["question", "What is the best programming language?"],
  [1, "Java"],
  [2, "Python"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "Correct 🎉"],
  [false, "Try again!"]
]);
console.log(question);

console.log(restaurant.openingHours); // Object
console.log(Object.entries(restaurant.openingHours)); // Object entries (array or arrays)
console.log(new Map(Object.entries(restaurant.openingHours))); // Convert object entries to map

console.log(question.get("question"));
for (const [key, value] of question) {
  //console.log(typeof key == "number" && `Answer ${key}: ${value}`);
  if (typeof key == "number") console.log(`Answer ${key}: ${value}`);
}
const answer = 3;
console.log(question.get(question.get("correct") === answer)); // get the rest value, from the true or false key, according to the expression result.

//Convert map to array
console.log([...question]);
console.log([...question.keys()]);
console.log([...question.values()]);
/******************************************************************************* Challenge ****************************************************************************/
/*
const bookMap = new Map([['title', 'Clean Code'], ['author', 'Robert C. Martin']]);
bookMap.set("pages", 464);
console.log(bookMap);
console.log(`${bookMap.get("title")} by ${bookMap.get("author")}`);
//Check if bookMap has the author key and if so, log "The author of the book is known" to the console.
console.log(bookMap.get("author") && "The author of the book is known");

// Convert the first book object from the books array into a Map, and assign it to a firstBookMap variable.
const firstBookMap = new Map(Object.entries(books[0]))
console.log(firstBookMap);
// Use the for-of loop to iterate over firstBookMap, and log to the console keys that have numbers as values.
for (const [key, value] of firstBookMap)
{
  if (typeof value === "number") console.log(value);
}  
/******************************************************************************* Challenge ****************************************************************************/
const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);
/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the gameEvents and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀

// 1.
const events = [...new Set(gameEvents.values())];
console.log(events);

// 2.
gameEvents.delete(64);
console.log(gameEvents);

// 3.
console.log(`An event happened, on average, every ${90 / gameEvents.size} minutes`);

// 4.
for (const [key, value] of gameEvents)
{
  console.log(`${key <= 45 ? "[FIRST" : "[SECOND"} HALF] ${key}: ${value}`);
}
/******************************************************************************* Strings ****************************************************************************/









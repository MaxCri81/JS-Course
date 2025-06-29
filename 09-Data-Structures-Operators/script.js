'use strict';

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
/************************************************************************************ Challenge ************************************************************************/
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

/************************************************************************************ Challenge ************************************************************************/
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

/******************************************* The Spread operator ... Unpack - Use on the right hand side ***************************************************************/
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
/********************************************************************** Short Circuiting *******************************************************************************/
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
/**************************************************************** Logical Assignment Operators *************************************************************************/
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
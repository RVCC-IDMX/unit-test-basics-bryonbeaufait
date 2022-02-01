/* eslint-disable no-undef */
/* eslint-disable prefer-const */
/* eslint-disable radix */
/*

* @file: js-basic-04.test.js
* @title: Arithmetic in JavaScript & The Math Object & Type Conversion

? JavaScript programs work with numbers using the arithmetic operators that the language
? provides. These include + for addition, - for subtraction, * for multiplication (product),
? / for division, and % for modulo (remainder after division).
? ES2016 adds ** for exponentiation.

? In addition to these basic arithmetic operators, JavaScript supports more
? complex mathematical operations through a set of functions and constants
? defined as properties of the Math object.

? [3.2.3 Arithmetic in JavaScript]
? (https://learning.oreilly.com/library/view/javascript-the-definitive/9781491952016/ch03.html#idm46198571728472)

*/

/*

! SKILL 1 Do some simple arithmetic on variables of type number 🍎

? The following code uses the arithmetic operators to do some simple arithmetic on
? numbers.

TODO: This skill requires 3 lines of code.
TODO: Use the const keyword to declare a variable called a and assign any number value.
TODO: Use the const keyword to declare a variable called b and assign it a different number value.
TODO: Use the let keyword to declare a variable called c and assign it the sum of a and b.
*/

// * Add your code BELOW here

// * Don't mess with the test code below here!

test('arithmetic sum', () => {
  expect(() => {
    // prove a is a constant and not a variable
    // eslint-disable-next-line no-const-assign
    a = '🙉';
  }).toThrow();
  expect(() => {
    // prove b is a constant and not a variable
    // eslint-disable-next-line no-const-assign
    b = '🙈';
  }).toThrow();
  expect(typeof a).toBe('number');
  expect(typeof b).toBe('number');
  expect(typeof c).toBe('number');
  expect(c).toEqual(a + b);
});

/*

! SKILL 2 Create a random floating-point number using the Math object 🍎

? The Math object is a global object that contains methods for mathematical constants,
? functions, and methods for random number generation.

? Math.random() returns a random number between 0 (inclusive) and 1 (exclusive).


TODO: This skill requires 1 line of code.
TODO: Using the Math object, assign a random number to a variable called rnd.

*/

// * Add your code BELOW here

// * Don't mess with the test code below here!

test('rnd', () => {
  expect(typeof rnd).toBe('number');
  expect(rnd).toBeGreaterThanOrEqual(0);
  expect(rnd).toBeLessThanOrEqual(1);
});

/*

! SKILL 3 Create a random integer using the Math object 🍎


? REMEMBER: Math.random() returns a random floating-point number
? between 0 (inclusive) and 1 (exclusive).
? Math.floor() rounds a number down to the nearest integer.

? So, to create a random integer between 0 (inclusive) and 10 (exclusive),
? the expression is: Math.floor(Math.random() * 10)
? The result of that expression is an integer between 0 and 9.


TODO: This skill requires 1 line of code.
TODO: Using the Math object, assign a random integer to a variable called randomInt
TODO: such that randomInt is between 0 (inclusive) and 5 (exclusive).
TODO: Make sure to round down the value to the nearest integer.

*/
// * Don't mess with the test code below here!
jest.spyOn(global.Math, 'random').mockReturnValue(0.9);

// * Add your code BELOW here

// * Don't mess with the test code below here!

jest.spyOn(global.Math, 'random').mockRestore();
test('randomInt', () => {
  expect(typeof randomInt).toBe('number');
  expect(randomInt).toBeGreaterThanOrEqual(0);
  expect(randomInt).toBeLessThanOrEqual(5);
  expect([0, 1, 2, 3, 4]).toContain(randomInt);
  expect(randomInt).not.toBeGreaterThanOrEqual(5);
  expect(randomInt).not.toBeLessThan(0);
});

/*

! SKILL 4 Round down a floating-point number using the Math object 🍎

? The Math object has the methods: round, floor, and ceil.

TODO: This skill requires 2 lines of code.
TODO: In line 1: Using the keyword const, declare a constant called num
TODO: and assign it the value 17.89
TODO: In line 2: Using the correct objectMath object method,
TODO: round down num to the nearest integer and
TODO: assign the result to a variable called numRounded
*/

// * Add your code BELOW here

// * Don't mess with the test code below here!

test('numRounded', () => {
  expect(() => {
    // prove this is a constant and not a variable
    // eslint-disable-next-line no-const-assign
    num = '🙈';
  }).toThrow();
  expect(typeof num).toBe('number');
  expect(num).toBeCloseTo(17.89);
  expect(typeof numRounded).toBe('number');
  expect(numRounded).toBe(17);
});

/*

! SKILL 5 Round up or down based on the actual number 🍎

TODO: This skill requires 6 lines of code.
TODO: In line 1: Using the keyword let declare a variable called rounding1
TODO: and assign it the value 5.95
TODO: In line 2: Using the Math object, round rounding1 to the nearest integer
TODO: In line 3: Using the keyword let declare a variable called rounding2
TODO: and assign it the value 5.5
TODO: In line 4: Using the Math object, round rounding2 to the nearest integer
TODO: In line 5: Using the keyword let declare a variable called rounding3
TODO: and assign it the value 5.05
TODO: In line 6: Using the Math object, round rounding3 to the nearest integer
*/

// * Add your code BELOW here

// * Don't mess with the test code below here!

test('rounding', () => {
  expect(typeof rounding1).toBe('number');
  expect(rounding1).toBe(6);
  expect(typeof rounding2).toBe('number');
  expect(rounding2).toBe(6);
  expect(typeof rounding3).toBe('number');
  expect(rounding3).toBe(5);
})
/*

! SKILL 6 Type conversion string to number using parseInt() 🍎

? The parseInt() and parseFloat() functions are global functions and
? can be used to convert strings to numbers. The parseInt() function
? converts a string to an integer. The parseFloat() function converts
? a string to a floating-point number.

TODO: This skill requires 2 lines of code.
TODO: In line 1: Using the keyword let, declare a variable called orderBagels and
TODO: assign orderBagels to the string literal '13 is a Baker\'s Dozen'
TODO: (notice how I have escaped the apostrophe with with a backslash)
TODO: In line 2: Using the keyword const, declare a constant called bakersDozen and assign
TODO: it the value of parseInt() applied to orderBagels

? Notice how Prettier changes the string '13 is a Baker\'s Dozen' with an escaped character
? to a string with double quotes where the apostrophe does not have to be escaped.
*/

// * Add your code BELOW here

// * Don't mess with the test code below here!

test('bakersDozen', () => {
  expect(() => {
    // prove this is a constant and not a variable
    // eslint-disable-next-line no-const-assign
    bakersDozen = '🙈';
  }).toThrow();
  expect(typeof orderBagels).toBe('string');
  expect(orderBagels).toMatch(/^13 is a Baker's Dozen$/);
  expect(typeof bakersDozen).toBe('number');
  expect(bakersDozen).toBe(13);
});

/*

! SKILL 7 Type conversion number to string using .toFixed() 🍎

? The .toFixed() method converts a number to a string, but it also
? has an optional parameter that specifies the number of digits to
? the right of the decimal point.
? The .toFixed() method converts a number into a string,
? rounding to a specified number of decimals.

? To use the .toFixed() method, refer to this example from your textbook:
?    let n = 123456.789;
?    n.toFixed(0)         // => "123457"
?    n.toFixed(2)         // => "123456.79"  (two decimal places)


TODO: This skill requires 2 lines of code.
TODO: Using the keyword const, declare a constant called myPi
TODO: and assign it the value of 3.141592653589793
TODO: Using the keyword const, declare a constant called myPiFixed
TODO: and using the .toFixed method, assign myPiFixed to
TODO: the value of myPi converted to a string with four decimal places
*/

// * Add your code BELOW here

// * Don't mess with the test code below here!

test('myPiFixed', () => {
  expect(() => {
    // prove this is a constant and not a variable
    // eslint-disable-next-line no-const-assign
    myPi = '🙈';
  }).toThrow();
  expect(() => {
    // prove this is a constant and not a variable
    // eslint-disable-next-line no-const-assign
    myPiFixed = '🙊';
  }).toThrow();
  expect(typeof myPi).toBe('number');
  expect(myPi).toBeCloseTo(3.141592653589793);
  expect(typeof myPiFixed).toBe('string');
  expect(myPiFixed).toMatch(/^3.1416$/gm);
});

/*

! SKILL 8 Type conversion string to number using the unary + operator 🍎

? The unary + operator attempts to convert a string to a number.
? If the string cannot be converted to a number, the + operator returns
? NaN.

TODO: This skill requires 1 line of code.
TODO: Using the keyword let, declare a variable called sliceOfPi and
TODO: assign sliceOfPi to the value of myPiFixed converted to a number
TODO: using the unary + operator
*/

// * Add your code BELOW here

// * Don't mess with the test code below here!

test('sliceOfPi', () => {
  expect(() => {
    // prove this is a constant and not a variable
    // eslint-disable-next-line no-const-assign
    myPiFixed = '🙊';
  }).toThrow();
  expect(typeof sliceOfPi).toBe('number');
  expect(sliceOfPi).toBeCloseTo(3.1416);
});

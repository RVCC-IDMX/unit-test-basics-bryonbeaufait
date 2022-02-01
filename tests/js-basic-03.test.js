/* eslint-disable no-undef-init */
/* eslint-disable prefer-const */
/* eslint-disable no-undef */
/*

* @file: js-basic-03.test.js
* @title: Boolean, Truthy, Falsy, Undefined, Null

? A boolean value represents truth or falsehood, on or off, yes or no. There are
? only two possible values of this type. The reserved words true and false
? evaluate to these two values.
?
? [3.4 Boolean Values]
? (https://learning.oreilly.com/library/view/javascript-the-definitive/9781491952016/ch03.html#booleans)

*/

/*

! SKILL 1 Understanding boolean values 🍎

? JavaScript has the reserved words true and false.
? The reserved words true and false evaluate to the boolean value true and false,
? respectively.

TODO: This skill requires 1 line of code.
TODO: Use the let keyword to declare a variable called isJanuary and assign it
TODO: to the boolean value true.
*/

// * Add your code BELOW here

// * Don't mess with the test code below here!

test('isJanuary', () => {
  expect(isJanuary).toBe(true);
  expect(typeof isJanuary).toBe('boolean');
  expect(isJanuary).toBeTruthy();
});

/*

! SKILL 2 Understanding falsy 🍎

? In JavaScript,all values are either truthy or falsy.
? The following types all evaluate to false: undefined, null, 0, -0, NaN, and
? the empty string.
? These are sometimes called falsy values, and all other values are called truthy.

? Note: The reserved word false is falsy.

?Note: The numbers 0 and -0 are the only falsy numbers. All other numbers are truthy.
? Forgetting this can be a source of error if you try to use a number as a condition.

TODO: This skill requires 1 line of code.
TODO: Use the let keyword to create a variable called isFalsy and assign it to
TODO: any of the above 6 falsy types you wish (undefined, null, 0, -0, NaN, and the empty string).
TODO: Do not use the reserved word false.
*/

// * Add your code BELOW here

// * Don't mess with the test code below here!

test('isFalsy', () => {
  expect(isFalsy).toBeFalsy();
  expect(typeof isFalsy).not.toBe('boolean');
});

/*

! SKILL 3 Understanding truthy 🍎

? Anything that is not a falsy is a truthy
? That means that everything except undefined, null, 0, -0, NaN, and the empty
? string is a truthy value.

? Note: The reserved word true is a truthy value.

TODO: This skill requires 1 line of code.
TODO: Use the let keyword to create a variable called isTruthy and assign it to
TODO: anything you wish that is truthy.
TODO: Do not use the reserved word true.
*/

// * Add your code BELOW here

// * Don't mess with the test code below here!

test('isTruthy', () => {
  expect(isTruthy).toBeTruthy();
  expect(typeof isTruthy).not.toBe('boolean');
});

/*

! SKILL 4 Understanding undefined 🍎

? A declared variable is undefined if it has not been assigned a value.
? The reserved word undefined is the only value of type undefined.
? The reserved word undefined is falsy.
? The type of undefined is undefined.

TODO: This skill requires 1 line of code.
TODO: Use the let keyword to declare a variable called notAssigned and leave it
TODO: unassigned.
*/

// * Add your code BELOW here

// * Don't mess with the test code below here!

test('notAssigned', () => {
  expect(notAssigned).toBeUndefined();
  expect(notAssigned).toBeFalsy();
  expect(typeof notAssigned).toBe('undefined');
});

/*

! SKILL 5 Understanding null 🍎

? A declared variable can be assigned to null, which is a special value that
? represents no value.
? The reserved word null is the only value of type null.
? The reserved word null is Falsy.
? The typeof null is object.

TODO: This skill requires 1 line of code.
TODO: Use the let keyword to declare a variable called bloop and assign it to
TODO: null.
*/

// * Add your code BELOW here

// * Don't mess with the test code below here!

test('bloop', () => {
  expect(bloop).toBeNull();
  expect(bloop).toBeFalsy();
  expect(typeof bloop).toBe('object');
});

/*

! SKILL 6 Understanding the ! operator 🍎

? The ! (logical not) operator is used to invert a boolean value.
? The ! operator is also called the bang operator.

TODO: This skill requires 1 line of code.
TODO: Use the let keyword to declare a variable called notJanuary and assign it to
TODO: the boolean value of !isJanuary.
*/

// * Add your code BELOW here

// * Don't mess with the test code below here!

test('notJanuary', () => {
  expect(notJanuary).toBeFalsy();
  expect(typeof notJanuary).toBe('boolean');
});

/*

? NOTE: You can apply the ! operator to any value and you can do it twice in a row.
? Using !! converts truthy values to boolean true, and falsy values too boolean false.
? When you see !!, think "Bang bang! you're boolean!"


TODO: This skill requires 2 lines of code.
TODO: Create a variable called user and assign it to an empty string.
TODO: Use the let keyword to declare a variable called isLoggedIn and assign it to
TODO: the boolean value of !!user.
*/

// * Add your code BELOW here

// * Don't mess with the test code below here!

test('isLoggedIn', () => {
  expect(isLoggedIn).toBe(false);
  expect(typeof isLoggedIn).toBe('boolean');
});
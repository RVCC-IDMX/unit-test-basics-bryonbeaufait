/* eslint-disable no-undef */
/* eslint-disable prefer-template */
/* eslint-disable operator-assignment */
/* eslint-disable prefer-const */

/*

* @file: js-basic-01.test.js
* @title: Variable Declarations and Assignments

? Binding a name to a value gives us a way to refer to that value and use it in
? the programs we write. When we do this, we typically say that we are assigning a
? value to a variable. The term “variable” implies that new values can be
? assigned: that the value associated with the variable may vary as our program
? runs. If we permanently assign a value to a name, then we call that name a
? constant instead of a variable.

? Before you can use a variable or constant in a JavaScript program, you must
? declare it. In ES6 and later, this is done with the let and const keywords,
? which we explain next. Prior to ES6, variables were declared with var, which is
? more idiosyncratic and is explained later on in this section.

? When a declaration appears at the top level, outside of any code blocks,
? we say it is a global variable or constant and has global scope.
? In Node, the scope of a global variable is the file that it is defined in.
?
? [3.10 Variable Declaration and Assignment]
? (https://learning.oreilly.com/library/view/javascript-the-definitive/9781491952016/ch03.html#variabledeclaration
? )

? All of the variables and constants in this file are global variables.
? This is why we can access them anywhere after they are declared.
? We'll use this behavior to reuse some variables and constants multiple times
? in this file when creating our skill tests.
*/

/*

! SKILL 1 Declare a variable 🍎

? If you don’t specify an initial value for a variable with the let keyword, the
? variable is declared, but its value is undefined until your code assigns a value
? to it.

TODO: This skill requires 1 line of code.
TODO: Use the let keyword to declare a variable called myName and make sure you
TODO: DO NOT assign it a value.
*/
// * Add your code BELOW here

// * Don't mess with the test code below here!

test('myName', () => {
  expect(myName).toBeUndefined();
  expect(typeof myName).toBe('undefined');
});

/*

! SKILL 2 Assign a value to a variable 🍎

? Variables and constants declared with let and const are block scoped. This
? means that they are only defined within the block of code in which the let or
? const statement appears. This means that they are not available outside the
? block of code in which they are defined.

TODO: This skill requires 1 line of code.
TODO: Use the let keyword to create a variable called age and assign it the
TODO: number literal value of integer 22.
*/

// * Add your code BELOW here

// * Don't mess with the test code below here!

test('age', () => {
  expect(age).toBe(22);
  expect(typeof age).toBe('number');
});

/*

! SKILL 3 Declare and assign a constant 🍎

? Constants are declared with the const keyword and must be assigned a value
? when declared, otherwise an error will be thrown. Constants are immutable, which
? means that once a value is assigned to a constant, it cannot be changed.

TODO: This skill requires 1 line of code.
TODO: Use the const keyword to create a constant called daysInWeek and assign it
TODO: the number literal value 7.
*/

// * Add your code BELOW here

// * Don't mess with the test code below here!

test('daysInWeek', () => {
  expect(() => {
    // prove this has an immutable value
    // by throwing an error if we try to reassign it
    // eslint-disable-next-line no-const-assign
    daysInWeek = '🙉';
  }).toThrow();
  expect(typeof daysInWeek).toBe('number');
  expect(daysInWeek).toBe(7);
});

/*

! SKILL 4 Understanding the difference between let and const 🍎

? The let keyword is used to declare a variable that is block scoped. This means
? that the variable is only available within the block of code in which it is defined.
? The const keyword is used to declare a variable that is also block scoped and immutable.
? This means a constant, once assigned, cannot be reassigned.

? The var keyword is used to declare a variable that is function scoped. This means
? that the variable is available within the function in which it is defined. With the
? introduction of let and const, the var keyword is no longer needed and should not
? be used.

TODO: This skill requires 2 lines of code.
TODO: In the first line and using let, declare a variable called myWorkDays.
TODO: In the second line, assign myWorkDays to the value of the constant daysInWeek

TODO: DO NOT use the number literal 7.

TODO: HINT: You can use the assignment operator (=) to assign a value
TODO: of one variable to a different variable.
*/

// * Add your code BELOW here

// * Don't mess with the test code below here!

test('myWorkDays', () => {
  expect(typeof myWorkDays).toBe('number');
  expect(myWorkDays).toBe(daysInWeek);
  expect(myWorkDays).toBe(7);
});

/*

! SKILL 5 Understanding uninitialized variables & NaN 🍎

? When JavaScript variables are declared, they are automatically initialized to
? undefined. This means that when you declare a variable, you are not assigning a
? value to it.
? If you try to use a undefined variable in a mathematical expression,
? it will not throw an error, but it will generate a NaN (Not a Number).
? The NaN value is a special value that is returned when a mathematical
? expression cannot be evaluated.

? Its type is 'number' but it does not compare equal to any other value, including itself.

TODO: This skill requires 3 lines of code.
TODO: In the first line, declare a variable called oops, leave it undefined.
TODO: In the second line, create a variable called sillyMath, leave it undefined.
TODO: In the third line, assign sillyMath to the product of oops times 2
TODO: (using the * operator for multiplication).
*/

// * Add your code BELOW here

// * Don't mess with the test code below here!

test('sillyMath', () => {
  expect(oops).toBeUndefined();
  expect(typeof sillyMath).toBe('number');
  expect(sillyMath).toBeNaN();
});

/*

! SKILL 6 Understanding uninitialized variables & concatenation 🍎

? When JavaScript variables are declared, they are automatically initialized to
? undefined. This means that when you declare a variable, you are not assigning a
? value to it.
? If you try to use a undefined variable and concatenate it
? to a string, it does not generate an error.
? It will concatenate the string literal 'undefined'.

TODO: This skill requires 2 lines of code.
TODO: You already have an undefined variable called oops; leave it undefined.
TODO: In the first line, create a variable called sillyString and leave it undefined.
TODO: In the second line, assign sillyString to 'Hello, ' and concatenate oops to the end.
*/

// * Add your code BELOW here

// * Don't mess with the test code below here!

test('sillyString', () => {
  expect(oops).toBeUndefined();
  expect(typeof sillyString).toBe('string');
  expect(sillyString).toBe('Hello, undefined');
});

/*

! Practice 🍎🍎🍎

TODO: In the following lines of code, create the required variable using a let or const
TODO: keyword and assign it a value.

*/

// a variable (let) named year and set it to 2022
// * Add your code BELOW here

// * Don't mess with the test code below here!
test('year', () => {
  expect(year).toBe(2022);
  expect(typeof year).toBe('number');
});

// a variable called firstName and set it to 'John'

// * Add your code BELOW here

// * Don't mess with the test code below here!'
test('firstName', () => {
  expect(firstName).toBe('John');
  expect(typeof firstName).toBe('string');
});

// a constant called taxRate and set it to 0.2

// * Add your code BELOW here

// * Don't mess with the test code below here!
test('taxRate', () => {
  expect(taxRate).toBe(0.2);
  expect(typeof taxRate).toBe('number');
});
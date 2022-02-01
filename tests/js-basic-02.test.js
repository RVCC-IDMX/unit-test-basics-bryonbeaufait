/* eslint-disable prefer-template */
/* eslint-disable prefer-const */
/* eslint-disable no-undef */
/*

* @file: js-basic-02.test.js
* @title: Strings - Literal, Length, Concatenation, Template Literal

? The JavaScript type for representing text is the string. A string is an
? immutable ordered sequence of 16-bit values, each of which typically represents
? a Unicode character. The length of a string is the number of 16-bit values it
? contains. JavaScript’s strings (and its arrays) use zero-based indexing: the
? first 16-bit value is at position 0, the second at position 1, and so on. The
? empty string is the string of length 0. JavaScript does not have a special type
? that represents a single element of a string. To represent a single 16-bit
? value, simply use a string that has a length of 1.
?
? [3.3 Text]
? (https://learning.oreilly.com/library/view/javascript-the-definitive/9781491952016/ch03.html#text)

*/

/*

! SKILL 1 Declare a string literal 🍎

? To include a string in a JavaScript program, simply enclose the characters of
? the string within a matched pair of single or double quotes or backticks (' or "
? or `). Double-quote characters and backticks may be contained within strings
? delimited by single-quote characters, and similarly for strings delimited by
? double quotes and backticks.

? ❕❕ BIG NOTE: In this class, we will default to using single-quotes when not using
? backticks for template literals.

TODO: This skill requires 1 line of code.
TODO: Use the let keyword to create a variable called myClass and assign it to
TODO: the string literal 'JavaScript is Awesome!'.
*/

// * Add your code BELOW here

// * Don't mess with the test code below here!

test('myClass', () => {
  expect(typeof myClass).toBe('string');
  expect(myClass).toMatch(/^JavaScript is Awesome!$/gm);
});

/*

! SKILL 2 Assign an empty string literal to a variable 🍎

? The empty string is the string of length 0.

TODO: This skill requires 1 line of code.
TODO: Use the let keyword to create a variable called emptyString and assign it
TODO: to an empty string.
TODO: Remember to use single-quotes for the empty string.
*/

// * Add your code BELOW here

// * Don't mess with the test code below here!

test('emptyString', () => {
  expect(typeof emptyString).toBe('string');
  expect(emptyString).toHaveLength(0);
});

/*

/*

! SKILL 3 Understanding the length of a string 🍎

? The length of a string is the number of 16-bit characters it contains.

TODO: This skill requires 1 line of code.
TODO: Use the let keyword to create a variable called petName and assign it to any
TODO: string with exactly 6 alphanumeric characters in it.

? What is alphanumeric? The letters a-z and A-Z, and the numerals 0-9.
*/

// * Add your code BELOW here

// * Don't mess with the test code below here!

test('petName', () => {
  expect(typeof petName).toBe('string');
  expect(petName).toMatch(/^[a-zA-Z0-9]{6}$/);
});

/*
! SKILL 4 Understanding zero-based indexing 🍎

? JavaScript strings use zero-based indexing: the first 16-bit value is at
? position 0, the second at position 1, and so on.

TODO: This skill requires 1 line of code.
TODO: Use the const keyword to create a constant called firstLetterIsA and
TODO: assign it any word that starts with a capital A.

? The below test will fail if the first letter (at index 0) is not the letter A.
*/

// * Add your code BELOW here

// * Don't mess with the test code below here!

test('firstLetterIsA', () => {
  expect(typeof firstLetterIsA).toBe('string');
  expect(firstLetterIsA[0]).toBe('A');
});

/*

! SKILL 5 Understanding escape sequences 🍎

? The backslash character (\) has a special purpose in JavaScript strings.
? Combined with the character that follows it, it represents a character that is
? not otherwise representable within the string.

? Look here for more information on escape sequences:
? https://learning.oreilly.com/library/view/javascript-the-definitive/9781491952016/ch03.html#escapesequences

TODO: This skill requires 1 line of code.
TODO: Use the let keyword to create a variable called counting and assign it to
TODO: this 7-character string literal 'one two' WHERE the character between words one
TODO: and two is not a space but an escaped horizontal tab character.
*/

// * Add your code BELOW here

// * Don't mess with the test code below here!

test('counting', () => {
  expect(typeof counting).toBe('string');
  expect(counting).toHaveLength(7);
  expect(counting).toMatch(/^one\ttwo$/gm);
});

/*

! SKILL 6 Understanding the concatenation operator for strings 🍎

? One of the built-in features of JavaScript is the ability to concatenate
? strings. If you use the + operator with numbers, it adds them. But if you use
? this operator on strings, it joins them by appending the second to the first.

TODO: This skill requires 1 line of code.
TODO: Use the let keyword to create a variable called mySentence and assign it
TODO: to the string literal 'Hello, ' concatenated with the already declared and
TODO: assigned variable petName (from Skill 3).
*/

// * Add your code BELOW here

// * Don't mess with the test code below here!

test('mySentence', () => {
  expect(typeof mySentence).toBe('string');
  expect(mySentence).toHaveLength(13);
  expect(mySentence).toMatch(/^Hello, \w+$/gm);
});

/*

! SKILL 7 Understanding the template literal 🍎

? In ES6 and later, string literals can be delimited with backticks (the key to
? the left of the 1 key on your keyboard). These template literals can include
? arbitrary JavaScript expressions. Everything between the ${ and the matching }
? is interpreted as a JavaScript expression.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

TODO: This skill requires 1 line of code.
TODO: Use the let keyword to create a variable called helloPet and assign it to the
TODO: template literal that starts with the string 'Hello, ' and ends with the value
TODO: of the already declared assigned petName (from Skill 3) by using the ${} syntax
TODO: for a JavaScript expression inside a template literal.
*/

// * Add your code BELOW here

// * Don't mess with the test code below here!

test('helloPet', () => {
  expect(typeof helloPet).toBe('string');
  expect(helloPet).toHaveLength(13);
  expect(helloPet).toMatch(/^Hello, \w+$/gm);
});

/*

! SKILL 8 Understanding string immutability - part 1 🍎

? Primitive values like numbers and strings are immutable.
? When you reassign a variable to a new primitive value, the
? original primitive value is not changed.
? It is just not available in the code using that variable name.

TODO: This skill requires 2 lines of code.
TODO: In line 1: Use the let keyword to create a variable called myState and
TODO: assign it to the string literal 'California'.
TODO: In line 2: Assign the first letter to 'K" using the code: myState[0] = 'K';

? the below test for myState matching 'Kalifornia" will fail because the string
? is immutable and didn't change.
*/

// * Add your code BELOW here

// * Don't mess with the test code below here!

test('myState', () => {
  expect(typeof myState).toBe('string');
  expect(myState).toHaveLength(10);
  expect(myState).not.toMatch(/^Kalifornia$/gm);
  expect(myState).toBe('California');
});

/*

! SKILL 9 Understanding string immutability - part 2 🍎


? In JavaScript, strings are immutable. This means that once a string is
? created, it cannot be changed.
? If you use let, you can reassign the value of the variable, but if you use const,
? you cannot change the value of the string assigned to the constant.

TODO: This skill requires 2 lines of code.
TODO: In line 1: Use the let keyword to create a variable called thisMonth and assign it to
TODO: the string literal 'I dunno!'.
TODO: In line 2: Reassign thisMonth to the string literal 'September'.

? The below test for thisMonth matching 'I dunno!' will fail because the
? variable has been reassigned to a different string.
*/

// * Add your code BELOW here

// * Don't mess with the test code below here!

test('thisMonth', () => {
  expect(typeof thisMonth).toBe('string');
  expect(thisMonth).toHaveLength(9);
  expect(thisMonth).not.toMatch(/^I dunno!$/gm);
  expect(thisMonth).toBe('September');
});

/*

! Practice 🍎🍎🍎

Template literals are a very important part of modern JavaScript
and are used to create strings.

When writing code for a string, you should always ask yourself,
can I use the ${} syntax to insert a JavaScript expression?

https://blog.webdevsimplified.com/2020-03/tagged-template-literals/

TODO: In the below area, you will practice making template literals

*/

// TODO: add a variable named year and set it to 2001
// TODO: add a variable called firstName and set it to John
// TODO: add a variable called lastName and set it to Smith
// TODO: create a variable called message and set it to the template literal
// TODO: such that you get the string - 'Hi, my name is John Smith and I was born in 2001'
// TODO: You must use the template literal syntax

// * Add your code BELOW here

// * Don't mess with the test code below here!

test('creating a message', () => {
  expect(typeof message).toBe('string');
  expect(message).toMatch(/^Hi, my name is John Smith and I was born in 2001$/gm);
});

// TODO: add a variable called tax and set it to 8.25
// TODO: add a variable called price and set it to 100
// TODO: create a variable called total and set it to the template literal
// TODO: such that you get the string - 'Your total including tax is $108.25'
// TODO: You must use the template literal syntax

// NOTE: Inside the ${} syntax you can do the math you need to do
// to get the total price including tax. It will look like this:
// ${price + tax}

// * Add your code BELOW here

// * Don't mess with the test code below here!

test('creating a total', () => {
  expect(typeof total).toBe('string');
  expect(total).toMatch(/^Your total including tax is \$108.25$/gm);
});

// TODO: add a variable called heading1 and set it the the string 'JavaScript'
// TODO: add a variable called heading2 and set it the the string 'HTML'
// TODO: create a variable called html and set to the template literal
// TODO: such that you get the string - '<h1>JavaScript</h1><h2>HTML</h2><p>This is a paragraph</p>'

// * Add your code BELOW here

// * Don't mess with the test code below here!

test('html', () => {
  expect(typeof html).toBe('string');
  expect(html).toMatch(/^<h1>JavaScript<\/h1><h2>HTML<\/h2><p>This is a paragraph<\/p>$/gm);
})
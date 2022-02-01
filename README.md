# JS Unit Testing with Jest

This project is written in [Node](https://nodejs.org/en/), and tested with [Jest - the delightful JavaScript Testing Framework](https://jestjs.io/).

---

## The assignment

When npm runs jest, all the tests are failing as seen at the end of its output to the console.

<img width="244" alt="all-tests-fail" src="https://user-images.githubusercontent.com/13385801/132997415-a6f54977-b168-45ad-8c89-23b1cdceecec.png">

Since we have 4 files, jest sees 4 test suites. Within these 4 suites, we have a total of 27 coding skill assignments, each with a test. The comments in the files will explain what each coding skill assignment must accomplish.

Fixing the code will make the tests pass and show in green in the console. Here is the jest output when all the tests pass.

<img width="343" alt="all-tests-pass" src="https://user-images.githubusercontent.com/13385801/132997600-7ff5f3a3-d606-4b89-8843-8ef0a3cd8c54.png">

# Instructions

## Install your dependencies

`npm install`

---

## Run tests on a single file

`npm test -- js-basic-01.test.js`

**NOTE:** The -- tells npm to pass along whatever following arguments there are to the program it is running.

The above npm command is equivalent to:

`npx jest js-basic-01.test.js`

or inside the package.json it would be the same as:

`"test": "jest js-basic-01.test.js"`

Since we have four files that need individual editing, we want to run individual testing as well.

**NOTE:** Don't forget to save the files before you try running the test or Jest won't be able to see the changes.

---

By default, jest looks for files that end in .test.js and will search folders to find those files. Your JavaScript files are in a folder call tests.

So the above example tests the first file `tests/js-basic-01.test.js` and outputs the results to the console.

If a test fails, jest will identify it as failing and print one or more error messages, depending on the test expectations.

---

## Edit and test each file sequentially

One-by-one, edit each JavaScript file and follow the instructions for each coding skill. You should run the test after each completed skill and see the pass count increase. When one file passes completely, you are ready for the next file.

Start with js-basic-01.test.js and finish with js-basic-04.test

---

## Git is configured not to allow a commit if it sees any errors

Eslint needs to be properly running in this repo as it is configured to not allow you to commit with coding errors.

Be careful of any squigglies and get them properly fixed (do not add any eslint disable comments)

---

## Continue writing and fixing code until all tests pass

When you feel the coding skills are completed, the following command will test all files in the repo that end in test.js

`npm test`

---

## Commit and push after all tests pass

---

> "Unit testing ensures that all code meets quality standards before it's deployed."
> [The importance of unit testing](https://fortegrp.com/the-importance-of-unit-testing/)

[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)
[![jest](https://jestjs.io/img/jest-badge.svg)](https://github.com/facebook/jest)

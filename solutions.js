"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */
function isTrue(input){
	return input === true;
}

function isFalse(value){
	return value === false;
}

//Define a function named not that takes in any input and returns the boolean opposite of the provided input.
function not(input){
	return input !== true;
}

function addOne(input){
	return Number(input) +1;
}

function isEven(input){
	if(input % 2 === 0){
		return true;
	} else {
		return false;
	}
}

function isIdentical(inputOne, inputTwo){
	if(inputOne === inputTwo){
		return true;
	} else {
		return false;
	}
}
function isEqual(input1, input2){
	if(input1 == input2){
		return true;
	} else {
		return false;
	}
}

// Define a function named or that takes in two input arguments. The output returned should be the result of an or operation on both inputs.
function or(inputA, inputB){
	if(inputA === true || inputB === true){
		return true;
	} else {
		return false;
	}
}

// Define a function named and that takes in two input arguments and returns the result of a logical and operation of both inputs.
function and(inputOne, inputTwo){
	if(inputOne == true && inputTwo == true){
		return true;
	} else {
		return false;
	}
}

// Define a function named concat that takes in two input arguments. If both arguments are strings, then return the concatenated result. If two numbers are provided, then return the string concatenation of each set of numerals.
function concat(inputCon, inputCat){
	let x = inputCon.toString()
	let y = inputCat.toString()
	console.log(typeof x)
	if(x !== "" && y !== ""){
		return x + y;
	}
}
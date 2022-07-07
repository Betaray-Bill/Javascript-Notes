// Variables

//  let keyword is used to declare variables , we can change the value of the variable in future
let user = 'John';
let age = 25;
let message = 'Hello';
console.log(user)


// Const keyword is used to declare variables , we cannot change the value of the variable in future
const myBirthday = '18.04.1982';

// myBirthday = '01.01.2001';  here we tried to change the value of the const , this will lead to error
console.log(myBirthday)

// -------------------------------------------------------------------------
// -------------------------------------------------------------------------
// -------------------------------------------------------------------------


// DataTypes
// 8 different datatypes

// 1.)NUMBERS : integers, float
let a = 10,
    b = 30;
console.log(a + b)

console.log(1 / 0); // This above prints infinity which represents the numerical value of infinity
console.log("number" / 2); // This line pop ups output as Nan - computational error, undefined maths operation as we cannot involve a string and a number in calc
// Any further calc with Nan results in output as Nan

// 2.)BIGINT : value greater than (2^53) - 1 or less than -(2^53)-1

// 3.) STRING : must be surrounded by quotes("", '', ``)

let str = "Hello",
    name = "MEow";
let line = "Hello world";
let line_concat = `Hello ${name}`; //we can use ${} inside `` when we have to call a another variables value in a string
console.log(line, line_concat);

// 4.) BOOLEAN : True or False
let isGreater = 4 > 1;

console.log(isGreater);

// 5.) NULL - represents nothing , empty, value unknown

// 6.) UNDEFINED - represents “value is not assigned”, If a variable is declared, but not assigned, then its value is undefined
let m;
console.log(m)

// 7.) Object and Symbols


// 8.) typeof operator- The typeof operator returns the type of the argument. It’s useful when we want to process values of different types differently or just want to do a quick check.
typeof 175
typeof true




// -------------------------------------------------------------------------
// -------------------------------------------------------------------------
// -------------------------------------------------------------------------


// INTERACTION in JS - alert, prompt, confirm
let ages = prompt('How old are you?', 100);
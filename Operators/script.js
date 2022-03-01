// Operators 
// Arithmetic operators: + - * /
// Comparison operators: Assignment = | Equality == | Strict Equality === | Greater > | Less < | Greater or equal to >= | Less or equal to <= | Not equal to !=
// Logical operators: AND operator && | OR operator ||
// Increment and Decrement operators: Increment a++ | Decrement a--
// Prefix and Postfix: Preincrement ++a | Postincrement a++ | Predecrement --a | Postdecrement a--


// Postfix example

var a = 86;
document.write(a++); // it will show 86, but not 87 because the value has been post-increased.
document.write("<br>") // line break

document.write(a); // so now it will show 87, because it has been increased in the previous step.
document.write("<br>") // line break

// Prefix example

var b = 86;
--b; // 86 - 1 = 85 (if we display now, it will show 85) 
document.write(b);
document.write("<br>") // line break 

// Same concept will work for predecrement and postdecrement.

// if (a > b) {
// alert(cc)
// } else {
//     alert("aa is not greater than b");
// }

// Same thing in short form.

var aa = 5;
var bb = 6;
var cc = (aa > bb) ? alert("true") : alert("false");
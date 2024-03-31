'use strict';


let multiline = `this
string
has
linebreaks`;

let multiline2 = 'this\n string\n has\n linebreaks\n';
console.log('Newly Working!');
console.log(multiline);

let sym1 = Symbol('x');
let sym2 = Symbol('y');
console.log(sym1 === sym2);

//Creating Arrays
let array = [5, 'something', true];
let array2 = new Array();

console.log(array);
array[1];

//Object 
let nameObj = {
    num : 4,
    string : 'Blessings'
};

nameObj.num;
console.log(nameObj.string);

//Operators
let test = {
    x: 'x'
};
delete test.x;
console.log(test.x);
//New Code

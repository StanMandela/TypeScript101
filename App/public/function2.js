"use strict";
// thiis is a fuction signature with arrow function
let hello;
hello = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
hello('John', 'Hello');
let calculator;
calculator = (num1, num2, action) => {
    if (action === 'add') {
        return num1 + num2;
    }
    else {
        return num1 - num2;
    }
};
console.log(calculator(556, 155, 'add'));

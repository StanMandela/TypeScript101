"use strict";
let greetings;
greetings = () => {
    console.log('Hddello Again');
};
//greetings()
//passing parameters to a function 
const add = (a, b, c = 10) => {
    console.log(a + b);
    console.log(c);
};
add(5, 10);
//infer the return type of a function
const minus = (a, b) => {
    return a + b;
};
let result = minus(1210, 5);
console.log(result);
//explicitly define the return type of a function
const multiply = (a, b) => {
    return a * b;
};
let result2 = multiply(5, 10);
console.log(result2);
const greet = (user) => {
    console.log(`${user.name}  of age ${user.age} says hello`);
};
greet({ name: 'mario', age: 30 });
//creating a function signature
let greets;
let greetsFunc;
greetsFunc = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
let calc;
calc = (numOne, numTwo, action) => {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
calc(5, 110, 'add');
console.log(calc(5, 110, 'add'));
//create a function that has type of function signature
let logDetails;
logDetails = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
};
//create an object
let person = { name: 'mario', age: 30 };
logDetails(person);

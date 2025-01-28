"use strict";
/*
Types in Typescript */
let character = "mario";
// let age= 25;
character = "Stanley";
var circ = (diameter) => {
    return diameter * Math.PI;
};
//console.log("circle", circ(14))
/*
Arrays
NB-> If you declare an array that
 contains one type of data in i, it can only store that inffered type
 2. You can not as well change the type of the variable to another type.*/
//Strings
let names = ["stanley", "Mario"];
//names.push(2);
//  console.log(names)
//Numbers
let numbers = [10, 11, 12, 3, 4];
//numbers.push('Stan')
//  console.log(numbers)
//Mixed Array
let mixedArray = ['Ken', 8, 10, true];
mixedArray.push();
//console.log('Mixed', mixedArray)
/*
 //OBJECTS
  Note that the type of a variables declared in the object cant be changed
  later on.
 */
let ninja = {
    name: 'Mario',
    belt: 'black',
    age: 30
};
//  ninja.skills=[1,3,4]
//  ninja.age=true
ninja = Object.assign({}, ninja);
//  console.log('NewArray' ,ninja)
/*
EXPLICT TYPES
 */
let charact;
let age;
let isLoggedIn;
// decalring an array of  type strings 
let ninjas;
// ninjas.push('Tuday')  // This will not work since its not initialized yet
ninjas = ['Monday'];
//Lets declare an array of strings and assign an empty array.
let ninjas3 = [];
ninjas3.push('January');
/* UNION TYPES TO STORE MIXED ARRAYS */
let personObject = []; //use parenthesis for arrays
personObject.push('Hello');
personObject.push(20);
/* DELCARE A MISED VARIBALE
 */
let uid;
uid = '12334';
uid = 1232324;
/*
DECLARING VARIABLES AS AN OBJECT
 */
let ninjaOb;
ninjaOb = {
    name: 'Yoshi',
    age: 30
};
// deaclring an object
let ninjaOb2;
// initializing the object
ninjaOb2 = {
    name: 'Mario',
    age: 28,
    beltCOlor: 'blasl',
};
//console.log('Obdject',ninjaOb2)
/* ANY KEY WORD */
let age1 = 25;
let nina;

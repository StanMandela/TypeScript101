/*
Types in Typescript */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var character = "mario";
// let age= 25;
character = "Stanley";
var circ = function (diameter) {
    return diameter * Math.PI;
};
console.log("circle", circ(14));
/*
Arrays
NB-> If you declare an array that
 contains one type of data in i, it can only store that inffered type
 2. You can not as well change the type of the variable to another type.*/
//Strings
var names = ["stanley", "Mario"];
//names.push(2);
//  console.log(names)
//Numbers
var numbers = [10, 11, 12, 3, 4];
//numbers.push('Stan')
//  console.log(numbers)
//Mixed Array
var mixedArray = ['Ken', 8, 10, true];
mixedArray.push();
console.log('Mixed', mixedArray);
/*
 //OBJECTS
  Note that the type of a variables declared in the object cant be changed
  later on.
 */
var ninja = {
    name: 'Mario',
    belt: 'black',
    age: 30
};
//  ninja.skills=[1,3,4]
//  ninja.age=true
ninja = __assign({}, ninja);
//  console.log('NewArray' ,ninja)
/*
EXPLICT TYPES
 */
var charact;
var age;
var isLoggedIn;
// decalring an array of  type strings 
var ninjas;
// ninjas.push('Tuday')  // This will not work since its not initialized yet
ninjas = ['Monday'];
//Lets declare an array of strings and assign an empty array.
var ninjas3 = [];
ninjas3.push('January');
/* UNION TYPES TO STORE MIXED ARRAYS */
var personObject = []; //use parenthesis for arrays
personObject.push('Hello');
personObject.push(20);
/* DELCARE A MISED VARIBALE
 */
var uid;
uid = '12334';
uid = 1232324;
/*
DECLARING VARIABLES AS AN OBJECT
 */
var ninjaOb;
ninjaOb = {
    name: 'Yoshi',
    age: 30
};
// deaclring an object
var ninjaOb2;
// initializing the object
ninjaOb2 = {
    name: 'Mario',
    age: 28,
    beltCOlor: 'blasl',
};
console.log('Obdject', ninjaOb2);
/* ANY KEY WORD */
var age1 = 25;
var nina;

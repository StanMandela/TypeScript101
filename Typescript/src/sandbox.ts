/* 
Types in Typescript */

let character ="mario";
// let age= 25;

 character="Stanley";

 var circ=(diameter: number)=>{

    return diameter* Math.PI
 }
 //console.log("circle", circ(14))

/*
Arrays
NB-> If you declare an array that
 contains one type of data in i, it can only store that inffered type 
 2. You can not as well change the type of the variable to another type.*/


 //Strings
 let names=["stanley","Mario"];
 //names.push(2);

//  console.log(names)

 //Numbers
 let numbers =[10,11,12,3,4];
 //numbers.push('Stan')

//  console.log(numbers)


 //Mixed Array
 let mixedArray=['Ken',8,10,true]
 mixedArray.push()
 //console.log('Mixed', mixedArray)


/* 
 //OBJECTS
  Note that the type of a variables declared in the object cant be changed 
  later on.
 */
 let ninja={
    name:'Mario',
    belt:'black',
    age:30
 }

//  ninja.skills=[1,3,4]
//  ninja.age=true

 ninja={
    //use the spread operator to kind of define a new array
    ...ninja,
    //skills:'SAP'

 }
//  console.log('NewArray' ,ninja)

/* 
EXPLICT TYPES
 */
let charact: string;
let age:number;
let isLoggedIn:boolean;

// decalring an array of  type strings 
let ninjas:string[]; 

// ninjas.push('Tuday')  // This will not work since its not initialized yet
ninjas=['Monday']

//Lets declare an array of strings and assign an empty array.

let ninjas3 :string[]=[];
ninjas3.push('January')


 /* UNION TYPES TO STORE MIXED ARRAYS */
 let personObject:(string|number)[]=[]; //use parenthesis for arrays
 personObject.push('Hello');
 personObject.push(20);



 /* DELCARE A MISED VARIBALE
  */
 let uid: string|number;
 uid='12334';
 uid=1232324;
 


/*
DECLARING VARIABLES AS AN OBJECT 
 */
let ninjaOb:object;
ninjaOb={
    name:'Yoshi',
    age:30
}
// deaclring an object
let ninjaOb2:{
    name:string,
    age:number,
    beltCOlor:string
}
// initializing the object
ninjaOb2={
    name:'Mario',
    age:28,
    beltCOlor:'blasl',

}
//console.log('Obdject',ninjaOb2)


/* ANY KEY WORD */
let age1: any =25;

let nina:{name:any,age:number}

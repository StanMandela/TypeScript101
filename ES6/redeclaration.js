/* 
The var keyword allows you to redeclare a variable without any issue:
 */

// var counter = 0;
// var counter;
// console.log(counter); // 0


/* 
However, redeclaring a variable using the let keyword will result in an error:
 */

// let counter = 0;
// let counter;
// console.log(counter);

for (let i = 0; i < 5; i++) {
	console.log("Inside the loop:", i);
}

console.log("Outside the loop:", i);
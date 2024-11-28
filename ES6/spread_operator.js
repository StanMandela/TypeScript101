/* 
Summary: in this tutorial, you will learn about the JavaScript spread operator that spreads out elements of an iterable object. 
--------------------------------
ES6 provides a new operator called spread operator that consists 
of three dots (...). The spread operator allows you to spread out 
elements of an iterable object such as an array, map, or set. For example:
*/

const odd = [1,3,5];
const combined = [2,4,6, ...odd];
console.log(combined);
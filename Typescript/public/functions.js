"use strict";
let greetings;
greetings = () => {
    console.log('Hddello Again');
};
greetings();
//passing parameters to a function 
const add = (a, b, c = 10) => {
    console.log(a + b);
    console.log(c);
};
add(5, 10);



/* 
 Lesson 1: JavaScript let and callback function in a for loop
     this is a ES^ function using let to define a local variable
      */


/* for (let i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000);
}

//condesnsed function of the one above.
for (let i = 0; i < 5; i++) {
    setTimeout(() => console.log(i), 1000);
} */


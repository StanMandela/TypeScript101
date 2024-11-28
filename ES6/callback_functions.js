/* 
By definition, a callback is a function that you pass into 
another function as an argument for executing later. */

function filter(numbers) {
    let results = [];
    for (const number of numbers) {
      if (number % 2 != 0) {
        results.push(number);
      }
    }
    return results;
  }
//   let numbers = [1, 2, 4, 7, 3, 5, 6];
//   console.log(filter(numbers));

  /* 
  Lets convert tehe above function to have call back functions 
  By definition, the isOdd and isEven are callback functions or callbacks.
  Because the filter() function accepts a function as an argument, it’s called a high-order function. */

  function isOdd(number) {
    return number % 2 != 0;
  }
  function isEven(number) {
    return number % 2 == 0;
  }
  
  function filter(numbers, fn) {
    let results = [];
    for (const number of numbers) {
      if (fn(number)) {
        results.push(number);
      }
    }
    return results;
  }
  let numbers = [1, 2, 4, 7, 3, 5, 6];
  
  console.log('Odd Numbers',filter(numbers, isOdd));
  console.log('Even Numbers',filter(numbers, isEven));

  /* 
  A callback can be an anonymous function, which is a function without a name like this:
  In this example, we pass an anonymous function to the filter() function instead of using a separate function(isOdd or isEven) */
  let odd_numbers = filter(numbers, function (number) {
    return number % 2 != 0;
  });


  /* In ES6, you can use an arrow function like this: */
  let oddNumbers = filter(numbers, (number) => number % 2 != 0);
  let evenNumbers = filter(numbers, (number) => number % 2 == 0);
  
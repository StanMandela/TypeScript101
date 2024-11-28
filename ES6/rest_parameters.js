/* function sum(a,b,...args) {
    let total = 0;
    for (const a of args) {
        total += a;
    }
    return total;
}

res=sum(1, 2, 3,5,6,7,7,6,8);
console.log('Result:',res); */


/* 
Assuming that the caller of the sum() 
function may pass arguments with various kinds of 
data types such as number, string, and boolean, 
and you want to calculate the total of numbers only: */


function sum(...args) {
    return args
      .filter(function (e) {
        return typeof e === 'number';
      })
      .reduce(function (prev, curr) {
        return prev + curr;
      });
  }

//   let result = sum(10,'Hi',null,undefined,20,100,'Hi',null,undefined,20,10,'Hi',null,undefined,20); 
// console.log(result);

/* Example 2:
 JavaScript rest parameters and arrow function */

 const combine = (...args) => {
    return args.reduce(function (prev, curr) {
      return prev + ' ' + curr;
    });
  };
  
  let message = combine('JavaScript', 'Rest', 'Parameters'); // =>
  console.log(message); // JavaScript Rest Parameters
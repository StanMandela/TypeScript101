// function say(message) {
//     message = typeof message !== 'undefined' ? message : 'Hi';

//     console.log(message);
// }

// say(); // 'Hi'
// say('Hello') // 'Hello'

/* function put(toy, toyBox = []) {
    toyBox.push(toy);
    return toyBox;
}

console.log(put('Toy Car'));
// -> ['Toy Car']
console.log(put('Teddy Bear'));
// -> ['Teddy Bear'], not ['Toy Car','Teddy Bear']

let res= put('Teddy Car');
console.log(res) */

// function date(d = today()) {
//     console.log(d);
// }
// function today() {
//     return (new Date()).toLocaleDateString("en-US");
// }
// date();

// function requiredArg() {
//     throw new Error('The argument is required');
//  }
//  function add(x = requiredArg(), y = requiredArg()){
//     anwer= x + y;
//     console.log(anwer);
//     return anwer;
   
//  }
 
 let val1=add(10,45); // error
 let val2=add(10,20); // OK
 function add(x, y = 1, z = 2) {
    console.log( arguments.length );
    return x + y + z;
}

add(10); // 1
add(10, 20); // 2
add(10, 20, 30); // 3
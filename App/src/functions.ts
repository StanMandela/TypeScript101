let greetings:Function;

greetings=()=>{
 console.log('Hddello Again')
}

//greetings()

//passing parameters to a function 
const add=(a:number, b:number,c:number|string=10)=>{
    console.log(a+b);
    console.log(c)
}
add(5,10)

//infer the return type of a function
const minus=(a:number,b:number)=>{
    return a+b;
}
let result=minus(1210,5)
console.log(result)

//explicitly define the return type of a function
const multiply=(a:number,b:number):number=>{
    return a*b;
}
let result2=multiply(5,10)
console.log(result2)


//creating a type alias for a function
type StringOrNum=string|number;
type User={name:string,age:StringOrNum}

const greet=(user:User)=>{
    console.log(`${user.name}  of age ${user.age} says hello`)
}

greet({name:'mario',age:30})
//creating a function signature
let greets: Function;

let greetsFunc:(a:string,b:string)=>void;
greetsFunc = (name:string, greeting:string):void=>{
    console.log(`${name} says ${greeting}`)
}

let calc:(a:number,b:number,c:string)=>number;

calc=(numOne:number,numTwo:number,action:string)=>{
    if(action==='add'){
        return numOne+numTwo
    }else{
        return numOne-numTwo
    }
}

calc(5,110,'add')
console.log(calc(5,110,'add'))

//create a function that has type of function signature
let logDetails:(obj:{name:string,age:number})=>void;
type person={name:string,age:number}

logDetails=(ninja:person)=>{
    console.log(`${ninja.name} is ${ninja.age} years old`)
}
//create an object
let person={name:'mario',age:30}
logDetails(person)



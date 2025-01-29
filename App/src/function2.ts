// thiis is a fuction signature with arrow function
let hello:(a:string, b:string) => void;

hello=(name:string, greeting:string)=>{
    console.log(`${name} says ${greeting}`);
}
hello('John', 'Hello');

let calculator:(a:number, b:number, c:string)=>number;
calculator=(num1:number, num2:number, action:string)=>{
    if(action==='add'){
        return num1+num2;
    }else{
        return num1-num2;
    }
}
console.log(calculator(556, 155, 'add'));


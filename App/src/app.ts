//interfaces
import {HasFormatter} from './interfaces/HasFormatter.js';
import {Invoice} from './classes/Invoices.js';
import {Payments} from './classes/Payments.js';
import { ListTemplate } from './classes/ListTemplates.js';


let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne= new Invoice('Yoshi', 'web work', 250);
docTwo= new Payments('Mario', 'plumbing work', 200);


//create an array of objects for HasFormatter interface
let docs: HasFormatter[]=[];
docs.push(docOne);
docs.push(docTwo);
interface IsPerson{
    name: string;
    age: number;
    speak(a: string): void; // this is a function signature
    spend(a: number): number; // this is a function signature
}

const me: IsPerson={
    name: 'John',
    age: 30,
    speak(text: string): void{
        console.log(text);
    },
    spend(amount: number): number{
        console.log('I spent', amount);
        return amount;
    }
};
const greetPerson=(person: IsPerson)=>{
    console.log('hello', person.name);
}
greetPerson(me);

console.log(me);


const anchor  = document.querySelector('a')!;

if(anchor) {        
console.log(anchor?.href); // http://www.google.com 
}

const form= document.querySelector('form')!; // this is a form element wxists
const type= document.querySelector('.new-item-form') as HTMLFormElement; // this is a form element wxists
console.log(form.children); // HTMLCollection(3) [input, input, button]


// Inputs
const type1= document.querySelector('#type') as HTMLSelectElement;
const tofrom= document.querySelector('#tofrom') as HTMLInputElement;
const details= document.querySelector('#details') as HTMLInputElement;
const amount= document.querySelector('#amount') as HTMLInputElement;

// List template instance
const ul= document.querySelector('ul')!;
const list= new ListTemplate(ul);

form.addEventListener('submit', (e:Event)=>{
    e.preventDefault();
    let doc: HasFormatter;
    //using a tuple
    let values: [string, string, number];
     values=[tofrom.value, details.value, amount.valueAsNumber];
    if(type1.value==='invoice'){
        doc= new Invoice(...values);
    }else{
        doc= new Payments(...values);
    }
    list.render(doc, type1.value, 'end');
});


// Classes


const invOne= new Invoice('mario', 'work on the mario website', 250);
const invTwo= new Invoice('luigi', 'work on the luigi website', 300);

let invoices: Invoice[]=[];
invoices.push(invOne);
invoices.push(invTwo);

invoices.forEach(inv=>{
    //console.log(inv.client, inv.details,inv.amount ,inv.format());
});

//Generics
const addUID= <T extends object>(obj:T )=>{
    let uid= Math.floor(Math.random()*100);
    return {...obj, uid};
}
let docOne1= addUID({name: 'yoshi', age: 40});
// let docTwo1= addUID('hello');
console.log(docOne1.age);


enum ResourceType {BOOK, AUTHOR, FILM, DIRECTOR, PERSON}
interface Resource<T>{  
    uid: number;
    resourceName: ResourceType;
    data: T;
}

const docThree: Resource<object>={
    uid: 1,
    resourceName: ResourceType.DIRECTOR,
    data: {name: 'shaun'}
}
const docFour: Resource<string>={   
    uid: 2,
    resourceName: ResourceType.BOOK,
    data: 'milk'
}
console.log(docThree, docFour);


//tuples - data types are fixed and ordered

let arr= ['john', 25, true];
arr[0]= false;
arr[1]= 'yoshi';
arr= [30, false, 'yoshi'];

let tup: [string, number, boolean]= ['john', 25, true];
tup[2]= false;
tup[0]= 'ken';

let student: [string, number];
student= ['chun-li', 223423];



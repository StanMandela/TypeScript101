import { Invoice } from './classes/Invoices.js';
import { Payments } from './classes/Payments.js';
import { ListTemplate } from './classes/ListTemplates.js';
let docOne;
let docTwo;
docOne = new Invoice('Yoshi', 'web work', 250);
docTwo = new Payments('Mario', 'plumbing work', 200);
//create an array of objects for HasFormatter interface
let docs = [];
docs.push(docOne);
docs.push(docTwo);
const me = {
    name: 'John',
    age: 30,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log('I spent', amount);
        return amount;
    }
};
const greetPerson = (person) => {
    console.log('hello', person.name);
};
greetPerson(me);
console.log(me);
const anchor = document.querySelector('a');
if (anchor) {
    console.log(anchor === null || anchor === void 0 ? void 0 : anchor.href); // http://www.google.com 
}
const form = document.querySelector('form'); // this is a form element wxists
const type = document.querySelector('.new-item-form'); // this is a form element wxists
console.log(form.children); // HTMLCollection(3) [input, input, button]
// Inputs
const type1 = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// List template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    //using a tuple
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    if (type1.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payments(...values);
    }
    list.render(doc, type1.value, 'end');
});
const invOne = new Invoice('mario', 'work on the mario website', 250);
const invTwo = new Invoice('luigi', 'work on the luigi website', 300);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(inv => {
    //console.log(inv.client, inv.details,inv.amount ,inv.format());
});
//Generics
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne1 = addUID({ name: 'yoshi', age: 40 });
// let docTwo1= addUID('hello');
console.log(docOne1.age);
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
const docThree = {
    uid: 1,
    resourceName: ResourceType.DIRECTOR,
    data: { name: 'shaun' }
};
const docFour = {
    uid: 2,
    resourceName: ResourceType.BOOK,
    data: 'milk'
};
console.log(docThree, docFour);
//tuples - data types are fixed and ordered
let arr = ['john', 25, true];
arr[0] = false;
arr[1] = 'yoshi';
arr = [30, false, 'yoshi'];
let tup = ['john', 25, true];
tup[2] = false;
tup[0] = 'ken';
let student;
student = ['chun-li', 223423];

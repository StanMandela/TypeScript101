import { Invoice } from './classes/Invoices.js';
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
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type1.value, tofrom.value, details.value, amount.valueAsNumber);
});
// Classes
const invOne = new Invoice('mario', 'work on the mario website', 250);
const invTwo = new Invoice('luigi', 'work on the luigi website', 300);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(inv => {
    console.log(inv.client, inv.details, inv.amount, inv.format());
});
console.log(invoices);

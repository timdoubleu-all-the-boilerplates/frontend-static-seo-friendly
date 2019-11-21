import { saySomething } from './util/utility';

console.log('Hello Boilerplate Project!!');
saySomething("Taco");

const greeting = saySomething("Taco");
let myH1 = document.createElement('h1');
myH1.innerText = greeting
document.body.appendChild(myH1);

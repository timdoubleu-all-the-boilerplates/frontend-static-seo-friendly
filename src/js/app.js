// App wide root JS, a place you can import your libraries, and write JS needed across the entire site
import { saySomething } from './lib/utility';
import $ from 'jquery';

console.log('App wide JS code, including libraries, like jQuery:');
console.log($);

$(document).ready(function() {
  console.log("jQuery page has loaded");
})

const greeting = saySomething("Taco");
let myH1 = document.createElement('h1');
myH1.innerText = greeting;
document.body.appendChild(myH1);

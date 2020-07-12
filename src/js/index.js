import Print from './print.js';
import '../sass/main.scss';
import $ from 'jquery';
import {b} from './modules/autorization';



$('body').css('background-color', 'green');


let a = 10;

console.log(`I am: ${a + b}`);

console.group( "process.env.NODE_ENV" );
console.log( process.env.NODE_ENV );
console.groupEnd();
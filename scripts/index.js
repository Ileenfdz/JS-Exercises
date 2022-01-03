import { numberToString, removeChar, findSmallestInt, summation } from './exercise11.js';
export function app11(){
    // console.log("Connected to app");
    numberToString(42)//Result should be = "42"
    numberToString(5)//Result should be = "5"
    numberToString(20)//Result should be = "20"

    removeChar("hello")//Result should be = "ell"
    removeChar("Goodbye")//Result should be = "oodby"
    removeChar("Happy")//Result should be = "app"

    findSmallestInt([20,3,500,2,1])//Result should be = "1"
    findSmallestInt([20,10,62,9,12])//Result should be = "9"
    findSmallestInt([21,31,5,23,14])//Result should be = "5"

    summation(20)//Result should be = "210"
    summation(2)//Result should be = "3"
    summation(8)//Result should be = "36"
}
app();
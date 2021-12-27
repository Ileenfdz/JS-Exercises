import { numberToString, removeChar, findSmallestInt } from './exercise.js';
export function app(){
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
}
app();
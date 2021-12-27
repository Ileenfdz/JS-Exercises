import { numberToString, removeChar } from './exercise.js';
export function app(){
    // console.log("Connected to app");
    numberToString(42)//Result should be = "42"
    numberToString(5)//Result should be = "5"
    numberToString(20)//Result should be = "20"

    removeChar("hello")//Result should be = "ell"
    removeChar("Goodbye")//Result should be = "oodby"
    removeChar("Happy")//Result should be = "app"
}
app();
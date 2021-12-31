import { isDivisible } from './exercise.js';
export function app(){
    // console.log("Connected to app");
    isDivisible(3, 1, 3)//Result should be = true
    isDivisible(12, 2, 6)//Result should be = true
    isDivisible(100, 5, 3)//Result should be = false
}
app();
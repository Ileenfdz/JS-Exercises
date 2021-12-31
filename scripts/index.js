import { isDivisible, greet } from './exercise.js';
export function app(){
    // console.log("Connected to app");
    isDivisible(3, 1, 3)//Result should be = true
    isDivisible(12, 2, 6)//Result should be = true
    isDivisible(100, 5, 3)//Result should be = false

    greet("Riven")//Result should be = "Hello, Riven how are you doing today?"

    digitize(35231)//Result should be = "[1,3,2,5,3]"
}
app();
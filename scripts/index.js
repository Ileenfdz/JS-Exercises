import { positiveSum } from './exercise.js';
export function app(){
    // console.log("Connected to app");
    positiveSum([1,2,3,4,5])//Result should be = 15
    positiveSum([1,-2,3,4,5])//Result should be = 13
    positiveSum([-1,2,3,4,-5])//Result should be = 9
}
app();
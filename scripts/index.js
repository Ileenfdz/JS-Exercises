import { positiveSum, twiceAsOld } from './exercise.js';
export function app(){
    // console.log("Connected to app");
    positiveSum([1,2,3,4,5])//Result should be = 15
    positiveSum([1,-2,3,4,5])//Result should be = 13
    positiveSum([-1,2,3,4,-5])//Result should be = 9

    twiceAsOld(36,7)//Result should be = 22
    twiceAsOld(55,30)//Result should be = 5
    twiceAsOld(42,21)//Result should be = 0
}
app();
import { makeNegative } from './exercise.js';
export function app(){
    // console.log("Connected to app");
    makeNegative(42)//Result should be = -42
    makeNegative(-5)//Result should be = -5
    makeNegative(0)//Result should be = 0
}
app();
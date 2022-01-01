import { past } from './exercise.js';
export function app(){
    // console.log("Connected to app");
    past(0, 1, 1)//Result should be = 61000
    past(1, 1, 1)//Result should be = 3661000
}
app();
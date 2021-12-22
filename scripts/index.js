import { paperwork } from './exercise.js';
export function app(){
    // console.log("Connected to app");
    paperwork(5,5)//Result should be = 25
    paperwork(0,5)//Result should be = 0
    paperwork(5,0)//Result should be = 0
    paperwork(2,5)//Result should be = 10
}
app();
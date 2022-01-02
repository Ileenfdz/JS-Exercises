import { shortcut } from './exercise.js';
export function app(){
    // console.log("Connected to app");
    shortcut('hello')//Result should be = 'hll'
    shortcut('how are you today?')//Result should be = 'hw r y tdy?
}
app();
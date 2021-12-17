import {splitStrings} from './exercise.js';

export function app(){
    console.log("Connected to app");
    splitStrings("abcdef");
    splitStrings("abcdefg");
    splitStrings("");
}

app();
import {finalGrade} from './exercise.js';

export function app(){
    console.log("Connected to app");
    finalGrade(100, 12);
    finalGrade(85, 5);
}
app();
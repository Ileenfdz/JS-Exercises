import {uniTotal} from './exercise.js';
import {elevatorDistance } from './extraExercise.js';
import {addBinary} from './extrax2exercise.js';

export function app(){
    // console.log("Connected to app");
    uniTotal("a"); //97
    uniTotal("b"); //98
    uniTotal("c"); //99
    uniTotal("d"); //100
    uniTotal("e"); //101

    elevatorDistance([5,2,8]); //9
    elevatorDistance([1,2,3]); //2
    elevatorDistance([7,1,7,1]); //18

    addBinary(1,1); //10
    addBinary(5,9); //1110
}
app();
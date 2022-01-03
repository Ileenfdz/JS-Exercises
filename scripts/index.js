import {uniTotal, elevatorDistance, addBinary} from './exercise4.js';
export function app4(){
    // console.log("Connected to app");
    uniTotal("a"); //Result should be = 97
    uniTotal("b"); //Result should be = 98
    uniTotal("c"); //Result should be = 99
    uniTotal("d"); //Result should be = 100
    uniTotal("e"); //Result should be = 101

    elevatorDistance([5,2,8]); //Result should be = 9
    elevatorDistance([1,2,3]); //Result should be = 2
    elevatorDistance([7,1,7,1]); //Result should be = 18

    addBinary(1,1); //Result should be = 10
    addBinary(5,9); //Result should be = 1110
}
app();